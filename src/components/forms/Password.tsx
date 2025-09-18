"use client";

import { Form } from "react-bootstrap";
import ForgetPassword from "./ForgetPassword";
import { UseFormRegister } from "react-hook-form";

type EmailFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  forgetPassword?: boolean;
  name?: string;
  error?: string;
  register?: UseFormRegister<Record<string, unknown>>;
};

export default function Password({
  label = "Password",
  placeholder = "Enter Password",
  required = false,
  forgetPassword = false,
  error,
  register,
  name="password",
}: EmailFieldProps) {
  return (
    <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label style={{fontSize:"11px", fontWeight:"600"}}>{label}</Form.Label>
      <Form.Control 
        type="password" 
        placeholder={placeholder} 
        required={required}
        style={{borderColor:"#C8C6CE", borderWidth:"1px",color:"#2A2338", fontSizeAdjust: "14px", }}
        className="input-placeholder"
             {...(register ? register(name) : {})} 
      />
      {forgetPassword && <ForgetPassword />}
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
}
