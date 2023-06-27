import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../components/AddCategory/AddCategory";

describe("Test in <AddCategory></AddCategory>", () => {
  test("should change textbox value", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("searchbox"); //searchbox, textbox, etc, depende del valor del type del input html

    // Disparo el evento
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
    // screen.debug()
  });

  test("should call to handleSubmit if the input has a value", () => {
    const inputValue = "Saitama";
    // TODO: ???
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("searchbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug()

    expect(input.value).toBe("");
  });
});
