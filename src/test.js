require('es6-promise').polyfill();
require('isomorphic-fetch');


fetch('https://www.reddit.com/api/v1/authorize?client_id=aO_hakV12sMyFA&response_type=code&state=rong&redirect_uri=http://127.0.0.1:3000&scope=identity')
      .then(function(response) {
      console.log('response from api call', response);

      })

// Authorization: Basic aHR0cHdhdGNoOmY=
// var str = 'aO_hakV12sMyFA:07uq5ys9b9DNhc6payeqCWXz15g';
// var str2 = new Buffer(str).toString('base64');
// var str3 = 'Basic ' + str2;

// var headers = new Headers( {Authorization: str3})
// // var headers = new Headers({client_id:'aO_hakV12sMyFA', client_secret: '07uq5ys9b9DNhc6payeqCWXz15g' })
//  var myInit = { 
//       method: 'POST',
//       headers: headers,
//       body: 'grant_type=authorization_code&code=BsHYhATcpNgRcFjloeqaGjPvgn4&redirect_uri=http://127.0.0.1:3000'
//     };

//   var myRequest = new Request('https://www.reddit.com/api/v1/access_token', myInit);
//   fetch(myRequest)
//       .then(function(response) {
//         return response.json();
//       }).then(function(json) {
//         console.log('response from api call', json); 
//       })

//   var h = new Headers({Authorization: `bearer fS2SA5UNI1mAHBkRuwaV4QdgTFo`})
//   var init = {
//     method: 'GET',
//     headers: h
//   }
//   var req = new Request('https://oauth.reddit.com/r/all/.json', init )
//   fetch(req).then(function(response) {
//     return response.json();
//   }).then(function(json) {
//     console.log('response from api call',  JSON.stringify(json, null, 4));

//   })




