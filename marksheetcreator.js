function myfunction(name){
    var x=document.getElementById("name").innerHTML;
    x.value=x.value.topuppercase();
}

 function getpercentage(mark){
    
   
     let x=parseInt(document.getElementById("mark").pm.value);
     let y= parseInt(document.getElementById("mark").cm.value);
     let z= parseInt(document.getElementById("mark").mm.value);
     var t= parseInt(document.getElementById("mark").hm.value);
     var u= parseInt(document.getElementById("mark").em.value);
   
     var v;
     if(x<33 || y<33 || z < 33 || t<33 || u<33){
         alert("You are fail in this subject");
     }
  v=x+y+z+t+u;
     document.getElementById("mark").marks.value=v;
document.getElementById("mark").yp.value=(document.getElementById("mark").marks.value/5)+"%";
var w=(document.getElementById("mark").marks.value/5);
if(w>=80 && w<100)
document.getElementById("information").innerHTML="Your grade is A"
if(w>=70 && w<80)
document.getElementById("information").innerHTML="Your grade is B"
if(w>=50 && w<70)
document.getElementById("information").innerHTML="Your grade is C"

 }
 