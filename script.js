
let menu__list = document.querySelector(".menu__list");
let logo = document.querySelector(".logo");
let burger = document.querySelector(".menu-burger");
let main = document.querySelector(".main");

burger.onclick = function(){
  
    logo.classList.toggle("open");
    menu__list.classList.toggle("open");
    burger.classList.toggle("open");
    if(burger.classList.contains("open")){
    document.body.style.overflow="hidden";
    }
        else{
        document.body.style.overflow= "auto";
     }
  }

  



  // for(let i=0; i<cards.length; i++){
  // console.log(cards[i]);
  // }

  // let cars = ["mazda","LAda"]

  // for( let card of cards){
  //   console.log(card);
  // }



      let cards = document.querySelectorAll('.card');

      cards.forEach(item=>{

      });

      const user = {
        name:"Vasya",
        age:50,
        state:"California",
        ShowFullName:function(){
            console.log(`Мое имя ${this.name}, мой возраст: ${this.age} `)
        },
        
      }

      user.age=100;
      user.ShowFullName();
      user.leftorright = "left";
      
      console.log(user)

      
   

  









// const logo = document.querySelector(".logo");
// const menu__list = document.querySelector(".menu__list");
// const menu_burger = document.querySelector(".menu-burger");
// let menu = document.querySelector(".menu");




// menu_burger.addEventListener('click',function(e){
//     e.stopPropagation();
//     menu__list.classList.toggle("open");
//     logo.classList.toggle("open");
//     menu_burger.classList.toggle("open");
   
// });
// document.body.addEventListener("click",function(e){
//     if(e.target!==menu_burger && e.target!==menu__list && e.target!==menu ){
//         menu__list.classList.remove("open");
//         logo.classList.remove("open");
//         menu_burger.classList.remove("open");
       
//     }
// });

















// let isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },  BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     }, iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     }, Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     }, Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     }, any: function () {
//         return ( isMobile.Android()
//                 || isMobile.BlackBerry()
//                 || isMobile.iOS()
//                 || isMobile.Opera()
//                 || isMobile.Windows());
//     }};

















// let age = prompt("Сколько Вам лет?", 13);

// if (age < 18) {

//   function welcome() {
//     alert("Привет!");
//   }
  
// } else {

//     function welcome() {
//     alert("Здравствуйте!");
//   }
//  }
// welcome();

