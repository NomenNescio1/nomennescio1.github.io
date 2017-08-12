$(function(){
  
  $('#search').on('click', function(){
  $('#fillme').empty();
  var busqueda = $('#term').val();
  var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ busqueda +"&format=json&callback=?"; 
    
    $.ajax({
      url: url,
      type: 'GET',
      contentType: "application/json; charset=utf-8",
			async: false,
      dataType: "json",
      success: function(data){
        for(var i=0;i<data[1].length;i++){
         $("#fillme").append("<div class='card'> <h2 class='card-title'> <a href=" + data[3][i] + " target='_blank'>" + data[1][i]+  " </a></h2> " + "<div class ='card-block'><p class='card-text'>" + data[2][i] + "</p></div></div><br>");
        }
      }
   
    });
    
  });
   
});
$(document).ready(function(){
  $("#input").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#search").click();
    }
  });
});