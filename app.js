var contactList = [];

class Contact {
  constructor(name, number, address) {
    this.name = name;
    this.number = number;
    this.address = address;
  }
}

contactList.push(new Contact("Pikachu", "253-222-3333", "12345 SE 123th PL, Seattle WA 98121"));
contactList.push(new Contact("Jigglypuff", "253-222-3334", "12346 SE 123th PL, Seattle WA 98121"));
contactList.push(new Contact("Squirtle", "253-222-3335", "12347 SE 123th PL, Seattle WA 98121"));
contactList.push(new Contact("Pidgey", "253-222-3336", "12348 SE 123th PL, Seattle WA 98121"));


function display(editMode=false, editNumber=null) {
  var htmlContact = "";
  for(var i = 0; i<contactList.length; i++){
    htmlContact += `<tr>`
    if(editMode&&editNumber==i){
      htmlContact += `<td><input type="text" id="editName" value="${contactList[i].name}"></td>`
      htmlContact += `<td><input type="text" id="editNumber" value="${contactList[i].number}"></td>`
      htmlContact += `<td><input type="text" id="editAddress" value="${contactList[i].address}"></td>`
      htmlContact += `<td><button class="btn btn-success" onclick="save(${i})">Save`
    }
    else{
      htmlContact += `<td>${contactList[i].name}</td>`
      htmlContact += `<td>${contactList[i].number}</td>`
      htmlContact += `<td>${contactList[i].address}</td>`
      htmlContact += `<td><button class="btn btn-info" onclick="edit(${i})">Edit`
    }
    htmlContact += `<button class="btn btn-danger" onclick="remove(${i})">X</td>`
    htmlContact += '</tr>'
  }
  document.getElementById('contactList').innerHTML=htmlContact;
}

function addContact() {
  var newName=document.getElementById('name').value;
  var newNumber=document.getElementById('number').value;
  var newAddress=document.getElementById('address').value;
  if(newName){
      contactList.push(new Contact(newName,newNumber,newAddress));
  }
  clear();
  display();
}

function save(i) {
  contactList[i].name=document.getElementById('editName').value;
  contactList[i].number=document.getElementById('editNumber').value;
  contactList[i].address=document.getElementById('editAddress').value;
  display();
}

function clear(){
  document.getElementById('name').value="";
  document.getElementById('number').value="";
  document.getElementById('address').value="";
}

function remove(i) {
  contactList.splice(i,1);
  display();
}

function edit(i){
  display(true,i);
}

display();
