'use strict';
const elem=document.querySelector('.dice')
const btn=document.querySelector('.btn--roll')
const current_scoreEL0=document.getElementById('current--0')
const current_scoreEL1=document.getElementById('current--1')
const btn2=document.querySelector('.btn--hold')

const player0=document.querySelector('.player--0')
const player1=document.querySelector('.player--1')

let scores=[0,0]
let cs=0;
let turn=0;


btn.addEventListener('click',function(){

  
         let random_num=Math.trunc(Math.random()*6)+1
    elem.src=`dice-${random_num}.png`
if(random_num>1){
cs=cs+random_num;

   let display_cs=document.getElementById(`current--${turn}`)

   display_cs.textContent=cs
}
    else{
        cs=0
  let display_cs=document.getElementById(`current--${turn}`)

   display_cs.textContent=cs
    if(turn===0){
            player0.classList.remove('player--active')
            player1.classList.add('player--active')
    }
        else{
             player0.classList.add('player--active')
                       player1.classList.remove('player--active')
        }
        turn=turn===0?1:0;
       


    }

  

    

})

btn2.addEventListener('click',function(){
scores[turn]=scores[turn]+cs;
console.log(scores[turn])
document.getElementById(`score--${turn}`).textContent=scores[turn]


 

         if(scores[turn]>20){
             document.querySelector(`.player--${turn}`).classList.add('player--winner')
              document.querySelector(`.player--${turn}`).classList.remove('player--active')
         }
          let display_cs=document.getElementById(`current--${turn}`)

   display_cs.textContent=0
   cs=0
    if(turn===0){
            player0.classList.remove('player--active')
            player1.classList.add('player--active')
    }
        else{
             player0.classList.add('player--active')
                       player1.classList.remove('player--active')
        }
         turn=turn===0?1:0;

})
    
