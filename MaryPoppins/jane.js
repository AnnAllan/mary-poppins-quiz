function buttonClick(id, step){
	switch(step){
		case "step0":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "Katie Nanna wouldn't chase after a kite if you heap her with all the jewels in Christendom.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "The wind was too strong but you had to try.  You pushed Katie Nanna to her limit and you do so want to get on with the new Nanny.    Would you like the new nanny to...";
					document.getElementById("optionA").innerHTML = "be kind, witty, very sweet, and fairly pretty?";
					document.getElementById("optionB").innerHTML = "have warts?";
					document.getElementById("optionC").innerHTML = "smell of barley water?";
					document.getElementById("buttonA").value = "step1";
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "Ah, you should have put your back into it.  That's what's wanted here.  You gave up too easily and your adventure is over.";
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
					document.getElementById("info").innerHTML = "The new nanny is kind but extremely firm.  She wants to play a game called 'Well Begun Is Half Done.'  Would you like to...";
					document.getElementById("optionA").innerHTML = "hide in the closet?";
					document.getElementById("optionB").innerHTML = "sit and giggle as you are rather inclinded to do?";
					document.getElementById("optionC").innerHTML = "find the fun in the job that must be done?";
					document.getElementById("buttonA").value = "step2";
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "Your brother specifically requested 'No warts'.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "Your brother specifically put in the part about not smelling of barley water.  Your adventure is over.";
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
					document.getElementById("info").innerHTML = "The closet doors have been known to trap little children unawares.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "Perhaps if you'd have put things away you could have skipped this game.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "SNAP, that job was a game.  After a fun-filled day of popping into chalk pavement pictures, riding carosel horses through the countryside, and attending a horse race it is time to go to bed.  Would you like to...";
					document.getElementById("optionA").innerHTML = "stay awake?";
					document.getElementById("optionB").innerHTML = "lie down upon your bed and rest your head?";
					document.getElementById("optionC").innerHTML = "refuse your lime cordial medicine?";
					document.getElementById("buttonA").value = "step3";
					break;
			}
			break;	
		case "step3":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "You may be much to excited to sleep but your nanny will soon summon the policemen.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "After getting a proper night's sleep you and your brother are off to the bank today.  Would you like to...";
					document.getElementById("optionA").innerHTML = "feed the birds with the old bird woman?";
					document.getElementById("optionB").innerHTML = "invest your tuppence in a bank account?";
					document.getElementById("optionC").innerHTML = "tip the one-man-bands and screevers that seem to pop up with unusal frequency in London these days?";
					document.getElementById("buttonA").value = "step4";
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "Children who get their feet wet must learn to take their medicine.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
			}
			break;	
		case "step4":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "Father may feel that you've got nothing to show but fat birds but he will come around. Back at the house you pass the time helping Bert with the chimney sweeping when Michael is swept up.  Would you like to...";
					document.getElementById("optionA").innerHTML = "Run away, after all you never known what may happen around a fireplace?";
					document.getElementById("optionB").innerHTML = "Call up to him and try to reach him with a broom?";
					document.getElementById("optionC").innerHTML = "See if you can ascend the stair railing all the way to the roof?";
					document.getElementById("buttonA").value = "step5";
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "While it is true that it will bloom into credit of a generous amount semiannually, there are more important things in life.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "Your support of local artists is admirable but it won't bring you closer to your father.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
			}
			break;
		case "step5":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "While Bert and Mary are trying to rescue Michael you are alone in the house and taken by the Hottentots.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "YOU WIN! You are swept up the chimney as well and you feel as though you've passed through a doorway to world of enchantment only seen by the birds, the stars, and the chimney sweeps. When father returns home the next day he has mended your kite and wants to take you to the park.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "You find that there are no stairs to the roof and therefore no railings. Your adventure is over.";
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