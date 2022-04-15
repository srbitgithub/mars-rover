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

  it("When the move command is R MarsRover changes its orientation when is W", () => {
    const expected = "1,2,N";
    const marsRover = new MarsRover("1,2,W", "R");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is L MarsRover changes its orientation when is W", () => {
    const expected = "1,2,S";
    const marsRover = new MarsRover("1,2,W", "L");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is RR MarsRover changes its orientation two times", () => {
    const expected = "1,2,S";
    const marsRover = new MarsRover("1,2,N", "RR");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is LL MarsRover changes its orientation three times", () => {
    const expected = "1,2,S";
    const marsRover = new MarsRover("1,2,E", "LLL");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is M and orientation is S MarsRover advances one by M in negative axis Y", () => {
    const expected = "1,1,S";
    const marsRover = new MarsRover("1,3,S", "MM");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is M and orientation is E MarsRover advances one by M in positive axis X", () => {
    const expected = "3,2,E";
    const marsRover = new MarsRover("1,2,E", "MM");
    expect(marsRover.result).toEqual(expected);
  })

  it("When the move command is M and orientation is W MarsRover advances one by M in negative axis X", () => {
    const expected = "1,2,W";
    const marsRover = new MarsRover("3,2,W", "MM");
    expect(marsRover.result).toEqual(expected);
  })

  it("First complex movement", () => {
    const expected = "1,1,S";
    const marsRover = new MarsRover("3,3,N", "MMLMMLMMMM");
    expect(marsRover.result).toEqual(expected);
  })

  it("Second complex movement", () => {
    const expected = "1,1,W";
    const marsRover = new MarsRover("1,1,N", "MMRMLMRMRMLMRMMRMMM");
    expect(marsRover.result).toEqual(expected);
  })

  it("When is orientation is E and MarsRover arrives to the maximum world limit appears in opposit worl position", () => {
    const expected = "1,1,E";
    const marsRover = new MarsRover("1,1,E", "MMMMM");
    expect(marsRover.result).toEqual(expected);
  })

  it("When is orientation is W and MarsRover arrives to the minimum world limit appears in opposit worl position", () => {
    const expected = "5,1,W";
    const marsRover = new MarsRover("3,1,W", "MMM");
    expect(marsRover.result).toEqual(expected);
  })

  it("When is orientation is N and MarsRover arrives to the maximum world limit appears in opposit worl position", () => {
    const expected = "1,1,N";
    const marsRover = new MarsRover("1,1,N", "MMMMM");
    expect(marsRover.result).toEqual(expected);
  })

  it("When is orientation is S and MarsRover arrives to the minimum world limit appears in opposit worl position", () => {
    const expected = "1,5,S";
    const marsRover = new MarsRover("1,3,S", "MMM");
    expect(marsRover.result).toEqual(expected);
  })
})
