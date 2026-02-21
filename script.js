let thrivingList = [];
let strugglingList = [];

let total = document.getElementById('total');
let thrivingCount = document.getElementById('thrivingCount');
let strugglingCount = document.getElementById('strugglingCount');

const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');

function calculateCount(){
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;

};
calculateCount();

function toggleStyle(id){
    console.log('click');
}