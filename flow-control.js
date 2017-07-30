function basicTeenager(age) {
  if (age === 13 || age === 14 || age === 15 || age === 16 || age === 17 || age === 18) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age === 13 || age === 14 || age === 15 || age === 16 || age === 17 || age === 18) {
    return "You are a teenager!";
  } else  {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age === 13 || age === 14 || age === 15 || age === 16 || age === 17 || age === 18) {
    return 'You are a teenager!';
  } else if(age <= 12) {
    return 'You are a kid'
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  if (age === 13 || age === 14 || age === 15 || age === 16 || age === 17 || age === 18) {
    return 'You are a teenager';
  } else  {
    return "You are not a teenager"
  }
}

function switchAge(age) {
  if (age === 13 || age === 14 || age === 15 || age === 16 || age === 17 || age === 18) {
    return 'You are a teenager';
  } else {
    return "You have an age"
  }
}
