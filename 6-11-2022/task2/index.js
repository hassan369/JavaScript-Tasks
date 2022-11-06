let x = 1;

for (let j = 1; j <= 4; j++) {
  for (let i = 0; i < j; i++) {
    document.write(x + ' ');
    x += 1;
  }
  document.write('\n');
}
