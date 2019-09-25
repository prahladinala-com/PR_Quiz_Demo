 function check(){
    var question1 = document.quiz_name.question1.value;
    var question2 = document.quiz_name.question2.value;
    var question3 = document.quiz_name.question3.value;
    var correct = 0;

        if (question1 == "Madam"){
            correct++;
        }
        if (question2 == "Option01"){
            correct++;
        }
        if (question3 == "Option03"){
            correct++;
        }

        var messages = ["Great Job!", "That's just okay", "You really need to do better"];
        var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"]
        var range;
            if (correct < 1){
                range = 2;
            }
            if (correct > 0 && correct < 3){
                range = 1;
            }
            if (correct > 2){
                range = 0;
            }

    document.getElementById("result_screen").style.visibility="visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("correction_made").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}