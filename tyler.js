//make a variable called tyler and set it equal to an object with the following data of name Tyler, waterBottle true and whereLunchToday to "Moes"

// on the next line add a key to the tyler object called "is a bro" and set it to true

// on the next line add a key to the tyler object called favBand and set it to "Marilyn Manson"

// on the next line update the waterBottle key in the tyler object with false

// then after making the tyler object, loop over the object and alert the key and the value seperated by a space 


var tyler ={
	name: "Tyler",
	waterBottle: true,
	wherLuchtoday: "Moes"
}

tyler["is a bro"] = true;
tyler.favBand = "Marilyn Manson"; 
tyler.waterBottle = false;

for (key in Tyler){
	console.log(key +" "c+ tyler[i]);
}