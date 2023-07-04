/*
    Before this level, all the selected numbers was placing after selection. So the result line was not ordering the numbers.
    Now lets's try to reorder the result line
*/


const startButton = document.querySelector(".startBtn");
const refreshButton = document.querySelector(".refreshBtn");
const htmlNumbers = document.querySelectorAll(".number");
const resultArea = document.querySelector(".selected-numbers");

let drawTimes = 6;
let selectedNumbers = [];

let numbersPool = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49
]


startButton.addEventListener("click", function(){

    drawTimes--;
    if (drawTimes >= 0)
    {
        let num = numbersPool[Math.floor(Math.random() * numbersPool.length)];        
        let index = numbersPool.indexOf(num);
        selectedNumbers.push(num);
        selectedNumbers.sort(function (a, b) { return a - b });
        numbersPool.splice(index,1);
        
        
        htmlNumbers.forEach(function(number){
            if (Number(number.textContent) === num)
            {
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
    htmlNumbers.forEach(function (number) {
        if (number.classList.contains("selected")) {
            number.classList.toggle("selected");
        }
    });
    resultArea.innerHTML = "";
    startButton.style.display = "inline";
    refreshButton.style.display = "none";
});
