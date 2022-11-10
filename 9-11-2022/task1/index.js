if(localStorage.getItem('personObj')){
    let perosnFormStorage = JSON.parse(localStorage.getItem('personObj')) ;
    
    document.getElementById('card').style.display = "block";
    document.getElementById('nameAfter').innerHTML = perosnFormStorage.name;
    document.getElementById('ageAfter').innerHTML = perosnFormStorage.age;
    document.getElementById('genderAfter').innerHTML = perosnFormStorage.gender;
    document.getElementById('descriptionAfter').innerHTML = perosnFormStorage.description;
    document.getElementById('majorAfter').innerHTML = perosnFormStorage.major;
    document.getElementById('preferdAfter').innerHTML = perosnFormStorage.languge;
    document.getElementById('nameAfter').innerHTML = perosnFormStorage.name;

}



function formSave(){
    
    

    let person = {};
    person.name = document.getElementById('name').value;
    person.age = document.getElementById('age').value;
    if(document.getElementById('mail').checked){
        person.gender = document.getElementById('mail').value;
    } else if(document.getElementById('femail').checked){
        person.gender = document.getElementById('femail').value;
    }

    person.description = document.getElementById('textareaD').value;
    person.major = document.getElementById('major').value;

    person.languge = "";
    if (document.getElementById('html').checked){
        person.languge += document.getElementById('html').value;
    }  if (document.getElementById('css').checked){
        person.languge += document.getElementById('css').value;
    }  if (document.getElementById('js').checked){
        person.languge += document.getElementById('js').value;
    }

    

    localStorage.setItem('personObj',JSON.stringify(person));
    let perosnFormStorage = JSON.parse(localStorage.getItem('personObj')) ;
    
    document.getElementById('card').style.display = "block";
    document.getElementById('nameAfter').innerHTML = perosnFormStorage.name;
    document.getElementById('ageAfter').innerHTML = perosnFormStorage.age;
    document.getElementById('genderAfter').innerHTML = perosnFormStorage.gender;
    document.getElementById('descriptionAfter').innerHTML = perosnFormStorage.description;
    document.getElementById('majorAfter').innerHTML = perosnFormStorage.major;
    document.getElementById('preferdAfter').innerHTML = perosnFormStorage.languge;
    document.getElementById('nameAfter').innerHTML = perosnFormStorage.name;
}

