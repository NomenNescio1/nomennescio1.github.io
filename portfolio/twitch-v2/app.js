$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/helix/streams?first=20',
    headers: {
      'Client-ID': '79ctfw3yfefdxfek4gto3q1e06mnkv'
    },
    success: function(data) {
      console.log(data);
    }
   });