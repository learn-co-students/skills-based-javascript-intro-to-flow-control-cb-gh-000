

function basicTeenager(age) {

if (age >12 && age < 20 ) {
return "You are a teenager!";
}
else {
  return ;
}

}

function teenager(age) {

if (basicTeenager(age)){
return basicTeenager(age)
}
else {
   return "You are not a teenager";
}
}

function ageChecker(age) {
if (basicTeenager(age))
return basicTeenager(age);
if ( age <= 12){
return "You are a kid";
}
if (age >= 20){
return "You are a grownup";
}
}

function ternaryTeenager(age) {

  if (teenager(age)){
    return teenager(age);
  }
  else {
    return "You are not a teenager";
  }

}

function switchAge(age) {

  if (!(age >=13 && age <=19)){
    return "You have an age";
  }
  else {
    return basicTeenager(age);
  }


}
