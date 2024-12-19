let contains = document.getElementById("maincontain");
let baruundeed = document.createElement("button");
baruundeed.id = "right-top";
baruundeed.key = "4";
let zuundeed = document.createElement("button");
zuundeed.id = "left-top";
zuundeed.key = "3";
let baruundood = document.createElement("button");
baruundood.id = "right-bottom";
baruundood.key = "2";
let zuundood = document.createElement("button");
zuundood.id = "left-bottom";
zuundood.key = "1";
// const buttonArray = [baruundeed, zuundeed, zuundood, baruundood];
const baruundeed1 = document
  .getElementById("maincontain")
  .appendChild(baruundeed);
document.getElementById("maincontain").appendChild(zuundeed);
document.getElementById("maincontain").appendChild(baruundood);
document.getElementById("maincontain").appendChild(zuundood);
zuundeed.className = "block";
zuundood.className = "block";
baruundeed.className = "block";
baruundood.className = "block";
let block1 = document.querySelector(".block");
let golToirog = document.createElement("div");
golToirog.id = "midCircle";
document.getElementById("maincontain").appendChild(golToirog);
let midCircle_garchig = document.createElement("h2");
midCircle_garchig.id = "midCircle_garchig";
midCircle_garchig.innerHTML = "simon";
let midCircle_dund = document.createElement("button");
midCircle_dund.id = "midCircle_dund";
midCircle_dund.innerHTML = "start";
let midCircle_dood = document.createElement("div");
midCircle_dood.id = "midCircle_dood";

document.getElementById("midCircle").appendChild(midCircle_garchig);
document.getElementById("midCircle").appendChild(midCircle_dund);
document.getElementById("midCircle").appendChild(midCircle_dood);

const buttonArray = [baruundeed, zuundeed, zuundood, baruundood];



let random = [];
let current = 0;
let previous=[];
let start=false;
let x=1;
let counter=[]



midCircle_dund.addEventListener("click", startFunction);




function startFunction() {
  // let counter=[];
  midCircle_dood.innerHTML = x++;
  let randomToo = Math.floor(Math.random() * 4) + 1;
  current = randomToo;
  // turnOnColor(current);
  random.push(randomToo);
  console.log(random);
  
  for(i=0 ; i<random.length ; i++ ){
    setTimeout(turnOnColor(random[i]), 2000);  
}



}
function turnOnColor(randomToo) {
  if (randomToo === 4) {
    document.getElementById("right-top").style.animation = "ajillah4 1s linear";
    setTimeout(() => {
      document.getElementById("right-top").style.removeProperty("animation");
    }, 1000);
  } else if (randomToo === 3) {
    document.getElementById("left-top").style.animation = "ajillah3 1s linear";
    setTimeout(() => {
      document.getElementById("left-top").style.removeProperty("animation");
    }, 1000);
  } else if (randomToo === 2) {
    document.getElementById("right-bottom").style.animation =
      "ajillah2 1s linear";
    setTimeout(() => {
      document.getElementById("right-bottom").style.removeProperty("animation");
    }, 1000);
  } else if (randomToo === 1) {
    document.getElementById("left-bottom").style.animation =
      "ajillah1 1s linear";
    setTimeout(() => {
      document.getElementById("left-bottom").style.removeProperty("animation");
    }, 1000);
  }
}


buttonArray.forEach((value) => {
  function buttonClick() {
    let gg;
    gg=Number(value.key)
    counter.push(gg)
    let t=0
    if(counter.length === random.length+" "){
      alert("win")
    } else{
      if (counter[t] === random[random.length - 1]) {
        counter.push(gg);
        startFunction()
        console.log(counter);
        console.log(random);  
      }
      else {
        alert("buruu towch darlaa")
      }

    }
  }





// buttonArray.forEach((value, index) => {
//   function buttonClick() {
//     let buttoncheck1=Number(value.key)
//     counter.push(buttoncheck1)
//     if(counter.length===random.length){
//       startFunction()
//     } 
//     else{
//       let i=0
//       if (counter[i] === random[i]) {
//         i++;
//         counter.push(buttoncheck1);
//         buttonClick()
//       }
//       else {
//         alert("buruu towch darlaa")
//       }
//     }
//   }

  value.addEventListener("click", buttonClick);
});