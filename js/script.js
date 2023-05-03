
let questions = [
    {
    numb: 1,
    photo: "assets/game/q1.png",
    explanation: "BBC is a well-known and reliable news channel. Although there were rumors about the status of Queen Elizabeth's health leading up to her death, her passing was covered by many well-known news sources around the world as she was a public figure. PS: Rumors are typically not found in large, reputable news channels. ",
    question: "Reliable source",
    answer: "True",
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 2,
    photo: "assets/game/q2.png",
    question: "Confirmation Bias and Phrasing",
    explanation: "The previous article contains leading vocabulary that favors a certain viewpoint when stating that 'Lockdowns ruined industries in America'.The wording subconsciously makes people associate lockdowns with something harmful, even though its purpose was to control covid spread at the time of the pandemic. This is an example of Confirmation Bias, the human tendency to search for, favor, and use information that confirms one's pre-existing views on a certain topic.",
    answer: "False",
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 3,
    photo: "assets/game/q3.png",
    question: "If it is too good to be true, then it probably is",
    explanation: "Fake news can be generated as a criticism of a company or idea in order to DISRUPT their work or spark debate. Ely Lilly, One of the largest producers of insulin in the world,  was the target of a fake twitter account. The false tweet claiming insulin was free caused ely lilly's stocks to drop 6% within 24 hours.",
    answer: "False",
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 4,
    photo: "assets/game/q4.png",
    question: "Do not believe everything you read on Twitter",
    explanation: "Not every form of mass communication is trustworthy, particularly those that allow private accounts and serve as social media This tweet allegedly sent by the Syrian electronic army was from a hacked twitter account posing as the Associated Press How do you prevent falling for fake news on twitter? Simply search for validation of the news you read across multiple sources (Google it, for instance)",
    answer: "False",
    options: [
      "True",
      "False"
    ]
  },
    {
    numb: 5,
    photo: "assets/game/q5.png",
    question: "Is it a joke?",
    explanation: "This meme started with the 'one word' trend on twitter in which brands posted one word that defined them. However, some people saw the chance to play pranks on individuals and companies by emulating the trend. In the quiz example, the tweet impersonates Matt Gaetz following accusations and a federal investigation about his involvement in sex trafficking minors, although Gaetz was not charged in the case.",
    answer: "False",
    options: [
      "True",
      "False"
    ]
  },
  

     {
     numb: 6,
     photo: "assets/game/q6.png",
     question: "clear headlines and no bias",
     explanation: "This is an unfortunate article; however, it is purely presenting facts about what happened to Bed Bath & Beyond. The phrasing does not lead to bias nor does it advertise competitors of Bed Bath & Beyond.",
     answer: "True",
     options: [
       "True",
       "False"
    ]
   },

   {
    numb: 7,
    photo: "assets/game/q7.png",
    question: "KEEP An eye out FOR TYPOS AND grammatical errors",
    explanation: "In this article, there was a typo, instead of 'Obama' it should have read 'Osama' Even though the news was in a reliable channel, the error could result in misunderstandings about events. Poorly edited articles or news with frequent misspellings and grammatical errors is often a sign of fake news. PS: ex-president Obama is still alive",
    answer: "False",
    options: [
      "True",
      "False"
   ]
  },

  {
    numb: 8,
    photo: "assets/game/q8.png",
    question: "HAVE YOU EVER HEARD ABOUT CLICK BAIT?",
    explanation: "Click Bait is a term that characterizes sensationalistic news that intrigues people to click and try to understand the misleading or shocking headline. They are usually present at the end of websites or on social media platforms where they profit from clicks and views. Click bait is usually phrased in a provoking way, relies on exaggerated claims, or leaves out key information. Most of the time, click bait does not sound realistic.",
    answer: "False",
    options: [
      "True",
      "False"
   ]
  },
];


//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const photo_show = document.querySelector(".photo_show");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const que_text = document.querySelector(".que_text");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location = 'index.html'
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". "+'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>';
    let photo_tag = "<img src="+questions[index].photo+">"
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    photo_show.innerHTML = photo_tag;
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){

    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    let photo_tag2 = '<span class="explanation">'+ questions[que_count].explanation + '</span>';
    photo_show.innerHTML = photo_tag2;
    let que_tag2 = '<span>'+ questions[que_count].numb + ". " + questions[que_count].question +'</span>';
    que_text.innerHTML = que_tag2; //adding new span tag inside que_tag
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}
