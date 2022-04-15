type Coordinates = {
  x: number,
  y: number,
  direction: string
}

export class MarsRover {
  landingCoords:string = ""
  commandMovement:string = ""
  result:string = ""
  currentPosition:Coordinates = {x:0,y:0,direction:"N"}

  constructor(_landingCoords:string, _commandMovement:string){
    this.landingCoords = _landingCoords
    this.commandMovement = _commandMovement

    this.initialCoords()
    this.main()
  }

  main (){
    var commandMovementArray:string[]
    if(this.commandMovement === "") this.result = this.landingCoords
    if (this.commandMovement != "") 
    {
      commandMovementArray = this.convertStringToArray(this.commandMovement)
      commandMovementArray.forEach(item => {
        this.updateLocation(item)
      });
      this.updateResult()
    }
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

  updateLocation(item:string){
    if (item === 'R' || item === 'L') this.updateDirection(item)
    if (this.currentPosition.direction === 'N' && item ==='M') this.advanceOneNorthDireccion()
    if (this.currentPosition.direction === 'S' && item ==='M') this.advanceOneSouthDireccion()
  }

  updateDirection(item:string){
    if (this.currentPosition.direction === "N") 
    {
      this.updateNorthDirection(item)
      return
    }
    if (this.currentPosition.direction === "E")
    {
      this.updateEastDirection(item)
      return
    }
    if (this.currentPosition.direction === "S")
    {
      this.updateSouthDirection(item)
      return
    }
    if (this.currentPosition.direction === "W")
    {
      this.updateWestDirection(item)
      return
    }
  }


  updateNorthDirection(item:string){
    if (item === 'R') this.currentPosition.direction = 'E'
    else this.currentPosition.direction = 'W'
  }

  updateSouthDirection(item:string){
    if (item === 'R') this.currentPosition.direction = 'W'
    else this.currentPosition.direction = 'E'
  }

  updateEastDirection(item:string){
    if (item === 'R') this.currentPosition.direction = 'S'
    else this.currentPosition.direction = 'N'
  }
  updateWestDirection(item:string){
    if (item === 'R') this.currentPosition.direction = 'N'
    else this.currentPosition.direction = 'S'
  }


  advanceOneNorthDireccion(){
    this.currentPosition.y++
  }
  advanceOneSouthDireccion(){
    this.currentPosition.y--
  }

  updateResult(){
    this.result = `${this.currentPosition.x.toString()},${this.currentPosition.y.toString()},${this.currentPosition.direction}`
  }
}