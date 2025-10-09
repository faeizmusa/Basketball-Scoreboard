let homeScore=document.getElementById("home-score");
let guestScore=document.getElementById("guest-score");

let homeCount=0;
let guestCount=0;

homeScore.textContent=homeCount;
guestScore.textContent=guestCount;

let oneHome=()=>{
   homeScore.textContent=homeCount+=1;
}

let twoHome=()=>{
   homeScore.textContent=homeCount+=2;
}

let threeHome=()=>{
   homeScore.textContent=homeCount+=3;
}

let oneGuest=()=>{
   guestScore.textContent=guestCount+=1;
}

let twoGuest=()=>{
   guestScore.textContent=guestCount+=2;
}

let threeGuest=()=>{
   guestScore.textContent=guestCount+=3;
}

let reset=()=>{
homeCount=0;
guestCount=0;

homeScore.textContent=homeCount;
guestScore.textContent=guestCount;
}