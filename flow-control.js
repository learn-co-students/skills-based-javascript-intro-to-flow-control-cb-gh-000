function basicTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager!" : undefined;
}

function teenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager!" : "You are not a teenager";
}

function ageChecker(age) {
  return age <= 12 ? "You are a kid" :
          age >= 29 ? "You are a grownup" :
            age >= 13 && age <= 19 ? "You are a teenager!" : "You are not a teenager";
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  return age < 13 || age > 19 ? "You have an age" :
            age >= 13 && age <= 19 ? "You are a teenager" : "You have an age";
}
