function init(){
	var button = document.getElementById('entrybutton');

	function showMeText(){
		var textbox = document.getElementById('entryinput');
		document.getElementById('textoutput').innerHTML = textbox.value;
    alert('Tatiana Menshakova: ' + textbox.value);
		textOutput.textContent = message;
  }
	
	button.addEventListener('click', showMeText);
	}
window.addEventListener('load', init);
