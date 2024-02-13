
console.log("public index.js");

function meineFunktion(parameterHTMLElement,hide){
  console.log("meinFunktion aus index.js ",parameterHTMLElement,hide);
  if(hide){
    parameterHTMLElement.hidden=true;
  }else{
    parameterHTMLElement.addEventListener('onClick', (event) => {
      console.log(event.target.value);
      alert("test");
      parameterHTMLElement.hidden=true;
    });  
  }
}

window.addEventListener('DOMContentLoaded',  () => {
  console.log("public index.js DOMContentLoaded wurde gestartet ...");
  let e = document.getElementById('davor');
  meineFunktion(e,true);

  e  = document.getElementById('danach');
  // möchte ich später per Klick oder Funktionsaufruf selber steuern
  //meineFunktion(e,false); 
  meineFunktion(e,true);

  // sollte nur per Klick z.B. auf Welcome Componente ausgeblendet werden
  // geht ja nicht da diese noch nicht gerendert ist
  //e  = document.getElementById('mainheadline');
  //meineFunktion(e,true);
});

function einEvent (event,myalert=false,nextClickLogValue) {
  event = event || window.event;
  //this.text = "hi";
  //console.log("public index.js ",event.target, event.currentTarget.nodeName,this.nodeName);
  if(myalert) alert("hi einEvent return false");
  if(nextClickLogValue){
    //const et = document.querySelector(event.currentTarget.el);
    console.log(event.target);
    //et.addEventListener('onClick', (event,et) => {
      //console.log("neu angehängten click ",et,event.target.value);
      //event.currentTarget.hidden=true;
    //});
  }
  return false;
}; 
/* const p = document.getElementById('mainheadline');
p.addEventListener("onClick", (event) => {
  alert("hi einEvent "+event);
}); */
console.log("public index.js ende");
