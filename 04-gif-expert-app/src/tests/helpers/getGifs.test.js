import { getGifs } from "../../helpers/getGifs";
import { describe, test, expect } from "@jest/globals";

describe("Tests in getGifs File", () => {
  test("Should be return Gif's Array", async () => {

    const gifs = await getGifs('One Punch') 
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String) 
    });
  });
});
