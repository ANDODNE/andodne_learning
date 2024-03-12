document.write("hello world")
function sayHallo(){
  var response = prompt("What is your name?");
  alert("hello "+response+",have a nice day!");
};
sayHallo();

function showTopic(){
  var x = document.getElementById("demo");
  x.style.fontSize = '25px';
  x.style.color = 'red';
};
