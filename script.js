// JavaScript function that wraps everything
$(document).ready(function () {
  // Targeting HTML class for user required action to start quiz
  $(".rightwrongdisplay").text("Click here to Start!");
  // Click listerner for targeted HTML class
  $(".rightwrongdisplay").on("click", function () {
    // Setting an interval timer with condition to run function when clock reaches zero
    var timer2 = setInterval(function () {
      $(".runTime").text("Timer:" + " " + timer--);
      if (timer <= 0) {
        clearInterval(timer2);
        highScore();
        return;
      }
    }, 1000);
  });

  // Declaring variables for score, user initials, and timer
  var timer = 30;
  var currentScore = 0;
  var userInitials;
  // variables for question 1
  var question1 = "What data types can variables be in Java?";
  var answer1a = "PDF, JPG, GIF";
  var answer1b = "Numbers, Strings, Booleans";
  var answer1c = "Hours, Seconds, Minutes";
  var answer1d = "Capital, Lower, Numbers";
  var correctAnswer1 = answer1b;

  // Targeted HTML classes for displaying question 1
  $(".card-header").text(question1);
  $("#1-a").text(answer1a);
  $("#1-b").text(answer1b);
  $("#1-c").text(answer1c);
  $("#1-d").text(answer1d);

  // Click listener for Answer a with fucntionality to remove additional time from set interval
  $(".answer-a-button").on("click", function () {
    $(".rightwrongdisplay").text("Sorry!");
    timer = timer - 10;
  });
  // Click listener for Answer b with fucntionality to increase score by 1
  $(".answer-b-button").on("click", function () {
    $(".rightwrongdisplay").text("Correct!");
    currentScore++;
    nextQeustion();
  });
  // Click listener for Answer c with fucntionality to remove additional time from set interval
  $(".answer-c-button").on("click", function () {
    $(".rightwrongdisplay").text("Sorry!");
    timer = timer - 10;
  });
  // Click listener for Answer c with fucntionality to remove additional time from set interval
  $(".answer-d-button").on("click", function () {
    $(".rightwrongdisplay").text("Sorry!");
    timer = timer - 10;
  });

  // second question function with variables for question 2
  function nextQeustion() {
    var question1 = "What is the basic variable syntax for Java?";
    var answer1a = "var 'name' = value;  ";
    var answer1b = "var = name value; ";
    var answer1c = "var = name value ";
    var answer1d = "var name = value; ";
    var correctAnswer1 = answer1d;

    // Targeted HTML classes for displaying question 2
    $(".card-header").text(question1);
    $("#1-a").text(answer1a);
    $("#1-b").text(answer1b);
    $("#1-c").text(answer1c);
    $("#1-d").text(answer1d);

    // Click listener for Answer a with fucntionality to remove additional time from set interval
    $(".answer-a-button").on("click", function () {
      $(".rightwrongdisplay").text("Sorry!");
      timer = timer - 10;
    });
    // Click listener for Answer a with fucntionality to remove additional time from set interval
    $(".answer-b-button").on("click", function () {
      $(".rightwrongdisplay").text("Sorry!");
      timer = timer - 10;
    });
    // Click listener for Answer c with fucntionality to remove additional time from set interval
    $(".answer-c-button").on("click", function () {
      $(".rightwrongdisplay").text("Sorry!");
      timer = timer - 10;
      console.log("wrong");
    });
    // Click listener for Answer b with fucntionality to increase score by 1
    $(".answer-d-button").on("click", function () {
      $(".rightwrongdisplay").text("Correct!");
      currentScore++;
      nextQeustion2();
    });
  }
  // third question function with variables for question 3
  function nextQeustion2() {
    var question1 = "How is an object identified in Java?";
    var answer1a = "Object =";
    var answer1b = "[ ]";
    var answer1c = "{ }";
    var answer1d = "( )";
    var correctAnswer1 = answer1c;

    // Targeted HTML classes for displaying question 3
    $(".card-header").text(question1);
    $("#1-a").text(answer1a);
    $("#1-b").text(answer1b);
    $("#1-c").text(answer1c);
    $("#1-d").text(answer1d);
    // Click listener for Answer a with fucntionality to remove additional time from set interval
    $(".answer-a-button").on("click", function () {
      $(".rightwrongdisplay").text("Sorry!");
      timer = timer - 10;
      console.log("wrong");
    });

    $(".answer-b-button").on("click", function () {
      $(".rightwrongdisplay").text("Sorry!");
      timer = timer - 10;
      console.log("wrong");
    });
    // Click listener for Answer c with fucntionality to increase score by 1
    $(".answer-c-button").on("click", function () {
      $(".rightwrongdisplay").text("Correct!");
      currentScore++;
      highScore();
      console.log("correct");
      console.log(currentScore);
    });

    // Click listener for Answer d with fucntionality to remove additional time from set interval
    $(".answer-d-button").on("click", function () {
      $(".rightwrongdisplay").text("Sorry!");
      timer = timer - 10;
      console.log("wrong");
    });
  }

  // Function to take user into the high score screen with variable to display results
  function highScore() {
    var question1 = "Top 3 High Scores!";
    var answer1a = "  ";
    var answer1b = currentScore;
    var answer1c = "  ";
    var answer1d = "  ";
    var letterd = "  ";
    var correctAnswer1 = answer1c;

    // Prompt to allow user to enter requested initials
    userInitials = prompt("Enter your initials");

    // method for storing user current score to local storage
    localStorage.setItem("Score", currentScore);
    // method for storing users initials to local storage
    localStorage.setItem("Initials", userInitials);

    // Targeted HTML classes for displaying top 3 high scores
    $(".card-header").text(question1);
    $("#1-a").text(answer1a);
    $("#1-b").text(answer1b);
    $("#1-c").text(answer1c);
    $("#1-d").text(answer1d);

    $("#high-score-a").text("You got the High Score!!!");
    // currentScore = localStorage.getItem(currentScore)
    $("#high-score-b").text(
      "# 1" +
        "-" +
        localStorage.getItem(userInitials) +
        " " +
        "Correct Answers:" +
        " " +
        localStorage.getItem(currentScore)
    );
    $("#high-score-b").text(
      "# 1" + "-" + userInitials + " " + "Correct Answers:" + " " + currentScore
    );
    $("#high-score-c").text("# 2" + "-" + "TCD");
    $("#high-score-d").text("# 3" + "-" + "MJ");
  }
});
