document.getElementById("playButton").addEventListener("click", ()=>{
  window.location.reload();
})


var wordsList = ["banana","apple","mango","peach","cherry","grape","watermelon","strawberry","blueberry","Guavava","kiwi","pear","papaya"]
var randnum = Math.floor((Math.random() * 3));
var word = wordsList[randnum];
var lenOfWord = word.length;
function wordlength(lenOfWord){
  var s="";
  for (var i=0;i<lenOfWord;i++){
    s = s+ "_"
  }
  return s;

}
var chances=6;
var letter ="";
var user="";
var usedlist=[];
var numberlist = ['1', '2', '3', '4' , '5', '6', '7', '8', '9', '0']
var placeholder = wordlength(lenOfWord);
var placeholderlist = placeholder.split('');
document.getElementById("gameWord").innerHTML = placeholder;
document.addEventListener("keypress",function(event){
  user = event.key;
  letter =user.toLowerCase();
  console.log(letter);
  document.getElementById("used").innerHTML = usedlist;
  if(letter < 'a' || letter >'z' || letter === "enter"){
    return;
  }
  if (usedlist.includes(letter) || !placeholder.includes("_") || chances <= 0){
    return;
  }
  usedlist.push(letter);
  document.getElementById("used").innerHTML = usedlist;
  if(word.indexOf(letter) !== -1){
    for(var i = 0; i < word.length; i++){
      if(word[i] === letter){
        placeholderlist[i] =letter;
      }
    }
    placeholder = placeholderlist.join('');
    document.getElementById("gameWord").innerHTML = placeholder;
    if(!placeholder.includes("_")){
      document.getElementById("gamecom").innerHTML = "YAY YOU WON!";
      document.getElementById("playButton").style.visibility = "visible";
    }
  }
  else{
    chances--;
    document.getElementById("mainImage").style.right= `${(6-chances)*74.7}px`;
    document.getElementById("spanForChance").innerHTML = chances;
    if(chances <= 0){
        document.getElementById("gamecom").innerHTML = "GAME OVER";
        document.getElementById("playButton").style.visibility = "visible";
        return;
    }
  }
});
