const sentence = "hello there from lighthouse labs";
let seconds = 1000;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    //console.log(char);
    process.stdout.write(sentence[i]);
    if (i + 1 === sentence.length)
      process.stdout.write('\n');
  }, seconds);
  seconds += 100;
}