import { describe, test, expect} from "@jest/globals";
import useFetchGifs from "../../hooks/useFetchGifs/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Tests in Hook useFetchGifs", () => {
  test("should return initial state ", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;
    // useFetchGifs();

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });


  test('should return images array & isLoading with value false', async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    
    await waitFor(
        () => expect(result.current.images.length).toBeGreatherThan(0),
        // {
        //     timeout:1000
        // }
    );

    const { images, isLoading } = result.current;
    
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  })

});
