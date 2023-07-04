/*
    In this example, i am starting from the begening.
    I want to work with objects and i decided to create one object. It's goning to manage all steps
*/

const button = document.querySelector(".startBtn");
const resultArea = document.querySelector(".selected-numbers");
const htmlNumbersArea = document.querySelector("#numbers");


//////////////////////////////////
/*
    //
    // Also you can use this constructor for this example!
    //

    function Lotto(){
    this.oldNumbers = [];
    this.currentNumber = 0;
    this.turn = 0;
    this.drawLots = function(){
        
        if (this.turn < drawTimes)
        {          
            this.currentNumber = this.generateNumber();
            this.oldNumbers.push(this.currentNumber);
            this.markNumber();
            this.turn++;
        }
        
    };
    this.markNumber = function(){
        numbers.forEach(num => {
            if (num.textContent == this.currentNumber) {
                num.classList.add("selected");
            }
        });
        
    };
    this.unMarkNumbers = function(){
        numbers.forEach(num => {
            if (num.classList.contains("selected")) {
                num.classList.toggle("selected");
            }
        });
        
    };
    this.generateNumber = function () {
        let num = Math.round(Math.random() * (49) + 1);
        if (this.oldNumbers.includes(num)) {
            num = this.generateNumber();
        }

        return num;
    }
}
*/
//////////////////////////////////


function Lotto(){
    this.oldNumbers = [];
    this.currentNumber = 0;
    this.turn = 1;
    this.drawTimes = 6;
}


Lotto.prototype.startDraw = function () {
    
    this.currentNumber = this.generateNumber();
    this.oldNumbers.sort(function(a,b){return a-b;}).push(this.currentNumber);
    this.turn++;
    

};

Lotto.prototype.generateNumber = function () {
    let num = Math.round(Math.random() * (49) + 1);
    if (this.oldNumbers.includes(num)) {
        num = this.generateNumber();
    }

    return num;
}


Lotto.prototype.markTableNumber = function () {
    document.querySelectorAll(".number").forEach(num => {
        if (num.textContent == this.currentNumber) {
            num.classList.add("selected");
        }
    });

};

Lotto.prototype.unMarkNumbers = function () {
    document.querySelectorAll(".number").forEach(num => {
        if (num.classList.contains("selected")) {
            num.classList.toggle("selected");
        }
    });

};


button.addEventListener("click", (e) => {
    let role = e.target.getAttribute("role");

    switch (role) {
        case "refresh":
            resultArea.innerHTML = "";
            button.textContent = "Başlat";
            button.setAttribute("role", "start");
            lotto.unMarkNumbers();
            lotto = new Lotto();
            break;
        default:
            makeDrawLots();
            break;
    }
});

function makeDrawLots(){
    
    if (lotto.turn === lotto.drawTimes)
    {
        button.textContent = "Yeniden Başlat";
        button.setAttribute("role", "refresh");

    }

    lotto.startDraw();   
    lotto.markTableNumber();
    showResult(lotto.oldNumbers);
     

}

function showResult(items){
    if (items.length === 6)
    {
        let result = "";
        items.forEach(number => {
            result += "<span>" + number + "</span>";
        });

        resultArea.innerHTML = result;
    }
}




(function renderHtmlNumbers() {
    let numbers = "";
    for (let i = 1; i <= 49; i++) {
        numbers += `<span class="number">${i}</span>`;
    }
    htmlNumbersArea.innerHTML = numbers;
})();
let lotto = new Lotto();