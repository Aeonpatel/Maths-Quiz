player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
answer_turn="player1"
question_turn="player2"
player1_score=0
player2_score=0
document.getElementById("question_turn").innerHTML="Question turn :" + player1_name;
document.getElementById("answer_turn").innerHTML="Answer turn :" + player2_name;

function Send(){
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;

Actual_answer= parseInt(number1) * parseInt(number2);

Question_number="<h4>" + number1 + "x" + number2 + "</h4>";
input_box="<br> Answer : <input type='text' id='answer'";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row= Question_number + input_box + check_button ;

document.getElementById("output").innerHTML=row

document.getElementById("number1").innerHTML=""
document.getElementById("number2").innerHTML=""
}

function check(){
get_answer=document.getElementById("check").value;

if(get_answer==actual_answer){

if(question_turn==player1){
update_player1_score=player1_score + 1;
document.getElementById("player1score").innerHTML=update_player1_score;

}
else
{
update_player2_score=player2_score + 1;
document.getElementById("player2score").innerHTML=update_player2_score;
}
}
}
if(question_turn == "player1"){
question_turn = "player2"
document.getElementById("player_question").innerHTML="Question Turn -" + player2_name;
}
else{
question_turn = "player1"
document.getElementById("player_question").innerHTML="Question Turn" + player1_name;
}
