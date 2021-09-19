// var userName = prompt("Enter username here");
// alert ("Welcome " + userName );

 var btnClick = document.querySelector ("#btn-click");
 var textArea = document.querySelector ("#mytext");
    var outputDiv = document.querySelector("#output");
//  btnClick.addEventListener("click", function clickEventHandler()
//  {
//         console.log("clicked");

//  })


// console.log(textArea);

function clickHandler ()
{
    //  console.log("clicked");
    // console.log(textArea.value);
           outputDiv.innerText = "dfdfdfddfasdfadfad " + textArea.value;   
};

btnClick.addEventListener("click",clickHandler)

