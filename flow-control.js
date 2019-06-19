function basicTeenager(age) {
  if (age<20 && age>12){
    return "You are a teenager!"
  }

}

function teenager(age) {
    return (age<20 && age>12)? "You are a teenager!": "You are not a teenager"

}

function ageChecker(age) {
    if (age>19){
      return "You are a grownup"
    }
    if (age<13){
      return "You are a kid"
    }else
      return 'You are a teenager!'
}

function ternaryTeenager(age) {
    return (age>12 && age <20)? 'You are a teenager':'You are not a teenager'
}

function switchAge(age) {
    if (age>19 || age <13){
      return "You have an age"
    }else
      return 'You are a teenager'

}
