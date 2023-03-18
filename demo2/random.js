// let x=Math.floor(Math.random()*6+1);
// let y=Math.floor(Math.random()*6);
// let z=Math.floor(Math.random()*6);

// console.log(x);
// console.log(y);
// console.log(z);

document.getElementById("b1").onclick = function()
{
    let x=Math.floor(Math.random()*6+1);    //or wite 7
    let y=Math.floor(Math.random()*7);
    let z=Math.floor(Math.random()*7);


    document.getElementById("i1").innerHTML="Dice 1:- "+x;
    document.getElementById("i2").innerHTML="Dice 2:- "+y;
    document.getElementById("i3").innerHTML="Dice 3:- "+z;
}