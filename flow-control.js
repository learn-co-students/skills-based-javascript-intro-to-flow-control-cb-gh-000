function basicTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager!" : undefined;
}

function teenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager!" : "You are not a teenager";
}

function ageChecker(age) {
  if (age < 13) {
    return "You are a kid";
  } else if (age > 19){
    return "You are a grownup";
  } else {
    return  "You are a teenager!";
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (age) {
    case 13:
      return "You are a teenager";
    case 14:
      return "You are a teenager";
    case 15:
      return "You are a teenager";
    case 16:
      return "You are a teenager";
    case 17:
      return "You are a teenager";
    case 18:
      return "You are a teenager";
    case 19:
      return "You are a teenager";
      
      
    default:
      return "You have an age";
  }
}



  // describe('ternaryTeenager', () => {
  //   it('should return "You are a teenager" if age is between 13-19', () => {
  //     expect(ternaryTeenager(15)).toEqual("You are a teenager")
  //   })

  //   it('should return "You are not a teenager" if age not between 13-19', () => {
  //     expect(ternaryTeenager(75)).toEqual("You are not a teenager")
  //   })
  // })

  // describe('switchAge', () => {
  //   it('should return "You are a teenager" if age is between 13-19', () => {
  //     expect(switchAge(15)).toEqual("You are a teenager")
  //   })

  //   it('should return "You have an age" if age not between 13-19', () => {
  //     expect(switchAge(75)).toEqual("You have an age")
  //     expect(switchAge(7)).toEqual("You have an age")
  //   })
  // })