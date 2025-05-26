import { Button } from "./buttonComponent";
import { render, screen } from "@testing-library/react";

describe('Componente <Button />', () => {
  it('should show label', () => {
    render(<Button label="teste"/>)

    screen.getByText('teste')
  });
});
