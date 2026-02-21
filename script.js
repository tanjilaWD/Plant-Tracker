let thrivingList = [];
let strugglingList = [];

let total = document.getElementById('total');
let thrivingCount = document.getElementById('thrivingCount');
let strugglingCount = document.getElementById('strugglingCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

function calculateCount(){
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;

};
calculateCount();

function toggleStyle(id){
   allFilterBtn.classList.remove('bg-black', 'text-white');
   thrivingFilterBtn.classList.remove('bg-black', 'text-white');
   strugglingFilterBtn.classList.remove('bg-black', 'text-white');

   allFilterBtn.classList.add('bg-gray-300', 'text-black');
   thrivingFilterBtn.classList.add('bg-gray-300', 'text-black');
   strugglingFilterBtn.classList.add('bg-gray-300', 'text-black');

   const selected = document.getElementById(id);
   selected.classList.remove('bg-gray-300', 'text-black');
   selected.classList.add('bg-black', 'text-white');
}

mainContainer.addEventListener('click', function(event){
    console.log(event.target.parentNode.parentNode);
});