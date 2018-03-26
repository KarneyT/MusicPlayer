//<script type= "application/javascript">
//window.onload = function(){
	//document.getElementById("btnMove").addEventListener("click", change, false);
//}

//function change() {
//	window.location = "secondPage.html";
//	}
	
//</script>
	
var storyOne = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet erat risus. Etiam aliquet sed libero ac condimentum. Sed in pretium arcu.</p>";
 var storyTwo ="HEY";
   
 window.onload = function(){
 	document.getElementById("btnOne").addEventListener("click", postStoryOne, false);
 		document.getElementById("btnTwo").addEventListener("click", postStoryTwo, false);
 		}
 		
 function postStoryOne(){
 	document.getElementById("content").innerHTML = storyOne;
 	document.getElementById("title").innerHTML = "<h2>Story One!</h2>";
 	}
 	
 function postStoryTwo(){
 	document.getElementById("content").innerHTML = storyTwo;
 	document.getElementById("title").innerHTML = "<h2>Story Two!</h2>";
 	}
 	
 function postStoryOne(){
 	document.getElementById("content").innerHTML = storyOne;
 	document.getElementById("title").innerHTL = "<h2>Story One!</h2>";
 	document.getElementById("btnOne").style.display = "none";
 	document.getElementById("btnTwo").style.display = "block";
 	}