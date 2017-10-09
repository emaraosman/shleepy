$(document).ready(function(){
  console.log('jq working')
  submitArray = [];
  wordup=""

  $(".word-list").one('click',function(){
    $("#word-list-container").fadeOut();
    $("#game-board").fadeIn();
    wordArray = $(this).text().toUpperCase().split("");

    wordArray.forEach(function(item){
      $("#game-board #letter-stack").append(
        $(`<div class="letter-box" style="height:calc(99%/${wordArray.length})"></div>`)
        .append(`<div class="letter">${item}</div>`)
        .append(`<form action="enterToSubmit()"> <input class="word" type="text" name="word" value="${item}" maxlength="9"> </form>`)
        .append("<div class='submit-word'>+</div>")
        // .text(`${item}`)
        );
    });
  })

  //use this function to press enter and submit the value into submit array.
  function enterToSubmit(){
    submitArray.push($(this).val())
    $(this).val()="";
  }

  //use this function to click on submit button and submit value into submit array.
  $(".submit-word").one("click",function(){
    wordup = $("input")[1].val()
    submitArray.push(wordup);
    $("input")[1].val()="";
  })





//end of script (document.ready function)
});
