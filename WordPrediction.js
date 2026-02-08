let scr=0;
let tf=[0,0,0,0,0];
let startgame = false;
let letters =["N","n","Y","y","m","M","P","p","h","H"];
let tg=0;


function a(){
  if(!startgame){
    document.getElementById("Reset").style.display = "inline-block";
    startgame = true;
  }
  let inp= document.getElementById("input").value;
  let a=inp.length;
  if (a==2 || a==3 || a==4){
    alert("You Lost!.Enter 1 digit for letter or 5 digits for word");
    document.getElementById("submit").disabled = true;
  }else if (inp == "n" || inp== "N"){
    if(tf[0]==0){
      document.getElementById("N").src = "N.svg";
      scr += 20;
      tf[0]=1;
    }
    else{
      alert("enter different letter");
    }
 }
  else if (inp == "y" || inp == "Y"){
    if(tf[1]==0){
      document.getElementById("Y").src = "Y.svg";

      scr += 20;
      tf[1]=1;
    }else{
      alert("enter different letter");
    }
}
  
  else if (inp == "m" || inp == "M"){
    if(tf[2]==0){
      document.getElementById("M").src = "M.svg";
      scr += 20;
      tf[2]=1;
    }
    else{
      alert("enter different letter");
    }
  }
  
  else if (inp == "p" || inp == "P"){
    if(tf[3]==0){
      document.getElementById("P").src = "P.svg";
      scr += 20;
      tf[3]=1;
    }
    else{
      alert("enter different letter");}
    }
  else if (inp == "h" || inp == "H"){
    if(tf[4]==0){
      document.getElementById("H").src = "H.svg";
      scr += 20;
      tf[4]=1;
    }
    else{
      alert("enter different letter");
    }
}
  
  else if (inp == "nymph"){
    document.getElementById("N").src = "N.svg";
    document.getElementById("Y").src = "Y.svg";
    document.getElementById("M").src = "M.svg";
    document.getElementById("P").src = "P.svg";
    document.getElementById("H").src = "H.svg";
    scr = 100;
   let pred = inp.toUpperCase();
  }
  else if(a==5 && inp!= "nymph"){
    alert("YOU LOST! Please press the Reset the Game button to play again");
    document.getElementById("submit").disabled = true;
  }
    else if(!letters.includes(inp))
      { 
          if(tg==0){
        document.getElementById("live3").style.visibility = "hidden"; 
       tg=1; 
      }   
        else if(tg==1){
        document.getElementById("live2").style.visibility = "hidden";
        tg=2;
      }
        else if(tg==2){
          document.getElementById("live1").style.visibility = "hidden";
          tg=3;
        }

    }
  
   if (scr == 100) {
    document.getElementById("scorenumber").textContent = scr;
    setTimeout(function() {
      alert("YOU WON! CONGRATS! If you want to play again, please click on the Reset The Game button");
    }, 600);
    document.getElementById("submit").disabled = true;
  }
  document.getElementById("scorenumber").textContent = scr;
  
  if(tg==3) {
    setTimeout(function(){
    alert("YOU LOST! Please press the Reset the Game button to play again");
     },400);
     document.getElementById("submit").disabled = true;
   }
}
  
     
  function resetgame() {
    scr= 0;
    tf = [0,0,0,0,0];
    tg = 0;
    startgame= false;

    document.getElementById("scorenumber").textContent = scr;
    document.getElementById("Reset").style.display = "none";
    document.getElementById("input").value = "";
    ["N", "Y", "M", "P", "H"].forEach(a => {document.getElementById(a).src = "X.svg";});
    document.getElementById("live1").style.visibility = "visible";
    document.getElementById("live2").style.visibility = "visible";
    document.getElementById("live3").style.visibility = "visible";
    document.getElementById("submit").disabled = false;
  }

