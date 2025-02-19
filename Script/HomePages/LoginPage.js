function solve()
{
    let quan = document.querySelector(".options").value;
    console.log(quan);
    if(quan === "Jailer")
    {
        console.log(1);
        window.location.href="../Jailer/JailerHomePage.html";
    }
    if(quan === "Admin")
    {
        console.log(1);
        window.location.href="../Admin/AdminHomePage.html";
    }
    if(quan === "CBI")
    {
        console.log(1);
        window.location.href="../CBI/CBIHomePage.html";
    }
    if(quan === "Judges")
    {
        console.log(1);
        window.location.href="../Judge/JudgeHomePage.html";
    }
    if(quan === "Police")
    {
        console.log(1);
        window.location.href="../Police/PoliceHomePage.html";
    }
}