const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var inputs = [];
var identified = [];

rl.prompt();

rl.on('line', (input) => {
  if (input === 'ok')
    rl.close();

  inputs.push(input);
});

rl.on('close', (cmd) => {
  assign_id();
  assign_gift();
  save_config();
});

function assign_id() {
  for (var i=0; i<inputs.length; i++) {
    var current_value = inputs[i];
    identified.push(
      {
        name : current_value,
        id : uniq_id()
      }
    )
  }
}

function assign_gift() {
  let len = inputs.length;
  for (var i=0; i<len; i++) {
    var pickedPos = Math.floor(Math.random() * inputs.length);
    var pickedEntrant = inputs[pickedPos];
    var currentEntrant = identified[i];

    if (pickedEntrant !== currentEntrant.name) {
      identified[i] = {
        name : currentEntrant.name,
        id : currentEntrant.id,
        togift : pickedEntrant
      }
      inputs.splice(pickedPos, 1);
    } else {
      i--;
    }
  }
}

function save_config() {
  fs.writeFile(
    './6cret_config.json',
    JSON.stringify(identified),
    (err) => {
      if (err) {
          console.error(err);
          return;
      };
      console.log("Fichier créé avec succès.");
    }
  );
}

function uniq_id() {
  return '_' + Math.random().toString(36).substr(2, 24);
}
