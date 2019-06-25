/*$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/helix/streams?first=20',
    headers: {
      'Client-ID': '79ctfw3yfefdxfek4gto3q1e06mnkv'
    },
    success: function(data) {
      console.log(data);
    }
   });*/

(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.setRequestHeader('Client-ID', '79ctfw3yfefdxfek4gto3q1e06mnkv')

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://api.twitch.tv/helix/streams?first=20');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
   