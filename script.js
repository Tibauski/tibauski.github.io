// Dit kon waarschijnlijk beter geschreven worden, maarja het werkt :)
var vid = document.getElementById("myVideo"); 
var c1 = new Audio('./notes/c3.mp3');
var d1 = new Audio('./notes/d3.mp3');
var e1 = new Audio('./notes/e3.mp3');
var f1 = new Audio('./notes/f3.mp3');
var g1 = new Audio('./notes/g3.mp3');
var a1 = new Audio('./notes/a4.mp3');
var b1 = new Audio('./notes/b3.mp3');

var c2 = new Audio('./notes/c4.mp3');
var d2 = new Audio('./notes/lick.mp3');
var e2 = new Audio('./notes/e4.mp3');
var f2 = new Audio('./notes/f4.mp3');
var g2 = new Audio('./notes/g4.mp3');
// var a2 = new Audio('./notes/a3.mp3');
var b2 = new Audio('./notes/b5.mp3');

function onC1() {
    var x = document.getElementById("vraag1");
    x.style.display = "block";
}
function offC1() {
    var x = document.getElementById("vraag1");
    x.style.display = "none";
}
function onD1() {
    var x = document.getElementById("vraag2");
    x.style.display = "block";
}
function offD1() {
    var x = document.getElementById("vraag2");
    x.style.display = "none";
}
function onE1() {
    var x = document.getElementById("vraag3");
    x.style.display = "block";
}
function offE1() {
    var x = document.getElementById("vraag3");
    x.style.display = "none";
}
function onF1() {
    var x = document.getElementById("vraag4");
    x.style.display = "block";
}
function offF1() {
    var x = document.getElementById("vraag4");
    x.style.display = "none";
}
function onG1() {
    var x = document.getElementById("vraag5");
    x.style.display = "block";
}
function offG1() {
    var x = document.getElementById("vraag5");
    x.style.display = "none";
}
function onA1() {
    var x = document.getElementById("vraag6");
    x.style.display = "block";
}
function offA1() {
    var x = document.getElementById("vraag6");
    x.style.display = "none";
}
function onB1() {
    var x = document.getElementById("vraag7");
    x.style.display = "block";
}
function offB1() {
    var x = document.getElementById("vraag7");
    x.style.display = "none";
}

//Octaaf 2
function onC2() {
    var x = document.getElementById("vraag8");
    x.style.display = "block";
}
function offC2() {
    var x = document.getElementById("vraag8");
    x.style.display = "none";
}
function onD2() {
    var x = document.getElementById("vraag9");
    x.style.display = "block";
}
function offD2() {
    var x = document.getElementById("vraag9");
    x.style.display = "none";
}
function onE2() {
    var x = document.getElementById("vraag10");
    x.style.display = "block";
}
function offE2() {
    var x = document.getElementById("vraag10");
    x.style.display = "none";
}
function onF2() {
    var x = document.getElementById("vraag11");
    x.style.display = "block";
}
function offF2() {
    var x = document.getElementById("vraag11");
    x.style.display = "none";
}
function onG2() {
    var x = document.getElementById("vraag12");
    x.style.display = "block";
}
function offG2() {
    var x = document.getElementById("vraag12");
    x.style.display = "none";
}
function onA2() {
    var x = document.getElementById("vraag13");
    // x.style.cursor = "ns-resize";
    x.style.display = "block";
    
}
function offA2() {
    var x = document.getElementById("vraag13");
    
    x.style.display = "none";
    
}

function playvideo(){
    if( vid.paused ) {
        vid.play();
    }
    else {
        vid.pause();
    }
}
function onB2() {
    var x = document.getElementById("vraag14");
    x.style.display = "block";
}
function offB2() {
    var x = document.getElementById("vraag14");
    x.style.display = "none";
}
//piano geluiden
function playC1(){
    c1.play();
}

function playD1(){
    d1.play();
}

function playE1(){
    e1.play();
}

function playF1(){
    f1.play();
}
function playG1(){
    g1.play();
}

function playA1(){
    a1.play();
}
function playB1(){
    b1.play();
}

//ocataf 2
function playC2(){
    c2.play();
}
function playD2(){
    d2.play();
}
function playE2(){
    e2.play();
}

function playF2(){
    f2.play();
}
function playG2(){
    g2.play();
}

function playA2(){
    a2.play();
}
function playB2(){
    b2.play();
}