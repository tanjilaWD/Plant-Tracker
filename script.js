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
const filterSection = document.getElementById('filtered-section');

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

   if(id == 'thriving-filter-btn' ){
     allCardSection.classList.add('hidden');
     filterSection.classList.remove('hidden')
   } else if(id == 'all-filter-btn'){
    allCardSection.classList.remove('hidden');
    filterSection.classList.add('hidden');
   } else if(id == 'struggling-filter-btn'){
    allCardSection.classList.add('hidden');
    filterSection.classList.remove('hidden');
    
   }
}

mainContainer.addEventListener('click', function(event){

   if(event.target.classList.contains('thrivig-btn')){
     const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector('.plantName').innerText;
    const latinName = parentNode.querySelector('.latinName').innerText;
    const light = parentNode.querySelector('.light');
    const water = parentNode.querySelector('.water');
    const status = parentNode.querySelector('.status');
    const notes = parentNode.querySelector('.notes');
     parentNode.querySelector('.status').innerText = 'Thrive';
    

    const cardInfo = {
        plantName,
        latinName,
        light,
        water,
        status : 'Thrive',
        notes
    }
   
    const planExist = thrivingList.find(item => item.plantName == cardInfo.plantName);

   
    if(!planExist){
        thrivingList.push(cardInfo);
    }
    calculateCount();
   renderThriving();
   } else if(event.target.classList.contains('struggling-btn')){
     const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector('.plantName').innerText;
    const latinName = parentNode.querySelector('.latinName').innerText;
    const light = parentNode.querySelector('.light');
    const water = parentNode.querySelector('.water');
    const status = parentNode.querySelector('.status');
    const notes = parentNode.querySelector('.notes');
     parentNode.querySelector('.status').innerText = 'Struggle';
    

    const cardInfo = {
        plantName,
        latinName,
        light,
        water,
        status : 'Struggle',
        notes
    }
   
    const planExist = strugglingList.find(item => item.plantName == cardInfo.plantName);

   
    if(!planExist){
        strugglingList.push(cardInfo);
    }
    calculateCount();
   renderStruggle()
   }
});

function renderThriving(){
   filterSection.innerHTML = '';
   for(let thrive of thrivingList){
    console.log(thrive);
    let div = document.createElement('div');
    div.innerHTML = `
     <div class="space-y-6">
           <div>
            <p class="plantName text-4xl">${thrive.plantName}</p>
            <p class="latinName">Latin Name</p>
           </div>
           
           <div class="flex gap-2">
            <p class="light bg-gray-200 px-5">Bright Indicate</p>
            <p class="water bg-gray-200 px-5">Weekly</p>
           </div>
           <p class="status">${thrive.status}</p>
           <p class="notes">New leaf unfurling by the east window.</p>

           <div class="flex gap-5">
            <button class="thrivig-btn bg-green-200 px-4 py-2">Thrive</button>
            <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
           </div>
        </div>

        <div>
          <button class="delete-btn bg-red-200 text-red-600 px-4 py-2">Delete</button> 
        </div>
    
    `
    filterSection.appendChild(div);
   }
}
function renderStruggle(){
   filterSection.innerHTML = '';
   for(let struggle of strugglingList){
    console.log(struggle);
    let div = document.createElement('div');
    div.innerHTML = `
     <div class="space-y-6">
           <div>
            <p class="plantName text-4xl">${struggle.plantName}</p>
            <p class="latinName">Latin Name</p>
           </div>
           
           <div class="flex gap-2">
            <p class="light bg-gray-200 px-5">Bright Indicate</p>
            <p class="water bg-gray-200 px-5">Weekly</p>
           </div>
           <p class="status">${struggle.status}</p>
           <p class="notes">New leaf unfurling by the east window.</p>

           <div class="flex gap-5">
            <button class="thrivig-btn bg-green-200 px-4 py-2">Thrive</button>
            <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
           </div>
        </div>

        <div>
          <button class="delete-btn bg-red-200 text-red-600 px-4 py-2">Delete</button> 
        </div>
    
    `
    filterSection.appendChild(div);
   }
}