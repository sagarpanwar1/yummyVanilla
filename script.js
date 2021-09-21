// var userName = prompt("Enter username here");
// alert ("Welcome " + userName );

 var btnClick = document.querySelector ("#btn-click");
 var textArea = document.querySelector ("#mytext");
    var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/leetspeak.json"

//  btnClick.addEventListener("click", function clickEventHandler()
//  {
//         console.log("clicked");

//  })


// console.log(textArea);



function getTranslationURL (input){
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler ()
{
    //  console.log("clicked");
    // console.log(textArea.value);
        //    outputDiv.innerText = "dfdfdfddfasdfadfad " + textArea.value;   
        var InputText = mytext.value;
           
        fetch(getTranslationURL(InputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)

};

btnClick.addEventListener("click",clickHandler)

