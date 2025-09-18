
import Checkbox from "@/components/forms/Checkbox";
import EmailField from "@/components/forms/EmailField";
import Password from "@/components/forms/Password";
import SelectField from "@/components/forms/SelectField";
import TextField from "@/components/forms/TextField";
import type { FieldConfig } from "@/utils/SchemaGenerator";
import type { FieldType } from "@/utils/SchemaGenerator";

interface FormFieldProps {
  name: string;
  type?: FieldType;
  placeholder?: string;
  label?: string;
  forget_password?: boolean;
}

export const fieldComponentMap: {
  [key: string]: React.ComponentType<FormFieldProps>;
} = {
  text: TextField,
  password: Password,
  select: SelectField,
  email: EmailField,
  checkbox: Checkbox,
};
export const LoginFields: FieldConfig[] = [
  {
    name: "email",
    type: "email" as FieldType,
    placeholder: "Enter email id",
    label: "Email ID",
  },
  {
    name: "password",
    type: "password" as FieldType,
    placeholder: "Enter Password",
    label: "Password",
    forget_password: true,
  },
];
