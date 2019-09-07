// List of variables
var correct = 0;
var wrong = 0;

$(window).on('load',function(){
   $('#start-modal').modal('show');
   $('<div class="modal-backdrop"></div>').appendTo(document.body)
});

// Function to initiate and run survey
$(function () {
   // Close the modal When the user clicks on the button 
   $("#startBtn").on("click", function () {
      $("#start-modal").css({"display": "none"})
      $(".modal-backdrop").css({"display": "none"})
      document.getElementById('start-modal').style.display='none'
      var timeleft = 180;
      // Displays a countdown of the time left for the quiz.
      var countdownTimer = setInterval(function () {
         $("#time-left").html(timeleft + " seconds");
         timeleft -= 1;
         if (timeleft <= 0) {
            clearInterval(countdownTimer);
            $("#time-left").html("Finished");
         };
      }, 1000);
      // Allows user to submit answers if they finish before time runs out
      $("#question-submit").on("click", function () {
         clearTimeout(quizLength)
         surveyForm();
         finalPage();
      });
      // Time duration for the quiz
      var quizLength = setTimeout(function () {
         surveyForm();
         finalPage();
      }, 180000)
   });
});
// Function that displays the quiz results
function displayResults() {
   $("#modal-content").show();
   $("#correct-total").html("Total Correct: " + correct);
   $("#wrong-total").html("Total Incorrect: " + wrong);
};
// Function that displays the final page containing the quiz results
function finalPage() {
   document.getElementById("modal-content").style.visibility = 'visible';
   displayResults();
};
// Function that takes in user answers and pushes them to an array
function surveyForm(userAnswers) {
   var userAnswers = [];
   var questionOne = $("#question-0").val();
   var questionTwo = $("#question-1").val();
   var questionThree = $("#question-2").val();
   var questionFour = $("#question-3").val();
   var questionFive = $("#question-4").val();
   var questionSix = $("#question-5").val();
   var questionSeven = $("#question-6").val();
   var questionEight = $("#question-7").val();
   var questionNine = $("#question-8").val();
   var questionTen = $("#question-9").val();
   var questionEleven = $("#question-10").val();
   var questionTwelve = $("#question-11").val();
   var questionThirteen = $("#question-12").val();
   var questionFourteen = $("#question-13").val();
   userAnswers.push(questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix,
      questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTwelve, questionThirteen,
      questionFourteen);
   scoreTotal(userAnswers);
};
// Function that sorts through the array and looks for correct answers
function scoreTotal(userAnswers) {
   for (var i = 0; i < userAnswers.length; ++i) {
      if (userAnswers[i] == 0) {
         correct++;
      } else {
         wrong++;
      };
   };
};