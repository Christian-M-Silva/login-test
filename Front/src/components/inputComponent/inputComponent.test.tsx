import { Input } from "./inputComponent";
import { render, screen } from "@testing-library/react";

describe('Componente <Input />', () => {
  it('should show label', () => {
    render(<Input label="teste"/>)

    screen.getByText('teste')
  });
});
