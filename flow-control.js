function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  return (basicTeenager(age) != undefined) ? basicTeenager(age) : "You are not a teenager"
}

function ageChecker(age) {
  if (age < 13) return "You are a kid"
  if (age > 19) return "You are a grownup"
  return basicTeenager(age)
}

function ternaryTeenager(age) {
 return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  var check = false;
  switch (age) {
    case 13:
      check = true;
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      check = true;
      break;

  }

  if (check) return "You are a teenager"
  return "You have an age"
}
