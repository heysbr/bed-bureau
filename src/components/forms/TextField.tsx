"use client";

import { Form } from "react-bootstrap";

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
};

export default function TextField({
  label = "Enter Text",
  placeholder = "Type something...",
  required = false,
}: TextFieldProps) {
  return (
    <Form.Group className="mb-3" controlId="formText">
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type="text" 
        placeholder={placeholder} 
        required={required}
      />
    </Form.Group>
  );
}
