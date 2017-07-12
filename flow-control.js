function basicTeenager(age) {
 if (age >= 13 && age <= 19){
   return 'You are a teenager!'
 }
}

function teenager(age) {
  if (age > 19 || age < 13){
    return 'You are not a teenager'
  } else {
    return 'You are a teenager!'
  }
}

function ageChecker(age) {
  if (age > 19){
    return 'You are a grownup'
  } else if (age < 13){
    return 'You are a kid'
  }
  return 'You are a teenager!'
}

function ternaryTeenager(age) {
 return (age > 19 || age < 13) ? "You are not a teenager" : "You are a teenager"
}

function switchAge(age) {
  switch (true){
    case (age < 20 && age > 12):
      return "You are a teenager";
      break;
    default:
      return "You have an age";
      break;
  }
}
