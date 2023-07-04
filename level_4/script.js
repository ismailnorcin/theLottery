/*
    Now, i want to empty the html number contents and i am going to try to create and push all numbers in javascript
*/


const startButton = document.querySelector(".startBtn");
const refreshButton = document.querySelector(".refreshBtn");
const resultArea = document.querySelector(".selected-numbers");
const htmlNumbersArea = document.querySelector("#numbers");

let drawTimes = 6;
let selectedNumbers = [];

let numbersPool = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49
]

renderHtmlNumbers();
function renderHtmlNumbers(){
    let numbers = "";
    for (let i = 1; i <= 49; i++)
    {
        numbers += `<span class="number">${i}</span>`;
    }
    htmlNumbersArea.innerHTML = numbers;
}


startButton.addEventListener("click", function(){

    drawTimes--;
    if (drawTimes >= 0)
    {
        let num = numbersPool[Math.floor(Math.random() * numbersPool.length)];        
        let index = numbersPool.indexOf(num);
        selectedNumbers.push(num);
        selectedNumbers.sort(function (a, b) { return a - b });
        numbersPool.splice(index,1);
        
        
        document.querySelectorAll(".number").forEach(function (number) {
            if (Number(number.textContent) === num) {
                number.classList.add("selected");
            }
        });

        
        console.log(selectedNumbers);
        let result = "";
        selectedNumbers.forEach(function (selectedNumber){
            result += "<span>" + selectedNumber + "</span>";
        });

        resultArea.innerHTML = result; 

        if (drawTimes === 0) {
            startButton.style.display = "none";
            refreshButton.style.display = "inline";
        }
    }

});

refreshButton.addEventListener("click", function(){
    drawTimes = 6;
    selectedNumbers = [];
    htmlNumbersArea.innerHTML = "";
    resultArea.innerHTML = "";
    startButton.style.display = "inline";
    refreshButton.style.display = "none";
    renderHtmlNumbers();
});
