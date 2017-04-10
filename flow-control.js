function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
  return undefined;
}

function teenager(age) {
  if (basicTeenager(age)) {
    return basicTeenager(age);
  }
  return "You are not a teenager"
}

function ageChecker(age) {
  switch(true) {
    case age <= 12:
      return "You are a kid";
    case age >= 13 && age <= 19:
      return "You are a teenager!";
    default:
      return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager";
  }
  return "You are not a teenager";
}

function switchAge(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager";
  }
  return "You have an age";
}
