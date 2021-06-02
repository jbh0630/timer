const args = process.argv.slice(2);

for (const a of args) {
  setTimeout(() => {
    if (a >= 0 && !isNaN(a) && a) {
      process.stdout.write(`\x07${a} seconds \n`);
    }
  }, a * 1000);
}