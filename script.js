 

        // JavaScript function that wraps everything
        $(document).ready(function () {
            
            
            setInterval(function() {
           $(".runTime").text((timer--));
            }, 1000); 

            
            if (timer <= 0) {
                alert("plugged in")
            }


            // Declaring variables for score, user initials, and timer
            var timer = 30;

            var currentScore = 0;
            var userInitials;
            // variables for question 1
            var question1 = "What does NBA stand for?";
            var answer1a = "National Basketball Athletics";
            var answer1b = "National Basketball Association";
            var answer1c = "Natural Basketball Association";
            var answer1d = "Natural Basketball Association";
            var correctAnswer1 = answer1b;  


                $(".card-header").text(question1)
                $("#1-a").text(answer1a)
                $("#1-b").text(answer1b)
                $("#1-c").text(answer1c)
                $("#1-d").text(answer1d)


            

  $(".answer-a-button").on("click", function () {
             $(".rightwrongdisplay").text("Sorry!")
                timer = (timer-10)
                console.log("wrong")
            });

  $(".answer-b-button").on("click", function () {
             $(".rightwrongdisplay").text("Correct!")
             currentScore++
            nextQeustion()
                console.log("correct")
                console.log(currentScore)
            });

   $(".answer-c-button").on("click", function () {
              $(".rightwrongdisplay").text("Sorry!")
              timer = (timer-10)
                console.log("wrong")
            });
        
   $(".answer-d-button").on("click", function () {
             $(".rightwrongdisplay").text("Sorry!")
             timer = (timer-10)
                console.log("wrong")
            });
            
function nextQeustion () {
       var question1 = "What does NBA  for 2?";
            var answer1a = "National Basketball ";
            var answer1b = "National Basketball ";
            var answer1c = "Natural Basketball ";
            var answer1d = "Natural Basketball ";
            var correctAnswer1 = answer1d;  


            

                $(".card-header").text(question1)
                $("#1-a").text(answer1a)
                $("#1-b").text(answer1b)
                $("#1-c").text(answer1c)
                $("#1-d").text(answer1d)
                
              $(".answer-a-button").on("click", function () {
             $(".rightwrongdisplay").text("Sorry!")
                timer = (timer-10)
                console.log("wrong")
            });

  $(".answer-b-button").on("click", function () {
             $(".rightwrongdisplay").text("Sorry!")
              timer = (timer-10)
                console.log("wrong")
             
            });

   $(".answer-c-button").on("click", function () {
              $(".rightwrongdisplay").text("Sorry!")
              timer = (timer-10)
                console.log("wrong")
            });
        
   $(".answer-d-button").on("click", function () {
             $(".rightwrongdisplay").text("Correct!")
              currentScore++
            nextQeustion2()
                console.log("correct")
                console.log(currentScore)
            });
                
}

function nextQeustion2 () {
       var question1 = "What does NBA  for 3?";
            var answer1a = "National  ";
            var answer1b = "National  ";
            var answer1c = "Natural  ";
            var answer1d = "Natural  ";
            var correctAnswer1 = answer1c;  


                $(".card-header").text(question1)
                $("#1-a").text(answer1a)
                $("#1-b").text(answer1b)
                $("#1-c").text(answer1c)
                $("#1-d").text(answer1d)

            $(".answer-a-button").on("click", function () {
             $(".rightwrongdisplay").text("Sorry!")
                timer = (timer-10)
                console.log("wrong")
            });

  $(".answer-b-button").on("click", function () {
             $(".rightwrongdisplay").text("Sorry!")
              timer = (timer-10)
                console.log("wrong")
            });

   $(".answer-c-button").on("click", function () {
              $(".rightwrongdisplay").text("Correct!")
              currentScore++
              highScore()
                console.log("correct")
                console.log(currentScore)
            });

        
   $(".answer-d-button").on("click", function () {
             $(".rightwrongdisplay").text("Sorry!")
             timer = (timer-10)
                console.log("wrong")
            });


                
}

function highScore () {
       var question1 = "Top 3 High Scores!";
            var answer1a = "  ";
            var answer1b = currentScore;
            var answer1c = "  ";
            var answer1d = "  ";
            var letterd = "  ";
            var correctAnswer1 = answer1c;  

            

            userInitials = prompt("Enter your initials")

                $(".card-header").text(question1)
                $("#1-a").text(answer1a)
                $("#1-b").text(answer1b)
                $("#1-c").text(answer1c)
                $("#1-d").text(answer1d)

                 $("#top-scores-3").text()
                
               

                $("#high-score-a").text("You got the High Score!!!")
                $("#high-score-b").text("# 1" + "-" + userInitials + " " + "Correct Answers:" + " " + currentScore )
                $("#high-score-c").text("# 2" + "-" + "TCD")
                $("#high-score-d").text("# 3" + "-" + "MJ")

                console.log(currentScore)



                

           

                
}



          


          
        }
        

        )