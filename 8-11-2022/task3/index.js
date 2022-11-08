let textAreaContent = document.getElementById('textarea-p');
function fontFamilyChange() {
  let value = document.getElementById('family-select').value;
  if (value == 'arial') {
    textAreaContent.style.fontFamily = 'arial';
  } else if (value == 'cursive') {
    textAreaContent.style.fontFamily = 'cursive';
  } else if (value == 'serif') {
    textAreaContent.style.fontFamily = 'serif';
  }
}
let currentFontSize = document.getElementById('textarea-p');
function fontSizeChange() {
  let value = document.getElementById('font-size-select').value;
  if (value == '12') {
    currentFontSize.style.fontSize = '12pt';
  } else if (value == '24') {
    currentFontSize.style.fontSize = '24pt';
  } else if (value == '36') {
    currentFontSize.style.fontSize = '36pt';
  }
}

function italicFun() {
  if (document.getElementById('italic-input').checked) {
    textAreaContent.style.fontStyle = 'italic';
  } else {
    textAreaContent.style.fontStyle = 'normal';
  }
}
function boldFun() {
  if (document.getElementById('bold-input').checked) {
    textAreaContent.style.fontWeight = 'bold';
  } else {
    textAreaContent.style.fontWeight = 'normal';
  }
}
function underlineFun() {
  if (document.getElementById('underline-input').checked) {
    textAreaContent.style.textDecoration = 'underline';
  } else {
    textAreaContent.style.textDecoration = 'none';
  }
}
