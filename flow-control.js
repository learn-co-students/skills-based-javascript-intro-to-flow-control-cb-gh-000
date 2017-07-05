function basicTeenager(age) {
	if(age<=19 && age>=13)
		 return "You are a teenager!";	
}

function teenager(age) {
	var basic = basicTeenager(age);
	if(basic != undefined)
		return basic;
	else
		return "You are not a teenager";
}

function ageChecker(age) {
	var basic = basicTeenager(age);
        if(basic != undefined)
                return basic;
        else if(age<=12)
		return "You are a kid";
	else
	return "You are a grownup";
}

function ternaryTeenager(age) {
	var ret = teenager(age);
	if(ret.endsWith("!"))
	ret = ret.substring(0,ret.length-1);
	return ret;
}

function switchAge(age) {
	var basic = basicTeenager(age);
        if(basic != undefined)
                return basic.substring(0,basic.length-1);
        else
                return "You have an age";
}
