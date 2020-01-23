
    var httpRequest;
    function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.responseType = "json";

    if (!httpRequest) {
      console.log('Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://api.twitch.tv/helix/streams?user_login=a_seagull&user_login=emongg&user_login=bobross&user_login=ml7support');
    httpRequest.setRequestHeader('Client-ID', '79ctfw3yfefdxfek4gto3q1e06mnkv')
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.response);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  makeRequest();

   