
const check1=document.getElementById("check").checked==true;

document.getElementById("i1").onclick =function()
{
    if(check1)
    {
        console.log("You Are Ausscribe");
    }
    else
    {
        console.log("You Are not Ausscribe");
    }
}