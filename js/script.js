function init(){
    //add your javascript between these two lines of code
    var button = document.getElementById('entrybutton');
    var input = document.getElementById('entryinput');
    var output = document.getElementById('textoutput');
    function text(){
      alert( "William Malak: " + input.value);
      output.textContent = input.value;
    }
    button.addEventListener('click', text);
}
    window.addEventListener('load', init);