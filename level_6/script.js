/*
    Force Promise
*/

const button = document.querySelector(".startBtn");
const resultArea = document.querySelector(".selected-numbers");
const htmlNumbersArea = document.querySelector("#numbers");


class Lotto{
    constructor(){
        this.oldNumbers = [];
        this.currentNumber = 0;
        this.turn = 1;
        this.drawTimes = 6;
    }



    generateNumber = () => {
        let num = Math.round(Math.random() * (49) + 1);
        //console.log(self.oldNumbers);
        if (this.oldNumbers.includes(num)) {
            num = this.generateNumber();
        }

        return num;
    }

    markTableNumber () {
        document.querySelectorAll(".number").forEach(num => {
            if (num.textContent == this.currentNumber) {
                num.classList.add("selected");
            }
        });

    };

    unMarkNumbers () {
        document.querySelectorAll(".number").forEach(num => {
            if (num.classList.contains("selected")) {
                num.classList.toggle("selected");
            }
        });

    };

}




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

function makeDrawLots() {

    new Promise((response, error) => {
        response(lotto.generateNumber());
    }).then(number => {
        return lotto.currentNumber = number;
    }).then(number => {
        lotto.oldNumbers.push(number);
        lotto.oldNumbers.sort(function (a, b) { return a - b; });
    }).then(() => {
        lotto.turn++;
    }).then(() => {
        lotto.markTableNumber();
    }).then(() => {
        showResult(lotto.oldNumbers);
    });
    
    if (lotto.turn === lotto.drawTimes)
    {
        button.textContent = "Yeniden Başlat";
        button.setAttribute("role", "refresh");
    }


}

function showResult(items) {
    if (items.length === 6) {
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