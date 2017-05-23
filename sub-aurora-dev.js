javascript:
(function() {
alert("Welcome to Sub Aurora 0.25 'Corvus'");
alert("Press 'J (uppercase)' to begin.");
console.log("Sub Aurora 0.25 'Corvus' Installed on your page. Thank you for choosing us.");
var edu, fun, edit, replace = true;
var redu = false, rfun = false;
function subAuroraRegular() {
     var b = prompt("Now what may I do for you?");
     var a = b.toLowerCase();
     switch (true) {
       case (a.indexOf("nothing") != -1):
         javascript: alert("Ok. Thank you for your assistance.");
         break;
	   case (a.indexOf("cookies") != -1):
		     var c=document.cookie.split(";");
    			for(var i=0;i<c.length;i++){
        			var e=c[i].indexOf("=");
        			var n=e>-1?c[i].substr(0,e):c[i];
        			document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    			}
		     break;
       case (a.indexOf("modified") != -1):
	 		javascript:alert('Last edited\n'+document.lastModified);
         	break;
       case (a.indexOf("edu") != -1):
		     var d = confirm("Do you want to replace Sub Aurora with EDU Aurora?");
		     if (d == false) {
				 alert("Shift + P");
				 edu = true;
				 console.log("Sub Aurora: EDU Activated");
				 break;
		     } else if (d == true) {
			     	 alert("It is replaced.");
			         redu = true;
			    	 console.log("Sub Aurora: EDU Activated");
			      	 break;
		     }
	     case (a.indexOf("edit") != -1):
		     alert("Shift + O");
		     edit = true;
		     console.log("Sub Aurora: editing Activated.");
		     break;
       case (a.indexOf("prank") != -1):
		     var a = prompt("Type in the number. Any number.");
		     for (i = 0; i < a; i++) {
			     alert("HOLARME KRAMPUS KRAMPUS PRANKD AND BIPPED 2MLG6ME");
			     alert("ILLUMINATI!");
			     alert("Am I spamming?");
			     alert("I am cliche master.");
			     alert("2142 2142 1738 1337 SMOK WEED.");
		     }
		     break;
       case (a.indexOf("dictionary") != -1):
         javascript: window.open("http://dictionary.com");
         break;
	   case (a.indexOf("lowercase") != -1 || a.indexOf("lower") != -1):
			 javascript:
			 alert("Changing all letters to lowercase....");
			 document.body.innerHTML = document.body.innerHTML.toLowerCase();
			 break;
	   case (a.indexOf("uppercase") != -1 || a.indexOf("up") != -1):
			 javascript:
			 alert("Changing all letters to uppercase...");
			 document.body.innerHTML = document.body.innerHTML.toUpperCase();
			 break;
	   case (a.indexOf("replace") != -1):
		   javascript: var a = prompt("What word do you want to replace?");
		   var aa = new RegExp(a, "g");
		   var b = prompt("What would do you want to replace it with?");
		   document.body.innerHTML = document.body.innerHTML.replace(aa, b);
		   if (replace = false) {
		  	 replace = true;
		  	 console.log("Sub Aurora: Replace All Feature Activated.");
		   	 alert("You can now replace all words on a website using Shift + Q.");
		   } 
		   break;
	     case (a.indexOf("replace all") != -1):
		     alert("Shift + Q");
		     replace = true;
		     console.log("Sub Aurora: Replace All Feature Activated.");
		     break;
	   case (a.indexOf("date") != -1 || a.indexOf("time") != -1):
			 var currentdate = new Date(); 
		 	 var datetime = "Date is: " + currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      		 alert(datetime);
			 break;
		 case (a.indexOf("chat") != -1 || a.indexOf("conversation") != -1 || a.indexOf("talk") != -1):
         javascript: var test = Math.floor(Math.random() * 5) + 1;
	 	 switch (test) {
			 case 1: 
	 			 javascript: alert("Oh I'm fine thank you. This one lady decided to turn up the music so high it broke my window when I was driving to the store.");
         		 	 alert("People can be such imbeciles, you know?");
         		 	 alert("I know you do.");
				 break;
			 case 2:
				 javascript: alert("Fine. However, I had one too many gummy bears.");
				 alert("Now I'm sugar high.");
				 alert("*sigh*");
				 break;
			 case 3:
				 javascript: alert("Not good at all.");
				 alert("I had a drivers test. And I failed.");
				 alert("Aren't I supposed to be your driver?");
				 alert("RIP in pieces you.");
				 break;
			 case 4:
				 javascript: alert("Very good!");
				 alert("I smok- I mean ate a lot of wee- I mean popcorn.");
				 alert("That movie was good wasn't it?");
				 alert("No? Well, screw you.");
				 break;
			 case 5:
				 javascript: alert("I don't know. And you?");
				 break;
		     }
         break;
       case (a.indexOf("help") != -1):
         javascript: alert("Help is on the way!");
         alert("Commands to use (you can use these in sentences) \nnothing \nsearch \nedit \nedu \nreplace all \nlowercase \nuppercase \nprank \nreplace \nmodified \nfun machine \ndictionary \nchat (conversation, talk) \nleader \ncrash");
         break;
       case (a.indexOf("search") != -1):
			  javascript: var a = prompt("What do you want to search for?");
			  location.href = "https://google.com/search?q=" + a + "/";
			  break;
       case (a.indexOf("leader") != -1):
         javascript: 
         alert("Dialing him now.");
         window.open("http://marsubia.x10.mx/");
         break;
       case (a.indexOf("secret") != -1):
         javascript: alert("No.");
         break;
       case (a.indexOf("fun") != -1):
		 var d = confirm("Do you want to replace Sub Aurora with Fun Machine?");
		 if (d == false) {
				 javascript: alert("Press Shift+I");
				 fun = true;
		 		console.log("Sub Aurora: FUN MACHINE Activated");
			 	alert("Aurora: Oh come on! You had to activate him.");
				alert("Fun: Really, great Unc? C'mon!");
				alert("Aurora: You are not ready. Just let me take care of him.");
				alert("Fun: But great Unc...");
				alert("Aurora: Enough said! Just please.");
				alert("Fun: NO! I got here fair and square!");
				alert("Aurora: Fine. I give up. Sorry, master.");
				 break;
		     } else if (d == true) {
			     	 alert("It is replaced.");
			         redu = true;
			    	 console.log("Sub Aurora: EDU Activated");
			         alert("Aurora: Oh come on! You had to activate him.");
				 alert("Fun: Really, great Unc? C'mon!");
				 alert("Aurora: You are not ready. Just let me take care of him.");
				 alert("Fun: But great Unc...");
				 alert("Aurora: Enough said! Just please.");
				 alert("Fun: NO! I got here fair and square!");
				 alert("Aurora: Fine. I give up. Sorry, master.");
			     	 alert("Aurora: If you want me back, simply type in 'revert' in his prompt.");
			      	 break;
		     }
		
       case (a.indexOf("crash") != -1):
         javascript: 
         var d = confirm("Are you sure?");
         if (d == true) {
             javascript: txt = "PRANKD";
             while (1) {
               txt = txt += "PRANKD";
             }
	 }
         else if (d == false) {
             javascript: alert("Ok. But be careful.");
         }
         break;
         case (a.indexOf("You suck") != -1): 
          javascript:alert('Oh. Sassy now, are you? You will be punished.'); 
          var a = "You suck balls";
	        for (i == 0; i < 20; i++) {
		        javascript: var b = window.open("", "b", "width:100px");
		        b.document.write("<body contenteditable='true'><title>Y U do dis</title>" + a + "</body>");
	        }   
		     break;
	     default:
			 var random = Math.floor(Math.random() * 3) + 1;
		     switch (random) {
				 case 1:
					 javascript: alert("Um. Ok. I don't know what you are saying...");
					 break;
				 case 2:
					 javascript: alert("What are you saying?");
					 break;
				 case 3:
					 javascript: alert("I do not know what " + a + " is.");
					 break;
						   }
		     break;
		 }
}

function subAuroraEDU() {
	alert("I am Matimas, your EDU Aurora counterpart.");
	  var b = prompt("Now what may I do for you?");
	  var a = b.toLowerCase();
	  switch (true) {
		  case (a.indexOf("calc") != -1):
				  var b = prompt("Addition, Division, Subtraction, Multiplication, or SQRT?");
			  	  switch (true) {
					  case (b.indexOf("add") != -1):
						  		javascript: var c = prompt("Type the first number:");
						  		var d = prompt("Type the second number:");
						  		var e = c + d;
						  	    	alert(e);
						  		alert("PRANKD");
						  		break;
					  case (b.indexOf("sub") != -1):
						  		javascript: var c = prompt("Type the first number:");
						  		var d = prompt("Type the second number:");
						  		alert(c - d);
						  		break;
					  case (b.indexOf("div") != -1):
						  		javascript: var c = prompt("Type the first number:");
								var d = prompt("Type the divisor:");
						  		alert(c/d);
						  		break;
				  }
			  break;
		  case (a.indexOf("cpr") != -1):
			  javascript: alert("As a reminder: Give 30 chest compressions and 2 breaths. Do this in a loop.");
			  break;
		  case (a.indexOf("search") != -1):
			  javascript: var a = prompt("What do you want to search for?");
			  location.href = "https://google.com/search?q=" + a + "/";
			  break;
		  case (a.indexOf("resources") != -1):
			  break;
		  case (a.indexOf("revert") != -1):
			  alert("Reverted back to Sub Aurora.");
			  redu = false;
			  break;
		  case (a.indexOf("help") != -1):
			  alert("Help is on the way!");
			  alert("Commands (Edu) (You can use these in sentences: \nCPR \nSearch \nResources \nCalc \nRevert");
	          default:
			 var random = Math.floor(Math.random() * 3) + 1;
		     switch (random) {
				 case 1:
					 javascript: alert("Um. Ok. I don't know what you are saying...");
					 break;
				 case 2:
					 javascript: alert("What are you saying?");
					 break;
				 case 3:
					 javascript: alert("I do not know what " + a + " is.");
					 break;
						   }
		     break;
	  }
}
function subAuroraFun() {
	
  	var x = prompt("Fun: So you want to have some fun?");
  	switch (x) {
	case "revert":
			alert("Reverted back to Sub Aurora.");
			rfun = false;
    	case "yes":
      		javascript: 
      		alert("Yay! You have a good spirit.");
      		var y = prompt("So what now? Want me to type something?");
      		switch (y) {
	        case "yes":
		      javascript: var y = prompt("OK! Type something!");
     		      var z = window.open("", "z", "width:100px");
     		      z.document.write("<body contenteditable='true'><title>Textbox</title>" + y + "</body>");
		       break;
	      case "no": 
		      javascript: alert("ok.");
		      break;
	      }   
      	break;
    	case "no":
      		javascript:
      		var x = prompt("Then why are you here?"); 
      		switch (x) { 
        		case "Because I am": 
          			javascript:alert('Oh. Sassy now, are you? You will be punished.'); 
          			var a = "You suck balls";
	  			for (i == 0; i < 20; i++) {
	          			javascript: var b = window.open("", "b", "width:100px");
		  			b.document.write("<body contenteditable='true'><title>Y U do dis</title>" + a + "</body>");
	 			 }   
	  			break;
       			case "I don't know": 
          			javascript:alert('Then why are you here?');
          			break; 
        		case "help": 
          			javascript:alert("Commands: \nBecause I am \nI don't know \nrevert"); 
          			break; 
			case "revert":
				alert("Reverted back to Sub Aurora.");
				rfun = false;
		
     			 }
      		break;
  	
		 }
}
document.onkeypress = function(e) {
  if (e.keyCode == 74) {
     if (redu == false && rfun == false) {
	     subAuroraRegular();
     } else if (redu == true && rfun == false) {
	     subAuroraEDU();
     } else if (redu == false && rfun == true) {
	     subAuroraFun();
     }
  } 
  
  if (e.keyCode == 79 && edit == true) {
    alert("You now have the power to edit this website.");
    alert("Use it wisely.");
    javascript: document.body.contentEditable = 'true'; document.designMode='on'; void 0.
  }
  
  if (e.keyCode == 81 && replace == true) {
	  var b = prompt("Replace the entire thing with one phrase. Header, Paragraph, or Whole? (h, p, w)");
	  switch (b) {
		  case "h":
			  var c = prompt("Replace all headers with this:");
			  links = document.getElementsByTagName("h1");
			  for (l in links) {
				  links[l].innerText = c;
			  }
			  links = document.getElementsByTagName("h2");
			  for (l in links) {
				  links[l].innerText = c;
			  }
			  links = document.getElementsByTagName("h3");
			  for (l in links) {
				  links[l].innerText = c;
			  }
			  break;
		  case "p":
			  var c = prompt("Replace all paragraph words with this:");
			  for (l in links) {
      			links[l].innerText = c;
    			}
   				linkstwo = document.getElementsByTagName('p');
    			for (m in linkstwo) {
      				linkstwo[m].innerText = c;
    			}
    			linksthree = document.getElementsByTagName('li');
    			for (n in linksthree) {
      				linksthree[n].innerText = c;
    			}
			  break;
		  case "w":
   	 		var c = prompt("Replace all words with this:");
    		links = document.getElementsByTagName('a');
    		for (l in links) {
      			links[l].innerText = c;
    		}
   			linkstwo = document.getElementsByTagName('p');
    		for (m in linkstwo) {
      			linkstwo[m].innerText = c;
    		}
    		linksthree = document.getElementsByTagName('li');
    		for (n in linksthree) {
      			linksthree[n].innerText = c;
    		}
    		links = document.getElementsByTagName('h1');
    		for (o in links) {
      			links[o].innerText = c;
    		}
		links = document.getElementsByTagName("h2");
		for (l in links) {
			links[l].innerText = c;
		 }
		links = document.getElementsByTagName("h3");
		for (l in links) {
			links[l].innerText = c;
		}
			  break;
	
	}
  }
  
  if (e.keyCode == 84) {
    for (var i = 0; i < 5; i++) {
      window.open("", _blank);
    }
  }
	
  if (e.keyCode == 80 && edu == true) {
	  subAuroraEDU();
  }
  
  if (e.keyCode == 73 && fun == true) {
	subAuroraFun();
  }
  
}
}());


  


