from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr, Field
from database_con import SessionLocal, Base, engine
from sqlalchemy import Column, Integer, String
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True)
    username = Column(String, unique=True)
    password = Column(String)
    age = Column(Integer)
    full_name = Column(String)

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str
    age: int
    full_name: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    username: str
    age: int
    full_name: str

    class Config:
        orm_mode = True

class UserLogin(BaseModel):
    username_or_email: str
    password: str

Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
    hashed = pwd_context.hash(user.password)

    new_user = User(
        email=user.email,
        username=user.username,
        password=hashed,
        age=user.age,
        full_name=user.full_name
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post("/login", response_model=UserResponse)
def login(data: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(
        (User.email == data.username_or_email) |
        (User.username == data.username_or_email)
    ).first()

    if not user or not pwd_context.verify(data.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid login")

    return user