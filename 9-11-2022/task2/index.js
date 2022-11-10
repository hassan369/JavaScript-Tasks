
if(sessionStorage.getItem('subjectObj')){
    let subjectFromStorage = JSON.parse(sessionStorage.getItem('subjectObj')) ;
    
    document.getElementById('card').style.display = "block";

    document.getElementById('subjectAfter').innerHTML = subjectFromStorage.subject;
    document.getElementById('descriptionAfter').innerHTML = subjectFromStorage.description;
    document.getElementById('userAfter').innerHTML = subjectFromStorage.user;
    document.getElementById('technologyAfter').innerHTML = subjectFromStorage.technology;

}




function formSave(){
    
    

    let person = {};
    person.subject = document.getElementById('subject').value;
    
    

    person.description = document.getElementById('textareaD').value;
    

    person.user = "";
    if (document.getElementById('admin').checked){
        person.user += document.getElementById('admin').value;
    }  if (document.getElementById('visitor').checked){
        person.user += document.getElementById('visitor').value;
    }  if (document.getElementById('loged').checked){
        person.user += document.getElementById('loged').value;
    }


    person.technology = "";
    if (document.getElementById('html').checked){
        person.technology += document.getElementById('html').value;
    }  if (document.getElementById('css').checked){
        person.technology += document.getElementById('css').value;
    }  if (document.getElementById('js').checked){
        person.technology += document.getElementById('js').value;
    }

    

    sessionStorage.setItem('subjectObj',JSON.stringify(person));
    let subjectFromStorage = JSON.parse(sessionStorage.getItem('subjectObj')) ;
    
    document.getElementById('card').style.display = "block";

    document.getElementById('subjectAfter').innerHTML = subjectFromStorage.subject;
    document.getElementById('descriptionAfter').innerHTML = subjectFromStorage.description;
    document.getElementById('userAfter').innerHTML = subjectFromStorage.user;
    document.getElementById('technologyAfter').innerHTML = subjectFromStorage.technology;
   
}

