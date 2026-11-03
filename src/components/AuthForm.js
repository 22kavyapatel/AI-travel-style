"use client"
import InputField from "./InputField"
import Button from "./Button"

export default function AuthForm({
  title,
  fields,
  formData,
  onChange,
  onSubmit,
  showPasswordToggle,
  extraContent,
  error,
  message,
  submitButtonClass = "auth-submit-btn",
  submitButtonText, // <-- NEW PROP ADDED HERE
}) {
  return (
    <div className="auth-form-container">
      {title && <h2 className="auth-form-title">{title}</h2>}

      <form onSubmit={onSubmit} className="auth-form">
        <div className="form-fields">
          {fields.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={onChange}
              options={field.options}
            />
          ))}
        </div>

        {showPasswordToggle}

        {(error || message) && (
          <div className={`form-message ${error ? "error" : "success"}`}>{error || message}</div>
        )}

        {/* MODIFIED: Use submitButtonText prop for the button's name */}
        <Button
          type="submit"
          name={submitButtonText || (typeof title === "string" && title !== "" ? title : "Submit")}
          className={submitButtonClass}
        />

        {extraContent}
      </form>
    </div>
  )
}