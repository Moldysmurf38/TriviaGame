// List of variables
var correct = 0;
var wrong = 0;
$(window).on('load',function(){
   $('#start-modal').modal('show');
   $('<div class="modal-backdrop"></div>').appendTo(document.body)
});
$(function () {
   $("#startBtn").on("click", function () {
      $("#start-modal").css({"display": "none"})
      $(".modal-backdrop").remove();
      $("body").removeClass("modal-open");
      document.getElementById('start-modal').style.display='none'
      var timeleft = 180;
      var countdownTimer = setInterval(function () {
         $("#time-left").html(timeleft + " seconds");
         timeleft -= 1;
         if (timeleft <= 0) {
            clearInterval(countdownTimer);
            $("#time-left").html("Finished");
         };
      }, 1000);
      $("#question-submit").on("click", function () {
         clearTimeout(quizLength)
         surveyForm();
         finalPage();
      });
      var quizLength = setTimeout(function () {
         surveyForm();
         finalPage();
      }, 180000)
   });
});
function displayResults() {
   $("#correct-total").html("Total Correct: " + correct);
   $("#wrong-total").html("Total Incorrect: " + wrong);
   $("#final-modal").show();
};
function finalPage() {
   $("#modal-content").css({"visibility" : "visible"})
   $('<div class="modal-backdrop"></div>').appendTo(document.body)
   displayResults();
};
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
function scoreTotal(userAnswers) {
   for (var i = 0; i < userAnswers.length; ++i) {
      if (userAnswers[i] == 0) {
         correct++;
      } else {
         wrong++;
      };
   };
};