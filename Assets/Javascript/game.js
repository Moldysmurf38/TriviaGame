
// List of variables

var correct = 0;
var wrong = 0;

$(function () {

   // Close the modal When the user clicks on the button 
   $("#startBtn").on("click", function () {
      var timeleft = 180;
      var countdownTimer = setInterval(function () {
         $("#time-left").html(timeleft + " seconds");
         timeleft -= 1;
         if (timeleft <= 0) {
            clearInterval(countdownTimer);
            $("#time-left").html("Finished");
         }
      }, 1000);

      // timer for length of quiz
      setTimeout(function () {

         var terminator = $("[name=terminator]")
         if (terminator[1].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var bladerunner = $("[name=bladerunner]")
         if (bladerunner[2].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++
            $("#wrong-total").html(wrong);
         }

         var starwars = $("[name=starwars]")
         if (starwars[3].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var alien = $("[name=alien]")
         if (alien[2].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var valerian = $("[name=valerian]")
         if (valerian[1].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var thething = $("[name=thething]")
         if (thething[0].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var robocop = $("[name=robocop]")
         if (robocop[3].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var monkeys = $("[name=monkeys]")
         if (monkeys[2].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var fifthelement = $("[name=fifthelement]")
         if (fifthelement[0].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var madmax = $("[name=madmax]")
         if (madmax[0].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var totalrecall = $("[name=totalrecall]")
         if (totalrecall[1].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var prometheus = $("[name=prometheus]")
         if (prometheus[2].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var predator = $("[name=predator]")
         if (predator[3].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }

         var starship = $("[name=starship]")
         if (starship[1].checked) {
            correct++;
            $("#correct-total").html(correct);
         }
         else {
            wrong++;
            $("#wrong-total").html(wrong);
         }
         finalPage()

      }, 180000)
   })
});


function displayResults() {
   $("#modal-content").show();
   $("#correct-total").html("Total Correct: " + correct)
   $("#wrong-total").html("Total Incorrect: " + wrong)
}

function finalPage() {
   document.getElementById("modal-content").style.visibility='visible'
   displayResults()
}