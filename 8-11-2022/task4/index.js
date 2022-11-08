function firstPassword() {
  let passwordOne = document.getElementById('first-pass');
  if (passwordOne.value.length < 6) {
    document.getElementById('worning-one').innerHTML = 'Too short';
  } else {
    document.getElementById('worning-one').innerHTML = '';
  }
}
function secondPassword() {
  let passwordOne = document.getElementById('first-pass');
  let passwordtwo = document.getElementById('second-pass');
  if (passwordOne.value != passwordtwo.value) {
    document.getElementById('worning-two').innerHTML =
      "the two passwords don't match";
    document.getElementById('buttonForm').style.display = 'none';
  } else {
    document.getElementById('worning-two').innerHTML = '';
    document.getElementById('buttonForm').style.display = 'inline-block';
  }
}
