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

  it("When the move command R MarsRover changes it orientation one for each M on the positive Y axis", () => {
    const expected = "1,4,N";
    const marsRover = new MarsRover("1,2,N", "MM");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is R MarsRover changes its orientation", () => {
    const expected = "1,2,E";
    const marsRover = new MarsRover("1,2,N", "R");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is L MarsRover changes its orientation", () => {
    const expected = "1,2,W";
    const marsRover = new MarsRover("1,2,N", "L");
    expect(marsRover.result).toEqual(expected);
  })



})
