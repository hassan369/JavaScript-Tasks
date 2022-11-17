async function getData(){
    const res = await fetch("https://www.breakingbadapi.com/api/characters");
    
    const data = await res.json();
    let select = document.getElementById('charecters');
    for(let i = 0; i<data.length; i++){
        document.getElementById("charecters").innerHTML += `<option value="${data[i].img}">${data[i].name}</option>`;
        // let opt = document.createElement('option');
        // opt.value = data[i].img;
        // opt.innerHTML = data[i].name;
        // select.appendChild(opt);

    }
}
getData();


function changeImg(){
    let selected = document.getElementById('charecters').value;
    document.getElementById('charImg').src = selected;
}

