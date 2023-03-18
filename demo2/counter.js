let count=0;

document.getElementById("b1").onclick = function()
{
    count-=1;
    document.getElementById("l4").innerHTML="Count is "+count;
}

document.getElementById("b2").onclick = function()
{
    count=0;
    document.getElementById("l4").innerHTML="Count is "+count;
}

document.getElementById("b3").onclick = function()
{
    count+=1;
    document.getElementById("l4").innerHTML="Count is "+count;
}