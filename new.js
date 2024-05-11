// let array = 53;
// let sum =0;
// while(array>0){
//     let num = array%10;
//     sum = sum + num;
//     array = parseInt(array/10);
// }
// console.log(sum);




function phonebook(Name, contact, address, email){
    return{

    };             
}


function addContact(name, phoneNumber, email) {
    phonebook[name] = { phoneNumber, email };
    console.log (name + " " + "added to the phone book.");
}


 function searchContact(name) {
     if (phonebook[name]) {
        console.log("Name: " + name);
        console.log ("PhoneNumber: " + phonebook[name].phoneNumber);
        console.log("Email: " + phonebook[name].email);
    } else {
        console.log (name + " "  + "not found in the phone book.");
    }
 }
 

 function updateContact(name, newPhoneNumber, newEmail) {
     if (phonebook[name]) {
         phonebook[name].phoneNumber = newPhoneNumber;
         phonebook[name].email = newEmail;
         console.log (name + " " + " contact information updated.");
     } else {
        console.log (name + " " + "not found in the phone book.");
     }
 }


 function deleteContact(name) {
     if (phonebook[name]) {
         delete phonebook[name];
         console.log(name + " " + " contact deleted from the phone book.");
     } else {
         console.log(name + " " + "not found in the phone book.");
     }
 }

 


 addContact("Mahima", "5683497292", "mahi@awasthi.com");
 searchContact("Mahima");
 updateContact("Mahima", "9932505688", "mahi.ma@navgurukul.com");
 searchContact("Mahima");
 deleteContact("Mahima");
 searchContact("Mahima");

addContact("Sushmita","5687698675675","gliuhyfy");
updateContact("Sushmita", "598367983709","jhhgoehg");
deleteContact("Sushmita");
searchContact("Sushmita");



 


