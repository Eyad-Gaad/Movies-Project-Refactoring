import { comingSoonMovies , thisWeekMovies } from "./data.js";

document.addEventListener('DOMContentLoaded',()=>{
  // HTML DOM Elements Variables.
const navbar = document.getElementById('navbar');
const moviesLogo = document.getElementById('movies-logo');
const barrBtn= document.getElementById('bars-btn');
const navMenu= document.getElementById('nav-menu');
const signInBtn= document.getElementById('sign-in-btn');
const thisWeekContainer = document.getElementById('this-week-container');
const comingSoonContainer = document.getElementById('coming-soon-container');

// Display Movies After DOMContentLoaded.
displayMovies(thisWeekContainer,thisWeekMovies);
displayMovies(comingSoonContainer,comingSoonMovies);

// Even Delegation At Navbar Scroll.
window.addEventListener('scroll',()=>{
  navScrollEffect(navbar,moviesLogo,navMenu,barrBtn);
})

// Even Delegation At barrButn Click.
barrBtn.addEventListener('click',()=>{
  dropDownUpNavBar(navMenu,signInBtn);
  navScrollEffect(navbar,moviesLogo,navMenu,barrBtn)
})
})

// Display Movies Function.
function displayMovies(moviesContainer,movies){
  let temp = ``;
  movies.forEach(movie=>{
    temp+=`<div>
              <img src="${movie.movieImg}" alt="${movie.movieName}" class="w-full rounded-md cursor-pointer hover:-translate-y-4 duration-[0.4s] sm:h-80 md:h-70"/>
              <h3 class="text-common-color">${movie.movieName}</h3>
              <span>${movie.videoLength} min | ${movie.movieCategory}</span>
          </div>`;
  });
  moviesContainer.innerHTML=temp;
}

// Navabar Scroll Effect Function.
function navScrollEffect(navbar,moviesLogo,navMenu,barrBtn){
  let scrollYPosition = window.scrollY;
  if(scrollYPosition>0||navMenu.classList.contains('flex')){
    navbar.classList.add('bg-white');
    moviesLogo.classList.replace('text-white','text-black');
    navMenu.classList.replace('text-common-color','text-black');
    barrBtn.classList.replace('text-white','text-black');
  }
  else{
    navbar.classList.remove('bg-white');
    moviesLogo.classList.replace('text-black','text-white');
    navMenu.classList.replace('text-black','text-common-color');
    barrBtn.classList.replace('text-black','text-white');
  }
}

// Drop (Down/Up) Navbar Function.
function dropDownUpNavBar(navMenu,signInBtn){
  if(navMenu.classList.contains('hidden')){
    navMenu.classList.replace('hidden','flex');
    signInBtn.classList.replace('hidden','block');
  }
  else{
    navMenu.classList.replace('flex','hidden');
    signInBtn.classList.replace('block','hidden');
  }
}