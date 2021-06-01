const args = process.argv.slice(2);
const sortedArgs = args.sort(function(a, b) {
  return a - b;
});


for (const a of sortedArgs) {
  setTimeout(() => {
    if (a > -1 && !isNaN(a) && a) {
      process.stdout.write(`. ${a} seconds \n`);
    }
  }, a * 1000);
}