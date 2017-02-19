function buttonClick(id, step){
	switch(step){
		case "step0":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "BAD DOG!  That won't help the Banks children at all.  Your adventure is over.  Why don't you go home and put your feet up.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "GOOD DOG! After answering and advertisment in the Times for a new nanny, you arrive at the Banks' residence promptly at 8 o'clock to find that the position has been filled.  Would you like to...";
					document.getElementById("optionA").innerHTML = "bark curtly and be on your way to the fishmonger?";
					document.getElementById("optionB").innerHTML = "bark toward the window of the nursery to rat out the crazy lady with the umbrella?";
					document.getElementById("optionC").innerHTML = "nip at the ankles of Ellen, the housemaid?";
					document.getElementById("buttonA").value = "step1";
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "BAD DOG!  The Banks children need the constable.  Your adventure is over.  Why don't you go home and put your feet up.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
			}
			break;
		case "step1":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "GOOD DOG! While paying a visit to Uncle Albert you find him on the ceiling again.  Would you like to...";
					document.getElementById("optionA").innerHTML = "check under the table for scraps while he can't chase you away?";
					document.getElementById("optionB").innerHTML = "fret at the front door?";
					document.getElementById("optionC").innerHTML = "find a responsible adult that speaks your language to get help?";
					document.getElementById("buttonA").value = "step2";
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "BAD DOG! The Banks children need their new nanny.  Your adventure is over.  Why don't you go home and put your feet up.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "BAD DOG!  Poor Ellen always bears the brunt of everything around there.  Your adventure is over.  Why don't you go home and put your feet up.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
			}
			break;	
		case "step2":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "BAD DOG! Uncle Albert needs your help and the children need to learn to laugh.  Your adventure is over.  Why don't you go home and put your feet up.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "While your concern is appreciated, worrying won't help anyone.  Your adventure is over.  Why don't you go home and put your feet up.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "YOU WIN!  You have done all that you can do and the children are well on their way to flying kites with their father.  Why don't you go home and put your feet up.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
			}
			break;		
	}
}