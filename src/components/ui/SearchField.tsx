import { Form, FormControl, Button } from "react-bootstrap";

export default function SearchField() {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search..."
        className="me-2"
        aria-label="Search"
      />
      <Button variant="primary">Search</Button>
    </Form>
  );
}