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

  it("When the move command is M and orientation is N MarsRover advances one by M in positive axis Y", () => {
    const expected = "1,4,N";
    const marsRover = new MarsRover("1,2,N", "MM");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is R MarsRover changes its orientation when is N", () => {
    const expected = "1,2,E";
    const marsRover = new MarsRover("1,2,N", "R");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is L MarsRover changes its orientation when is N", () => {
    const expected = "1,2,W";
    const marsRover = new MarsRover("1,2,N", "L");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is R MarsRover changes its orientation when is E", () => {
    const expected = "1,2,S";
    const marsRover = new MarsRover("1,2,E", "R");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is L MarsRover changes its orientation when is E", () => {
    const expected = "1,2,N";
    const marsRover = new MarsRover("1,2,E", "L");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is R MarsRover changes its orientation when is S", () => {
    const expected = "1,2,W";
    const marsRover = new MarsRover("1,2,S", "R");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is L MarsRover changes its orientation when is S", () => {
    const expected = "1,2,E";
    const marsRover = new MarsRover("1,2,S", "L");
    expect(marsRover.result).toEqual(expected);
  })

})
