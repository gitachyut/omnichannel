const graph = require('fbgraph')
const access_token = "EAAaOJmdz6ewBABpZAZCAjlsJH3xk6BHRpX0EhCVBZBUj4obK7u5UXdD7AObH7ZC8bG6qPkAZAjdcCnWu0dF8dOYDRMbna8E6ONuRxjgG9KiZAYhyxw76DoZAg2EKrdld2LhJjeOdww4IZCpHZBZBZCrutIsZAwewQijQtUXlHtXpMcTdgtaBMFBYBWK5snsSUcb8bqId5ZBAZC8gwPPwZDZD"
graph.setAccessToken(access_token);

var options = {
  timeout:  3000
, pool:     { maxSockets:  Infinity }
, headers:  { connection:  "keep-alive" }
};


graph.get(
  "F1NightRace?fields=about,bio,feed{message,full_picture}"
  , function(err, res) {
  console.log(res.feed.data); 
});