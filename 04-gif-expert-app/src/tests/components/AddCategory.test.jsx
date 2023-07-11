import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../components/AddCategory/AddCategory";
import { jest, describe, test, expect } from "@jest/globals";

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
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("searchbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug()

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("dont should call onNewCategory function if the input is empty", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);
    // screen.debug()

    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);

  });
});
