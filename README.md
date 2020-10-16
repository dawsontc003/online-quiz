# online-quiz

psuedo code

1. Create basic frame work for UI
   a. Container to house question and multiple choice answers.
2. Link a function to an HTML element to initiate quiz and start timer. - jQuery counter method to keep score - event listener to start clock
3. Display question to user
   a. attach java click listener to individual multiple choice responses
   b. Advise user if answer was right or wrong
   c. If response is incorrect move on to next question and deduct additional time from timer as penalty
   d. If response is correct move on to next question with no time penalty
4. Once all questions are answered end the quiz
   a. user must be able to save initials with their score
   b. If the timer runs to zero then end the quiz also allowing the user to save initials with their score
