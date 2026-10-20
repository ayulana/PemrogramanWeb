"use strict";

const form = document.querySelector("#registration-form");
const fields = [...form.querySelectorAll("input, select, textarea")];
const status = document.querySelector("#status");

const emailPattern = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

function validateField(field) {
  let message = "";

  if (field.type === "checkbox") {
    if (!field.checked) {
      message = "Please agree to the information above.";
    }
  } else if (!field.value.trim()) {
    message = "This field is required.";
  } else if (field.type === "email") {
    if (field.validity.typeMismatch || !emailPattern.test(field.value.trim())) {
      message = "Please enter a valid email, such as example@domain.com.";
    }
  } else if (field.type === "password" && field.value.length < 6) {
    message = "Password must contain at least 6 characters.";
  }

  field.setAttribute("aria-invalid", String(Boolean(message)));
  const errorElement = document.getElementById(`${field.id}-error`);
  if (errorElement) errorElement.textContent = message;

  return !message;
}

fields.forEach((field) => {
  field.addEventListener("blur", () => validateField(field));

  field.addEventListener("input", () => {
    status.textContent = "";
    if (field.getAttribute("aria-invalid") === "true") {
      validateField(field);
    }
  });

  field.addEventListener("change", () => {
    status.textContent = "";
    validateField(field);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "";

  const isValid = fields.map(validateField).every(Boolean);

  if (!isValid) {
    const firstInvalidField = fields.find(
      (field) => field.getAttribute("aria-invalid") === "true"
    );
    if (firstInvalidField) firstInvalidField.focus();
    return;
  }

  status.textContent = "Registration validated successfully.";
});

form.addEventListener("reset", () => {
  fields.forEach((field) => {
    field.removeAttribute("aria-invalid");
    const errorElement = document.getElementById(`${field.id}-error`);
    if (errorElement) errorElement.textContent = "";
  });

  status.textContent = "";
});
