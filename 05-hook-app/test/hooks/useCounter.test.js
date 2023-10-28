import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/Hooks/useCounter";
import { describe, test, expect } from "jest";
import { act } from "react-dom/test-utils";

describe("Pruebas en el useCounter", () => {

  test("Debe retornar los valores por defecto ", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, Decrement, Increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(Decrement).toEqual(expect.any(Function));
    expect(Increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe generar el counter con el valor de 100 ", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test("Debe incrementar el contador", () => {

    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(101);
    expect(result.current.counter).toBe(103);
  });

  test("Debe decrementar el contador", () => {

    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(101);
    expect(result.current.counter).toBe(103);
  });
 
 
  test("Debe resetear el contador", () => {

    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, reset } = result.current;

    act(() => {
      decrement();
      reset();
    });

    expect(result.current.counter).toBe(101);
    expect(result.current.counter).toBe(103);
  });
});








