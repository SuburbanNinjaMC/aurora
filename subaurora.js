javascript:
alert("Welcome to Sub Aurora v1.");
alert("My name is SuburbanNinjaMC.");
alert("Press 'J (uppercase)' to begin.");
console.log("Sub Aurora v1 Installed on your page. Thank you for choosing us.");
document.onkeypress = function(e) {
  if (e.keyCode == 74) {
     var a = prompt("Now what may I do for you?");
     switch (a) {
       case "nothing":
         javascript: alert("Ok. Thank you for your assistance.");
         break;
       case "dictionary":
         javascript: window.open("http://dictionary.com");
         break;
       case "friendly chat":
         javascript: alert("Oh I'm fine thank you. This one lady decided to go ham when I was driving to the store.");
         alert("People can be such imbeciles, you know?");
         alert("I know you do.");
         break;
       case "help":
         javascript: alert("Help is on the way!");
         alert("Commands to use \nnothing \ndictionary \nfriendly chat \ntake me to your leader \nslogin \nPress L \ncrash");
         break;
       case "take me to your leader":
         javascript: window.open("http://marsubia.x10.mx/");
         break;
       case "secret":
         javascript: alert("No.");
         break;
       case "crash":
         javascript: txt = "a";
         while (1) {
           txt = txt += "a";
         }
         break;
     }
  } 
  
  if (e.keyCode == 79) {
    alert("You now have the power to edit this website.");
    alert("Use it wisely.");
    javascript: document.body.contentEditable = 'true'; document.designMode='on'; void 0.
  }
  
  if (e.keyCode == 81) {
    var c = prompt("Replace all words with this:");
    links = document.getElementsByTagName('a');
    for (l in links) {
      links[l].innerText = c;
    }
    linkstwo = document.getElementsByTagName('p');
    for (m in linkstwo) {
      linkstwo[m].innerText = c;
    }
  }
}


  


