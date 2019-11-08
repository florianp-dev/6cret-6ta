const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nbParticipant;
var participants = [];

rl.question('Pour combien de participants ? ', (answer) => {
  nbParticipant = answer;



  for (var i = 0; i < nbParticipant; i++) {
    rl.question(`${i+1}e participant : `, (player) => {
        participants[i] = player;
        rl.close();
    });
  }

  rl.close();
});
