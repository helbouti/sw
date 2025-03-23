const push= require('web-push');
const vapidkeys={
    publicKey: 'BIjr4PxYaaWx1SWAsrsREw_ZbrUWNk7iPKWBdTc73QBT0qEW6f9HCTd79QfkVV5GryOd5zIjhA1oIVWohtgGheQ',
    privateKey: 'CBq0smSS0oEzhy2238QtJF2dK3gOCQGN81eCctVxUrM'
  }
console.log(vapidkeys);
// vapidkeys={
//     publicKey: 'BIjr4PxYaaWx1SWAsrsREw_ZbrUWNk7iPKWBdTc73QBT0qEW6f9HCTd79QfkVV5GryOd5zIjhA1oIVWohtgGheQ',
//     privateKey: 'CBq0smSS0oEzhy2238QtJF2dK3gOCQGN81eCctVxUrM'
//   }

push.setVapidDetails('mailto:helbouti@gmail.com',vapidkeys.publicKey,vapidkeys.privateKey);
let sub={};//this is the subscription object
// //send notification
push.sendNotification(sub,'test message');