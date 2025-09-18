"use client";

import { Form } from "react-bootstrap";
import ForgetPassword from "./ForgetPassword";

type EmailFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
};

export default function Password({
  label = "Password",
  placeholder = "Enter Password",
  required = false,
}: EmailFieldProps) {
  return (
    <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label style={{fontSize:"11px", fontWeight:"600"}}>{label}</Form.Label>
      <Form.Control 
        type="email" 
        placeholder={placeholder} 
        required={required}
        style={{borderColor:"#C8C6CE", borderWidth:"1px",color:"#2A2338", fontSizeAdjust: "14px", }}
        className="input-placeholder"
      />
      <ForgetPassword />
    </Form.Group>
  );
}
