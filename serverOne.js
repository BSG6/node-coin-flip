
let playerScore = 0;
let botScore = 0;

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('indexOne.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  else if (page == '/api') {
    console.log(req)
    if('headsOrTails' in params){
        let coinFlip = ''
        let checkWhoWon = ''
        let random = Math.random()

        if(random <= .50){
          console.log(random)
          coinFlip = 'tails';
      }else {
        coinFlip = 'heads'
      }
      if(params['headsOrTails'] == coinFlip){
        checkWhoWon = 'Winner';
        playerScore +=1;
      }
        else{
          checkWhoWon = 'You Got, Got';
          botScore +=1;
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          user: params['headsOrTails'],
          bot: coinFlip,
          outcome: checkWhoWon,
          playerScore : playerScore,
          botScore: botScore
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  else if (page == '/css/styleCoin.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/mainOne.js'){
    fs.readFile('js/mainOne.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
