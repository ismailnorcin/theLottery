const startButton = document.querySelector(".startBtn");
const refreshButton = document.querySelector(".refreshBtn");
const numbers = document.querySelectorAll(".number");
const resultArea = document.querySelector(".selected-numbers");

let drawTimes = 6;



startButton.addEventListener("click", function(){
drawTimes--;
    if (drawTimes >= 0)
    {
        let num = Math.round(Math.random() * (49) + 1); // this line has a bug. The number generated may have been generated before 
        
        numbers.forEach(function(number){
            if (Number(number.textContent) === num)
            {
                number.classList.add("selected");
            }
        });

        let currentResult = resultArea.innerHTML;
        let result = "<span>" + num + "</span>";
        resultArea.innerHTML = currentResult + result; 

        if (drawTimes === 0)
        {
            startButton.style.display = "none";
            refreshButton.style.display = "inline";
        }
    }

    
});

refreshButton.addEventListener("click", function(){
    drawTimes = 6;
    numbers.forEach(function (number) {
        if (number.classList.contains("selected")) {
            number.classList.toggle("selected");
        }
    });
    resultArea.innerHTML = "";
    startButton.style.display = "inline";
    refreshButton.style.display = "none";
});
