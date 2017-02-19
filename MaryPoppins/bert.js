function buttonClick(id, step){
	switch(step){
		case "step0":
			switch(id){
				case "buttonA":
					document.getElementById("info").innerHTML = "While the park is lovely, you need to stay close to the Banks to help them.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "The Admiral was right; bit of heavy weather brewing at number 17 and no mistake but your work here is done for now.  You head back to the park to create some chalk pavement pictures.  When Mary happens by with the children would you like to..";
					document.getElementById("optionA").innerHTML = "suggest a Jolly Holiday?";
					document.getElementById("optionB").innerHTML = "do a bit of magic yourself?";
					document.getElementById("optionC").innerHTML = "teach the children how to draw?";
					document.getElementById("buttonA").value = "step1";
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "It is unlike you to be deterred by a change in the weather.  You gave up too easily and your adventure is over.";
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
					document.getElementById("info").innerHTML = "You pop into a typical English countryside. Over your raspberry ice, cakes, and tea you discuss your favorite people with the penguins.  Who is your favorite person...";
					document.getElementById("optionA").innerHTML = "Pheobe?";
					document.getElementById("optionB").innerHTML = "Agnes?";
					document.getElementById("optionC").innerHTML = "Mary Poppins?";
					document.getElementById("buttonA").value = "step2";
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "What utter nonsense.  Why must you always complicate things that are really quite simple?  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "While I'm sure the children would find that extremely diverting it won't give them much to talk about over breakfast with their father.  Your adventure is over.";
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
					document.getElementById("info").innerHTML = "Pheobe is delightful but Mary is now perturbed and you are trapped in the chalk pavement picture.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "Agnes is convivial company time and again but Mary is now perturbed and you are trapped in a chalk pavement picture.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "and there you stop.  Good call. Upon winning the horse race, the reporters surround Mary asking for a word to describe the feeling.  You suggest...";
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
					document.getElementById("info").innerHTML = "It is something to say when you don't know what to say. A few days later you run into a frightend Jane and Michael on the street.  Or rather they run into you.  Would you like to...";
					document.getElementById("optionA").innerHTML = "walk them home?";
					document.getElementById("optionB").innerHTML = "take them back to the bank?";
					document.getElementById("optionC").innerHTML = "take them with you to Mrs. Corey's gingerbread shop while you clean her chimney?";
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
					document.getElementById("info").innerHTML = "Safely back at home, the children are swept up the chimney while helping you clean it.  Would you like to...";
					document.getElementById("optionA").innerHTML = "run away, after all you never known what may happen around a fireplace?";
					document.getElementById("optionB").innerHTML = "go after them?";
					document.getElementById("optionC").innerHTML = "let Ellen know that the children are lost and head to Mrs. Corey's?";
					document.getElementById("buttonA").value = "step5";
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "Going back to the bank will scar the children for life and further infuriate Mr. Banks.  Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonC":
					document.getElementById("info").innerHTML = "You should have gone to the Banks' residence first as their chimney is making the most dreadful noises and smokes incesently.  Your adventure is over.";
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
					document.getElementById("info").innerHTML = "You can't have them hopping about up there like kangaroos. Your adventure is over.";
					document.getElementById("optionA").innerHTML = "Play Again";
					document.getElementById("optionB").hidden = true;
					document.getElementById("optionC").hidden = true;
					document.getElementById("buttonA").onclick = function() {window.location.href = 'index.html'};
					document.getElementById("buttonB").hidden = true;
					document.getElementById("buttonC").hidden = true;
					break;
				case "buttonB":
					document.getElementById("info").innerHTML = "YOU WIN! You are swept up the chimney and you feel as though you've passed through a doorway to world of enchantment only seen by the birds, the stars, and the chimney sweeps. After Stepping in Time with your pals, Mr. Banks returns home and you have a chat about the fleeting nature of childhood.  The next day you see him at the park with the children while selling your kites.";
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
