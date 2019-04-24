function basicTeenager(age) {
  if(age >= 13 && age <= 19)
  {
    return "You are a teenager!"
  }
  else {
    return undefined;
  }
}

function teenager(age) {
  if(age >= 13 && age <= 19)
  {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if(age < 13)
  {
    return "You are a kid"
  }
  else if(age >= 13 && age <= 19)
  {
    return "You are a teenager!"
  }
  else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  var returnStatement = (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager"
  return returnStatement
}

function switchAge(age) {
  var conditional = age >= 13 && age <= 19
  switch (conditional) {
    case (true):
      return "You are a teenager"
      break;
    default:
      return "You have an age"
  }
}

console.log(switchAge(13))
