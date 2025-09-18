import { Form } from "react-bootstrap";

export default function Checkbox() {
  return (
    <Form.Check
      type="checkbox"
      id="id"
      label={`default checkbox`}
    />
  );
}
