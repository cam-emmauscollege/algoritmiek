module.exports = {isSoortVanAnagram}

/*Algoritmiek opgave 16
	Maak de functie isSoortVanAnagram() zo,
 	dat hij het hetzelfde doet als bij de vorige opgave,
	maar nu ook true teruggeeft als je met
 	een deel van de letters van het ene woord
	het andere woord kan maken. Bijvoorbeeld:
 	isSoortVanAnagram("bergtop", "boer") geeft
 	true terug, en isSoortVanAnagram("boer", "bergtop")
 	geeft ook true terug. Deze functie moet ook
	hoofdletterONgevoelig zijn.
*/

var x2, y2;

function isSoortVanAnagram(x,y){
	x = x.toLowerCase()
	y = y.toLowerCase()
	x2 = x
	y2 = y
	if(x.length > y.length){
		runThrough(x)
	} else {
		runThrough(y)
	}
	return x2.length == 0 || y2.length == 0
	
	function runThrough(k){
		for(var i = 0; i < k.length; i++){
			if(!(x2.length == 0 || y2.length == 0)){
				if(y2.includes(k[i]) && x2.includes(k[i])){
					x2 = x2.slice(0, x2.indexOf(k[i])) + x2.slice(x2.indexOf(k[i]) + 1)
					y2 = y2.slice(0, y2.indexOf(k[i])) + y2.slice(y2.indexOf(k[i]) + 1)
				}
				
			}
		}
	}
}



console.log(isSoortVanAnagram('marcheren', 'charmeren'))