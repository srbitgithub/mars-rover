type Coordinates = {
  x: number,
  y: number,
  direction: string
}

type WorldCoordinates = {
  x: number,
  y: number,
}

export class MarsRover {
  NORTH:string = 'N'
  SOUTH:string = 'S'
  EAST:string = 'E'
  WEST:string = 'W'
  ROTATION_RIGHT:string = 'R'
  ROTATION_LEFT:string = 'L'
  MARS_ROVER_ADVANCE = 'M'

  landingCoords:string = ''
  commandMovement:string = ''
  result:string = ''
  currentPosition:Coordinates = {x:0,y:0,direction:this.NORTH}
  worldLimits:WorldCoordinates = {x:5,y:5}
  currentCommand:string = ''

  WORLD_MIN_LIMIT:number = 1
  WORLD_MAX_LIMIT:number = this.worldLimits.x

  constructor(_landingCoords:string, _commandMovement:string){
    this.landingCoords = _landingCoords
    this.commandMovement = _commandMovement

    this.initialCoords()
    this.main()
  }

  main (){
    if(this.commandMovement === '') this.result = this.landingCoords
    else this.checkCommand()
  }

  checkCommand(){
    var commandMovementArray:string[]
    commandMovementArray = this.convertStringToArray(this.commandMovement)
    commandMovementArray.forEach(item => {
      this.currentCommand = item
      this.updateLocation()
    });
    this.updateResult()
  }

  initialCoords(){
    var stringToConvertArray:string[]
    stringToConvertArray = this.convertStringToArrayByComas(this.landingCoords)
    this.currentPosition.x = parseInt(stringToConvertArray[0])
    this.currentPosition.y = parseInt(stringToConvertArray[1])
    this.currentPosition.direction = stringToConvertArray[2]
  }
  
  convertStringToArray(stringToConvert:string):string[]{
    return stringToConvert.split('')
  }
  
  convertStringToArrayByComas(stringToConvert:string):string[]{
    return stringToConvert.split(',')
  }

  updateLocation(){
    if (this.currentCommand === this.MARS_ROVER_ADVANCE) this.selectDirectionToAdvance()
    else this.updateDirection()
  }

  updateDirection(){
    if (this.currentPosition.direction === this.NORTH)
    {
      this.updateNorthDirection()
      return
    } 
    if (this.currentPosition.direction === this.SOUTH) 
    {
      this.updateSouthDirection()
      return
    }
    if (this.currentPosition.direction === this.EAST) 
    {
      this.updateEastDirection()
      return
    }
    if (this.currentPosition.direction === this.WEST) 
    {
      this.updateWestDirection()
      return
    }
  }

  selectDirectionToAdvance(){
    if (this.currentPosition.direction === this.NORTH) this.advanceOneNorthDireccion()
    if (this.currentPosition.direction === this.SOUTH) this.advanceOneSouthDireccion()
    if (this.currentPosition.direction === this.EAST) this.advanceOneEastDireccion()
    if (this.currentPosition.direction === this.WEST) this.advanceOneWestDireccion()
  }

  updateNorthDirection(){
    if (this.currentCommand === this.ROTATION_RIGHT) this.currentPosition.direction = this.EAST
    else this.currentPosition.direction = this.WEST
  }

  updateSouthDirection(){
    if (this.currentCommand === this.ROTATION_RIGHT) this.currentPosition.direction = this.WEST
    else this.currentPosition.direction = this.EAST
  }

  updateEastDirection(){
    if (this.currentCommand === this.ROTATION_RIGHT) this.currentPosition.direction = this.SOUTH
    else this.currentPosition.direction = this.NORTH
  }

  updateWestDirection(){
    if (this.currentCommand === this.ROTATION_RIGHT) this.currentPosition.direction = this.NORTH
    else this.currentPosition.direction = this.SOUTH
  }

  advanceOneNorthDireccion(){
    this.currentPosition.y = this.clampNumber(this.currentPosition.y + 1)
  }

  advanceOneSouthDireccion(){
    this.currentPosition.y = this.clampNumber(this.currentPosition.y - 1)
  }

  advanceOneEastDireccion(){
    this.currentPosition.x = this.clampNumber(this.currentPosition.x + 1)
  }

  advanceOneWestDireccion(){
    this.currentPosition.x = this.clampNumber(this.currentPosition.x - 1)
  }

  clampNumber(value:number){
    if (value < this.WORLD_MIN_LIMIT) return this.WORLD_MAX_LIMIT
    if (value > this.WORLD_MAX_LIMIT) return this.WORLD_MIN_LIMIT
    return value
  }

  updateResult(){
    this.result = `${this.currentPosition.x.toString()},${this.currentPosition.y.toString()},${this.currentPosition.direction}`
  }
}