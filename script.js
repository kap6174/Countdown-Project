var countInterval;


function startCounter() {

    var number = parseInt(document.getElementById("number").value);
    console.log(number)

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelector(".counter .current");
    var nextNo = document.querySelector(".counter .next");
    var count = 0;

    currentNo.innerText = number;
    console.log(currentNo)
    nextNo.innerText = number-1;
    console.log(nextNo)

    countInterval = setInterval(function () {
        if (count == number) {
            clearInterval(countInterval);
            alert("Your Rocket has launched!!");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);

}

function increaseCount(currentNo, nextNo) {

    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) - 1;
    }, 500);

}
