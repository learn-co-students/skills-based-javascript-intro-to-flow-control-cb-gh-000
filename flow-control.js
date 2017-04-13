function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  var teen = basicTeenager(age);
  if (teen) {
    return teen;
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  var out = basicTeenager(age);
  return out ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  var out = "You are a teenager";
  switch (age) {
    case 13:
    return out;
    case 14:
    return out;
    case 15:
    return out;
    case 16:
    return out;
    case 17:
    return out;
    case 18:
    return out;
    case 19:
    return out;
    default:
    return "You have an age";
  }
}
