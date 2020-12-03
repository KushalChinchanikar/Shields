var names;
var prices;
var quantities;
var flag=1;

window.addEventListener('load',()=> {
     total= localStorage.getItem('TOTAL');
     document.getElementById('show-total').innerHTML = total;
    var t= localStorage.getItem('T');
console.log(t);
if(t==0) flag=0; 
var i=0;
if(flag)
{
   while(t)
      {  
         names= localStorage.getItem('NAMES'+i);
         prices= localStorage.getItem('PRICES'+i);
         quantities= localStorage.getItem('QUANTITIES'+i);     
          document.getElementById('show-names'+i).innerHTML = names;
          document.getElementById('show-price'+i).innerHTML = prices;
          document.getElementById('show-quantity'+i).innerHTML = quantities;
          
          t--;
          i++;
      } 

}
      

    console.log("Program End Reached");
})

function myFunction()
{
   var element = document.body;
   element.classList.toggle("dark-mode");
}