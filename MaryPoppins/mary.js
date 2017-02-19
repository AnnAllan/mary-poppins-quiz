function buttonClick(id, step){
	switch(step){
		case "step0":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "While Andrew is very capable, his lack of opposable thumbs will be a hinderance.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "During the interview you notice that Mr. Banks is acting strangely.  Would you like to...";
					document.getElementById("optionA").innerHTML = "take the job for a 1 week probationary period?";
					document.getElementById("optionB").innerHTML = "refuse the position as the reference on the wages is very obscure?";
					document.getElementById("optionC").innerHTML = "accept the full time postion straight away?";
					document.getElementById("buttonA").value = "step1";
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "Another worthy cause, but the wrong movie. Your adventure is over.";
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
					document.getElementById("info").innerHTML = "You give it one week, you'll know by then. After meeting the children and tidying up the nursery, you take the children for an outing in the park. You run into an old friend there who suggests a more unusal adventure.  Would you like to...";
					document.getElementById("optionA").innerHTML = "insist you have no intention of making a spectacle of yourself?";
					document.getElementById("optionB").innerHTML = "pretend you haven't the faintest idea what he's talking about?";
					document.getElementById("optionC").innerHTML = "find his attempt at magic so overly complicated that you must show him how it is done?";
					document.getElementById("buttonA").value = "step2";
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "The children needed you.  You probably could have negotitated a clear salary and every second Tuesday off.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "On second thought a trial period would have been wise.  Your adventure is over.";
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
					document.getElementById("info").innerHTML = "Bert found a time when no one was looking but you remained as stubborn as Michael.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "Bert trys to do a bit of magic himself.  They think, the wink, they do a double blink, and everyone is left standing on the sidewalk looking silly.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "You pop into a beautiful English countryside.  After tea and cakes with penguins you win the horse race.  The reporters ask for a word to describe how you feel.  You say...";
					document.getElementById("optionA").innerHTML = "docious-ali-expi-istic-fragil-cali-rupus?";
					document.getElementById("optionB").innerHTML = "supercalifragilisticexpialidocious?";
					document.getElementById("optionC").innerHTML = "bobsyouruncle?";
					document.getElementById("buttonA").value = "step3";
					break;
			}
			break;	
		case "step3":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "That's going a bit too far, don't you think?  Indubidably.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "It's something to say when you don't know what to say. After the children share their adventures with their father, he has a long talk with you about the direction he would like their education to take.  Would you like to...";
					document.getElementById("optionA").innerHTML = "propose he take them to the bank with him to learn to follow in his footsteps?";
					document.getElementById("optionB").innerHTML = "offer to skip this Tuesday off to drill them on their math studies?";
					document.getElementById("optionC").innerHTML = "suggest that they spend the day with their mother at a suffragette rally?";
					document.getElementById("buttonA").value = "step4";
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "While it is true that unusual things can happen, that doesn't quite sum up the feeling.  Your adventure is over.";
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
					document.getElementById("info").innerHTML = "Just the remedy he thinks they need for all that slip-shod, sugary, female thinking they get all day.  You make sure the children get a proper night's sleep for the next day.  When you return at the end of your day off you find the children helping Bert clean out the chimney.  As you being to warn them about the dangers of the fireplace, Micahel is swept up the chimney and Jane follows soon after.  Would you like to...";
					document.getElementById("optionA").innerHTML = "send Bert to bring them back down?";
					document.getElementById("optionB").innerHTML = "go after them; you can't have them hopping about up there like kangaroos?";
					document.getElementById("optionC").innerHTML = "leave it to Ellen to find them as it is still your day off?";
					document.getElementById("buttonA").value = "step5";
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "That is very kind of you but the point is to get Mr. Banks to spend time with them.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "While their daughters' daughters adore them and sing in grateful chorus for their efforts, the suffragette movement was not without its violence and no place to bring children.  Your adventure is over.";
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
					document.getElementById("info").innerHTML = "Bert heads up to find them but is distracted when he runs into all his pals and they begin to Step In Time.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "YOU WIN! You are swept up the chimney and you feel as though you've passed through a doorway to world of enchantment only seen by the birds, the stars, and the chimney sweeps. Mr. Banks will soon realize the error of his ways and make amends and you will float away on the next change in wind.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "Poor Ellen.  She bears the brunt of everything around there.  Your adventure is over.";
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