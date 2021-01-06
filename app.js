var userInput=document.querySelector("#userText");
var translateButton = document.querySelector("#btnTranslate");
var userOutput=document.querySelector("#userOutText");
var url="https://api.funtranslations.com/translate/minion.json";
function errorHandler(error){
    alert(error);
}
translateButton.addEventListener("click",function btnClickFunc(){
    fetch(url+"?text="+userInput.value)
    .then(response => response.json())
    .then(json => userOutput.innerText=json.contents.translated)
    .catch(errorHandler)
});

