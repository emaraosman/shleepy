$(document).ready(function(){
  console.log('jq working')

  $(".word-list").click(function(){
    $("#word-list-container").fadeOut();
    $("#game-board").fadeIn();
    wordArray = $(this).text().toUpperCase().split("");

    wordArray.forEach(function(item){
      $("#game-board #letter-stack").append(
        $(`<div class="letter-box" style="height:calc(100%/${wordArray.length})"></div>`)
        .append(`<div class="letter">${item} :</div>`)
        .append(`<input value="${item}"></input>`)
        .append("<div class='submit-word'>+</div>")
        // .text(`${item}`)
        );
    });

  })


});
