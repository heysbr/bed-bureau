// "use client";

// import { Form } from "react-bootstrap";
// import { UseFormRegister } from "react-hook-form";

// type EmailFieldProps = {
//   label?: string;
//   placeholder?: string;
//   required?: boolean;
//   name?: string,
//   register?: UseFormRegister<any>;
// };

// export default function EmailField({
//   label = "Email address",
//   placeholder = "Enter your email",
//   required = false,
//   name,
//   register,
//   ...props
// }: EmailFieldProps) {

//   return (
//     <Form.Group className="mb-3" controlId="formEmail">
//       <Form.Label style={{fontSize:"11px", fontWeight:"600"}}>{label}</Form.Label>
//       <Form.Control 
//         type="email" 
//         placeholder={placeholder} 
//         required={required}
//         style={{borderColor:"#C8C6CE", borderWidth:"1px",color:"#2A2338", fontSizeAdjust: "14px", }}
//         className="input-placeholder"
//         {...(register ? register(name) : { })}
//       />
//     </Form.Group>
//   );
// }



"use client";

import { Form } from "react-bootstrap";
import { UseFormRegister } from "react-hook-form";

type EmailFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  error?: string;
  register?: UseFormRegister<Record<string, string>>;
};

export default function EmailField({
  label = "Email address",
  placeholder = "Enter your email",
  required = false,
  name = "email",
  error,
  register,
}: EmailFieldProps) {
  return (
    <Form.Group className="mb-3" controlId={`form-${name}`}>
      <Form.Label style={{ fontSize: "11px", fontWeight: "600" }}>
        {label}
      </Form.Label>
      <Form.Control
        type="email"
        placeholder={placeholder}
        required={required}
        style={{
          borderColor: "#C8C6CE",
          borderWidth: "1px",
          color: "#2A2338",
          fontSize: "14px",
        }}
        className="input-placeholder"
        {...(register ? register(name) : {})} 
        // {...props} 
      />
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
}