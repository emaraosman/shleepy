$(document).ready(function() {

  // Create list of words array to choose from during random word generation sequences


  // console.log('jq working')
  let submitArray = [];
  let wordUp = "";
  let wordList = [];

  starterPack = ["bat", "bed", "boy", "bun", "can", "cake", "cap", "car", "cat", "cow", "cub", "cup", "dad", "day", "dog", "dust", "fan", "hat", "hen",
    "jar", "kite", "map", "pan", "pet", "pie", "pig", "pot", "rat", "sun", "toe", "tub", "van", "bike", "bird", "chin", "clam", "class", "clover", "club",
    "corn", "crayon", "crow", "crown", "crowd", "crib", "desk", "dime", "dirt", "fang", "field", "flag", "flower",
    "fog", "game", "heat", "home", "horn", "hose", "joke", "juice", "kite", "lake", "maid", "mask", "mice", "milk", "mint", "meal", "meat", "nest", "nose", "pear",
    "pen", "plant", "rain", "river", "road", "rock", "room", "rose", "shape", "shoe", "shop", "show", "sink", "snail", "snake", "snow", "soda", "sofa", "star", "step",
    "stew", "stove", "straw", "string", "swing", "table", "tank", "team", "tent", "test", "toes", "vest", "water", "wing", "winter"
  ]
  //  randomWordGenerator()
let time = 300000; // 5 minutes

var timerId = setTimeout(function(){
  console.log("you win")
},time)

$("body").on("click","input",function(){
  console.log("reset timer")
  clearInterval(timerId)
  time = 300000;
  timerId = setTimeout(function(){
    console.log("you win")
  },time);

});

// $("input").on("click",function(){
//     time = 5000;
// }))else{
//
// }

// setInterval(function(){
//   if($("input").click()){
//     console.log("stillplaying")
//     time = 5000;
//   }else{
//     console.log("gameover")
//   }
//  }, time);

  // setInterval(function(){
  //   if($("input").is(":focus")){
  //     console.log('still playing')
  //     time = 5000
  //   } else {
  //     window.alert('hello')
  //     clearInterval();
  //   }
  //   console.log('bbbbbbbb')
  //  }, time);







  //Random word generator function used to fill emply word-lists should they ever appear empty or less than 7
  function randomWordGenerator() {
    let randomWord = starterPack[Math.floor(Math.random() * starterPack.length)];
    // console.log(randomWord);
    return randomWord;
  }


//Populates wordList variable with array of words to feed word-list-container and create list of words to choose from
  function populateWordList() {
    let wordCounter = wordList.length
//wordList dynamic populator: this accounts for whether word list is less than 7 but not always 0 or some predefined value
    if (wordList.length < 7) {
      for (let i = 0; i < (7 - wordCounter); i++) {
        wordList.push(randomWordGenerator());
      }
      tick = 0
      wordList.forEach(function(item) {
        tick++
        $("#word-list-container").append($(`<p class="word-list word${tick} animated fadeInRight">${item}</p>`))
      });
    }
// If the submitArray becomes longer than 7 elements we only take the first 7 to submit.
    else if (wordList.length > 7) {
      wordList = wordList.splice(0, 7)

      wordList.forEach(function(item) {
        $("#word-list-container").append($(`<p class="word-list word1 animated fadeInRight">${item}</p>`))
      });
    }
    wordList = [];
  }

  populateWordList()


  $("body").on('click', '.word-list', function() {
    $("#word-list-container").fadeOut();
    $("#game-board").fadeIn();
    wordArray = $(this).text().toUpperCase().split("");

    wordArray.forEach(function(item) {
      $("#game-board #letter-stack").append(
        $(`<div class="letter-box" style="height:calc(99%/${wordArray.length}); min-height:calc(99%/${wordArray.length})"></div>`)
        .append(`<div class="letter">${item}</div>`)
        // .append(`<form action="enterToSubmit()"> <input class="word" type="text" name="word" value="${item}" maxlength="9"> </form>`)
        .append(` <input class="word" type="text" name="word" autocomplete='off' placeholder='start with "${item}"' maxlength="9">`)
        .append("<div class='submit-word'>+</div>")
        // .text(`${item}`)

      );

    });
    $("#game-board").append("<div id='new-list-button'>new list</div>");
  });

  //SUBMIT BUTTON:

  $("body").on("click", ".submit-word", function() {
    wordUp = $(this).prev().val();
    wordUp.toLowerCase();
    submitArray.push(wordUp);
    // submitArray.map(function(item){
    //   wordList.push(sumbitArray);
    //   return wordList;
    // })
    wordList = submitArray;
    // populateWordList();
    $(this).prev().val("");
  });


  //CREATE NEW WORD LIST BUTTON

  $("body").on("click", "#new-list-button", function() {
    $("#letter-stack").empty();
    $("#game-board").fadeOut();
    $("#word-list-container").empty();
    populateWordList();
    wordList.forEach(function(item) {
      $("#word-list-container").append(
        $(`<p class="word-list word1 animated fadeInRight">${item}</p>`)
      );
    })
    $("#word-list-container").fadeIn()
    submitArray = [];
  })




  //end of script (document.ready function)
});
