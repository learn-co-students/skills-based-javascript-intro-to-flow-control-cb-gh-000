function basicTeenager(age) {
  if (age < 13 || age > 19) {
    return undefined;
  }

  return ageChecker(age);
}

function teenager(age) {
  var result = ternaryTeenager(age);

  if (age > 12 && age < 20) {
    return result+'!';
  }

  return result;
}

function ageChecker(age) {
  if (age > 19) {
    return 'You are a grownup'
  } else if (age > 12 && age < 20) {
    return 'You are a teenager!';
  } else {
    return 'You are a kid'
  }
}

function ternaryTeenager(age) {
  return age > 12 && age < 20 ? 'You are a teenager' : 'You are not a teenager';
}

function switchAge(age) {
  return age > 12 && age < 20 ? 'You are a teenager' : 'You have an age';
}
