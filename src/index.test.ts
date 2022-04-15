import { MarsRover } from "./index"

describe("Mars Rover", () => {
  it("If command to move is empty, returns same coords.", () => {
    const expected = "5,5,N";
    const marsRover = new MarsRover("5,5,N", "");
    expect(marsRover.result).toEqual(expected);
  })

  it("When command to move is M MarsRover advance one by M", () => {
    const expected = "1,5,N";
    const marsRover = new MarsRover("1,2,N", "MMM");
    expect(marsRover.result).toEqual(expected);
  })

})
