
// List of variables

var correct = 0;
var wrong = 0;

$(function () {

   // Close the modal When the user clicks on the button 
   $("#startBtn").on("click", function () {
      var timeleft = 120;
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
         function onPopupOpen() {
            $("#modal-content").show();
            $("#correct-total").html("Total Correct: " + correct)
            $("#wrong-total").html("Total Incorrect: " + wrong)
         }
         finalpage(function () { 
            $.colorbox({
               inline: true,
               href: "#modal-content",
               className: "final-page",
               oncomplete: onPopupOpen,
             });
         })

      }, 6000)
   })
});

$(".clear-cookie").on("click", function() {
   Cookies.remove('colorboxShown');
   $(this).replaceWith("<p><em>Cookie cleared. Re-run demo</em></p>");
 });
 
 $(".order-cheezburger").on("click", function() {
   $.colorbox.close();
 });
 
 function onPopupOpen() {
   $("#modal-content").show();
   $("#yurEmail").focus();
 }
 
 function onPopupClose() {
   $("#modal-content").hide();
   Cookies.set('colorboxShown', 'yes', {
     expires: 1
   });
   $(".clear-cookie").fadeIn();
   lastFocus.focus();
 }
 
 function displayPopup() {
   $.colorbox({
     inline: true,
     href: "#modal-content",
     className: "cta",
     width: 600,
     height: 350,
     onComplete: onPopupOpen,
     onClosed: onPopupClose
   });
 }
 
 var lastFocus;
 var popupShown = Cookies.get('colorboxShown');
 
 if (popupShown) {
   console.log("Cookie found. No action necessary");
   $(".clear-cookie").show();
 } else {
   console.log("No cookie found. Opening popup in 3 seconds");
   $(".clear-cookie").hide();
   setTimeout(function() {
     lastFocus = document.activeElement;
     displayPopup();
   }, 3000);
 }