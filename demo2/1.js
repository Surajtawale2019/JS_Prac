let a,b,c;

// window.prompt("Enter Value Of A :- ");
// a=Number(a);
// window.prompt("Enter Value Of B :- ");
// b=Number(b);

// c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// console.log("Side C :- ", c);

document.getElementById("btn").onclick = function()
{

    a=document.getElementById("i1").value;
    a=Number(a);

    b=document.getElementById("i2").value;
    b=Number(b);

    c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("l3").innerHTML=c;

}