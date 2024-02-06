
function einEvent (event) {
  this.text = "hi";
  alert("hi einEvent "+event);
}; 

function meinEvent(event){
  console.log("meinEvent aus index.js ",event);
  event.hidden=true;
}

window.addEventListener('DOMContentLoaded',  () => {
  const p = document.getElementById('mainheadline');
  console.log("index.js DOMContentLoaded wurde gestartet ...");
  //p.addEventListener("onClick",einEvent);
/*   p.addEventListener('onClick', (event) => {
    console.log(event.target.value);
    alert("test");
  }); */
  let e = document.getElementById('davor');
  meinEvent(e);
  e  = document.getElementById('danach');
  //meinEvent(e);
});

console.log("index.js");
