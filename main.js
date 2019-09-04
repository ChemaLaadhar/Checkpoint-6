
function bld() {
    var a = document.getElementById("textarea");
    if (a.style.fontWeight != "bold") { a.style.fontWeight = "bold"; }
    else { a.style.fontWeight = "normal"; }
}

function itlic() {
    var a = document.getElementById("textarea");
    if (a.style.fontStyle != "italic") { a.style.fontStyle = "italic"; }
    else { a.style.fontStyle = "normal"; }
}
function undrline() {
    var a = document.getElementById("textarea");
    if (a.style.textDecoration == "underline") { a.style.textDecoration = "none"; }
    else { a.style.textDecoration = "underline"; }
}

function fntes() {
    var a = document.getElementById("textarea");
    var b = document.getElementById("fontss").value;

    a.style.fontSize = b;
}
function fontf() {
    var a = document.getElementById("textarea");
    var b = document.getElementById("fontff").value;
    a.style.fontFamily = b;
}
$(document).ready(function () {
    $(".container-fluid .row .col-lg-4").hover(function () {
        $(this).fadeTo("opacity", 0.5);
        $(this).find("button").fadeTo("opacity", 1);
    },
        function () {
            $(this).fadeTo("opacity", 1);
            $(this).find("button").fadeTo("opacity", 0);
        })
});
var firebaseConfig = {
    apiKey: "AIzaSyCn6NML79wgBEMRYMw270o3RaBKutquN4I",
    authDomain: "gomycode-web-dev-level-1.firebaseapp.com",
    databaseURL: "https://gomycode-web-dev-level-1.firebaseio.com",
    projectId: "gomycode-web-dev-level-1",
    storageBucket: "",
    messagingSenderId: "514589270179",
    appId: "1:514589270179:web:1a3b1f6a5ed11ea0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var messageRef = firebase.database().ref('MyDataBase');
function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("exampleFormControlInput1").value;
    var select = document.getElementById("exampleFormControlSelect1").value;
    var email = document.getElementById("exampleFormControlInput2").value;
    var phonenumber = document.getElementById("exampleFormControlInput3").value;
    saveMessage(name, select, email, phonenumber);
}
document.getElementById("contactForm").addEventListener('submit', submitForm);
function saveMessage(name, select, email, phonenumber)
{
    var NewMessageRef = messageRef.push();
    NewMessageRef.set(
        {
            name: name,
            select: select,
            email: email,
            phonenumber: phonenumber
        })
        console.log("sent")
}