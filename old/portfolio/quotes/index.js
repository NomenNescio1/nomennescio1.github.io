var x = 0;
var cita= "", autor="";  
$(document).ready(function(){
    $(".actual-quote__button").on("click", function(){
     $.ajax({
      url: 'https://api.myjson.com/bins/qnf8j',
      type: 'GET',
      success: function(value){
        x=Math.floor((Math.random() * 225) + 0); 
        cita = value.quotes[x].quote;
        autor = value.quotes[x].author;
            $(".quote-box").animate({
          opacity: 0
        }, 300,
        function() {
          $(this).animate({
            opacity: 1
          }, 300);
      $(".actual-quote").html("<blockquote class='blockquote'> <p>" + cita + "</p><footer class='blockquote-footer'><p>" + autor + "</p></footer></blockquote>");
        });
 $('.actual-quote__tuit').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + cita + '" ' + autor)); 
     }
    });  
   });
 });

