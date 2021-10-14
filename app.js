/************************************
 *  APP STATE
 ***********************************/

const stateScores = {
  player1: 0,
  player2: 0,
  currentQuestion: {},
};

let questions = [];

/************************************
 *  MAIN DOM ELEMENT
 ***********************************/

const $question = $("#question");
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $p1score = $("#player1 h4");
const $p2score = $("#player2 h4");

console.log($p1score, $p2score);

/************************************
 *  Functions
 ***********************************/

const chooseAnswer = (event, question) => {
  console.log(event);
  if (event.target.innerText === question.answer) {
    if (stateScores.which) {
      stateScores.player1++;
      stateScores.which = !stateScores.which;
    } else {
      stateScores.player2++;
      stateScores.which = !stateScores.which;
    }
    setBoard(questions);
  } else {
    setBoard(questions);
    stateScores.which = !stateScores.which;
  }
};

const setBoard = (q) => {
  // this gets the random question

  const randomIndex = Math.floor(Math.random() * q.length);
  const randomQ = q[randomIndex];+

  // this updates the question

  $question.text(randomQ.question);
  $a.text(randomQ.a);
  $b.text(randomQ.b);
  $c.text(randomQ.c);
  $d.text(randomQ.d);

  // this updates the players scores
  $p1score.text(stateScores.player1);
  $p2score.text(stateScores.player2);

  $("li").off(); // this resets the previous answer so it starts fresh
  $("li").on("click", (event) => {
    chooseAnswer(event, randomQ);
  });
};

// winning function// message alert

Math.max($p1score, $p2score)




//refresh the game 

const playAgain = () => {

  window.location.reload();
}

const $playAgainBtn = $("#playAgainBtn")

$playAgainBtn.on("click", playAgain);




/*******************************************
 *  Ajax and url to fetch data for the game
 ******************************************/

const URL =
  "https://cdn.contentful.com/spaces/3urg0g8lvz2m/environments/master/entries?access_token=5fCMzS4lyRQ3uBEj09lmGbjFOj8lRd3Y1brf9FzcI2M&content_type=triviaQ";
$.ajax(URL).then((data) => {
  questions = data.items.map((q) => q.fields);
  console.log(data);
  console.log(questions);

  setBoard(questions); // this sets the board and loads the questions and answers
});
