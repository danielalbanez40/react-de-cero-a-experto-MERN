import GifGrid from "../../components/GifGrid/GifGrid";
import { render, screen } from "@testing-library/react";
import useFetchGifs from "../../hooks/useFetchGifs/useFetchGifs";
import { jest, describe, test, expect } from "@jest/globals";


jest.mock("../../hooks/useFetchGifs/useFetchGifs");

describe("Tests in <GifGrid/>", () => {
  const category = "One Punch";

  test("should show loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));

    // screen.debug();
  });

  test("should show items when images are loading through useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },

      {
        id: "123",
        title: "Goku",
        url: "https://localhost/Goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
    screen.debug();
  });
});
