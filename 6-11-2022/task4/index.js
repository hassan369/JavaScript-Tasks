let x = 0;
for (let i = 0; i < 100; i++) {
  x += i;
  if (x >= 100) {
    document.write(x);
    break;
  }
}

