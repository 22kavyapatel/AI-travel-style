from fastapi import APIRouter
from pydantic import BaseModel
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")

router = APIRouter()

class Chatrequest(BaseModel):
    query: str

@router.post("/chat")
def chat(data: Chatrequest):

    prompt = f"""
You are a travel and fashion planner.

STRICT FORMAT:

Day 1:
Plan: <short>
Food: <short>
Caption: <short>
Outfit: <Top + Bottom + Footwear + Accessories>

Day 2:
Plan: <short>
Food: <short>
Caption: <short>
Outfit: <Top + Bottom + Footwear + Accessories>

Essentials:
- item 1
- item 2

User Input:
{data.query}

Rules:
- ALWAYS include Outfit, Food, Caption
- Keep short
"""

    model = genai.GenerativeModel("gemini-2.5-flash-lite")
    res = model.generate_content(prompt)

    return {"answer": res.text}