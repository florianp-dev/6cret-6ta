const readline = require('readline');
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
  var len = inputs.length;
  for (var i=0; i<len; i++) {
    var picked = inputs[Math.floor(Math.random() * len)];
    var current = identified[i];

    if (picked !== current.name) {
      identified[i] = {
        name : current.name,
        id : current.id,
        togift : picked
      }
    } else {
      i--;
    }

    continue;
  }
}

function save_config() {

}

function uniq_id() {
  return '_' + Math.random().toString(36).substr(2, 24);
}
