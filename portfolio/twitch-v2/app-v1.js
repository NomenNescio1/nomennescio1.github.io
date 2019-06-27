(function() {
    let httpRequest;
    let streamsLogin = ['xqcow', 'a_seagull', 'aimbotcalvin', 'bobross'];
    let usersEnpoint = "https://api.twitch.tv/helix/users?login=";
    let streamsEnpoint = "https://api.twitch.tv/helix/streams?user_id=";
    
    function usersRequest(){
        let streamsLoginLength = streamsLogin.length();
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
          }
        for (let i=0; i<=streamsLoginLength; i++){
          httpRequest.onreadystatechange = usersResponse;
          httpRequest.open('GET', usersEnpoint + streamsLogin[i]);
          httpRequest.setRequestHeader('Client-ID', '79ctfw3yfefdxfek4gto3q1e06mnkv')
          httpRequest.send();
        }
    }
        
    function usersResponse(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log(httpRequest.responseText);
            } else {
            alert('There was a problem with the request.');
            }
        }
    }
    document.getElementById("ajaxButton").addEventListener('click', usersRequest);
});