const txtElement = ['Novelis', 'Custom Hijab Design'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function (){
	
	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement [count];
	
	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector(').textContent = words;
	
	setTimeout
	
})();