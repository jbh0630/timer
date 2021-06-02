const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0062') {
    process.stdout.write('\x07');
  } else if (key > 0 && key < 10) {
    setTimeout(() => {
      process.stdout.write(`\x07Setting timer for ${key} secondes...\n`);
    }, key * 1000);
  } else if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!");
    process.exit();
  } 
});