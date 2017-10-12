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


  ////////////////////////////////////////////
  //TIMER FUNCTIONALITY
  //
  //Timer below is set from the start of the page load
  //timer is reset to 5 minutes everytime the submit-word button is pressed.

  let time = 120000; // 2 minutes

  var timerId = setTimeout(function() {
    console.log("you win")
    $("#win-screen").fadeIn()
  }, time)

  $("body").on("click", ".submit-word", function() {
    console.log("reset timer")
    clearInterval(timerId)
    time = 120000;
    timerId = setTimeout(function() {
      console.log("you win")
      $("#win-screen").fadeIn()
    }, time);

  });

/////////////////////////////////////////////
//waitScreen functionality:
//creates loading screen each time submit-word button is pressed
//
//this function is called later on as a side effect of submit-word button
//
  function waitScreen() {
      $("#wait-screen").fadeIn();
      setTimeout(function() {
        $("#wait-screen").fadeOut();
      }, 3000);

  }

  function noInput() {
      $("#no-input-screen").fadeIn();
      setTimeout(function() {
        $("#no-input-screen").fadeOut();
      }, 1000);

  }

  //Random word generator function used to fill emply word-lists should they ever appear empty or less than 7
  function randomWordGenerator() {
    let randomWord = starterPack[Math.floor(Math.random() * starterPack.length)];
    // console.log(randomWord);
    return randomWord;
  }


  //Populates wordList variable with array of words to feed word-list-container and create list of words to choose from
  function populateWordList() {
    $("#word-list-container").append($("<div id='new-list-button' >new list</div>"));
    let wordCounter = wordList.length
    //wordList dynamic populator: this accounts for whether word list is less than 7 but not always 0 or some predefined value
    if (wordList.length < 7) {
      for (let i = 0; i < (7 - wordCounter); i++) {
        wordList.push(randomWordGenerator());
      }
      let tick = 0
      wordList.forEach(function(item) {
        tick++
        $("#word-list-container").append($(`<p class="word-list word${tick} animated fadeInRight">${item}</p>`))
      });
    }
    // If the submitArray becomes longer than 7 elements we only take the first 7 to submit.
    else if (wordList.length > 7) {
      wordList = wordList.splice(0, 7)
      let tick2 = 0
      wordList.forEach(function(item) {
        tick2++
        $("#word-list-container").append($(`<p class="word-list word${tick2} animated fadeInRight">${item}</p>`))
      });
    }
    wordList = [];
  }

  populateWordList();

  //||||||||||||||||||||||||||||||||||||||
  //DIV GENERATOR
  //This block of code below generates the input fields
  $("body").on('click', '.word-list', function() {
    $("#word-list-container").fadeOut();
    $("#game-board").fadeIn();
    wordArray = $(this).text().toUpperCase().split("");

    wordArray.forEach(function(item) {
      $("#game-board #letter-stack").append(
        $(`<div class="letter-box" style="height:calc(99%/${wordArray.length}); min-height:calc(99%/${wordArray.length})"></div>`)
        .append(`<div class="letter">${item}</div>`)
        // .append(`<form action="enterToSubmit()"> <input class="word" type="text" name="word" value="${item}" maxlength="9"> </form>`)
        .append(` <input class="word" type="text" name="word" autocomplete='off' placeholder='"${item}" words' maxlength="9">`)
        .append("<div class='submit-word'>+</div>")
        // .text(`${item}`)

      );

    });
    $("#game-board").append("<div id='new-list-button' >new list</div>");
  });

  //SUBMIT BUTTON:

  $("body").on("click", ".submit-word", function() {
    if (wordUp = $(this).prev().val() == "") {
      noInput()
    } else {
      waitScreen();
      wordUp = $(this).prev().val();
      wordUp = wordUp.toLowerCase();
      submitArray.push(wordUp);

      wordList = submitArray;
      $(this).prev().slideUp( 300 ).delay( 500 ).fadeIn( 400 );
      $(this).slideUp( 300 ).delay( 500 ).fadeIn( 400 );
      $(this).prev().val("");

    }
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
