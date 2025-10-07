import { fieldComponentMap } from "@/data/fields";
import TextField from "./TextField";

export default function FormField(props) {
  const { type, ...rest } = props;

  const FieldComponent = fieldComponentMap[type] ?? TextField;
  return <FieldComponent {...rest} />;
}
