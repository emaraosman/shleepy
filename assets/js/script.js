$(document).ready(function(){

  console.log('jq working')

  $(".word-list").click(function(){
    $("#word-list-container").fadeOut();
    wordArray = $(this).text().split("")
  })


});
