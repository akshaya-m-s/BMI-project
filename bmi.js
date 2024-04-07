function calculate(){
    var weight=parseFloat(document.getElementById("first").value)
    parseFloat(document.getElementById("first").value="")
   
    var height=parseFloat(document.getElementById("second").value)
    parseFloat(document.getElementById("second").value="")

    var a=weight/(height*height);

   var bmi= a.toFixed(2) 

    console.log(bmi);
  
if( bmi<18.5){
    console.log("Underweight");
    var result=document.getElementById("result").innerHTML="Underweight"

}
else if(bmi>=18.6 && bmi<24.9){
    console.log(("Normal"));
    var result=document.getElementById("result").innerHTML="Normal"
}
else if(bmi>=25 && bmi<29.9){
    console.log("OverWeight");
    var result=document.getElementById("result").innerHTML="OverWeight"
}
else{
console.log("Obsity"); 
var result=document.getElementById("result").innerHTML="Obesity"     
}
bmi=result
var a= document.getElementById("result").innerHTML=`<b>${bmi}</b>`
   
}