var channels = ["ESL_SC2", "aimbotcalvin", "xqcow", "freecodecamp", "overwatchleague", "gale_adelade", "surefour","a_seagull", "bobross"];

$.ajaxSetup({
  headers : {
    "Client-ID": "mpnbqa15jfqhv2zc4oyjst4866tk6r"
  }});

function getStatus(){
  
  channels.forEach(function(channel){
    
  $.getJSON("https://api.twitch.tv/kraken/streams/" + channel , function (data){
    
      var game, status;
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      }
    });  
  });
 }

function getChannelInfo(){
  channels.forEach(function(channel){
    $.getJSON('https://api.twitch.tv/kraken/channels/' + channel, function(data){
      
      var cards ='';
      cards += '<div class="card horizontal ">';
      cards += '<div class="card-image imagen"> <img src="' + data.logo + '"></div>';
      cards += '<div class="card-stacked">';
      cards += '<div class="card-content">';
      if(data.status){
      cards += '<p class="card-text">' + data.status + '</p></div>';   
      }else{
      cards += '<p class="card-text"> No status </p></div>';        
      }
      cards += '<div class="card-action">';
      cards += '<a href="' + data.url + '   " target="_blank">' + data.display_name + '</a></div></div></div>';
           
      $('.fillme').append(cards);
      
    });
    
  });
}
$(document).ready(function(){
  
  getStatus();
  getChannelInfo();
});