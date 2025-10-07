import { z } from "zod";

// Define supported field types (for clarity)
const fieldValidators = {
  text: z.string().min(1, "This field is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.email("Invalid email"),
  checkbox: z
    .boolean()
    .refine((val) => val === true, { message: "You must accept this" }),
  // select: z.string().min(1, "Please select an option"),
};

// Generate schema dynamically based on field config
export function generateSchema(fieldConfig) {
  const shape = {};

  fieldConfig.forEach((field) => {
    const validator = fieldValidators[field.type];
    if (validator) {
      shape[field.name] = validator;
    }
  });

  return z.object(shape);
}
