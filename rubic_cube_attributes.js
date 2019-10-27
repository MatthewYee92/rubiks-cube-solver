var vertical_fixers = document.getElementsByClassName("fixer vertical");
var horizontal_fixers = document.getElementsByClassName("fixer horizontal");
var cube = document.getElementById("cube");
var colors = ["#ffffff", "#0000ff", "#ff8000", "#ff0000", "#00ff00", "#ffff00"];
var pads = Array.from(document.getElementsByClassName("color_pad"));

//Front,Right,Up,Down,Left,Back
var cube_pad_conf = [
    [0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,2],
    [3,3,3,3,3,3,3,3,3],
    [4,4,4,4,4,4,4,4,4],
    [5,5,5,5,5,5,5,5,5]];