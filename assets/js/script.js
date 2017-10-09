$(document).ready(function(){
  console.log('jq working')
  submitArray = [];
  wordUp="";

  $("body").on('click','.word-list',function(){
    $("#word-list-container").fadeOut();
    $("#game-board").fadeIn();
    wordArray = $(this).text().toUpperCase().split("");

    wordArray.forEach(function(item){
      $("#game-board #letter-stack").append(
        $(`<div class="letter-box" style="height:calc(99%/${wordArray.length})"></div>`)
        .append(`<div class="letter">${item}</div>`)
        // .append(`<form action="enterToSubmit()"> <input class="word" type="text" name="word" value="${item}" maxlength="9"> </form>`)
        .append(` <input class="word" type="text" name="word" value="${item}" maxlength="9">`)
        .append("<div class='submit-word'>+</div>")
        // .text(`${item}`)

        );

    });
    $("#game-board").append("<div id='new-list-button'>new list</div>");
  });

//SUBMIT BUTTON:
 $(document).ready(function(){
  $("body").on("click",".submit-word", function(){
    wordUp = $(this).prev().val();
    submitArray.push(wordUp);

    $(this).prev().val("");
  });
});

//CREATE NEW WORD LIST BUTTON
$(document).ready(function(){
  $("body").on("click","#new-list-button",function(){

    $("#letter-stack").empty();
    $("#game-board").fadeOut();
    $("#word-list-container").empty();
    submitArray.forEach(function(item){
      $("#word-list-container").append(
        $(`<p class="word-list word1 animated fadeInRight">${item}</p>`)
      );
    })
    $("#word-list-container").fadeIn()
    submitArray = [];
  })
})




//end of script (document.ready function)
});
