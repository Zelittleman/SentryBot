 //backup file for GCP that works
 
 
 //URL for Teams room
 const roomId = ''

 //helping generate the Teams message
 let facts = [];

 //url to get to page
 let URL = `https://buildertrend.sentry.io/issues/${req.body.data.event.issue_id}/?project=5790930`;

 //tags list req.body.data.event.tags

 console.log(`Here is your link to the project: ${URL}`);
 console.log(JSON.stringify(req.body));