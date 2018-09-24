function basicTeenager(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
 if (age < 20 && age > 12){
    return "You are a teenager!";
  } else if (age >= 20){
    return "You are a grownup";
  } else if (age <= 12){
    return "You are a kid";
  }
}

function ternaryTeenager(age) {
    return (age < 20 && age > 12) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  // if (age < 20 && age > 12) {
  //   return "You are a teenager";
  // } else {
  //   return "You have an age";
  // }
  switch (true) {
    case (age < 20 && age > 12):
      return "You are a teenager";
    default:
      return "You have an age";
  }
}
