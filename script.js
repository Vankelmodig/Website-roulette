button = document.getElementById("button")
result = document.getElementById("result")
let thevariable = 0

function shoot() {
    let number = Math.floor(Math.random() * 6) + 1;
    if (number === 1) {
        console.log("1");
        result.innerHTML = "You got lucky, but beginners luck will only last so long..."
    } else if (number === 2) {
    console.log("2");
    result.innerHTML = "Watch out"
    } else if (number === 3) {
    console.log("3");
    result.innerHTML = "Im keeping my eye on you"
    }else if (number === 4) {
    console.log("4");
    result.innerHTML = "Youre walking on thin ice"
    }else if (number === 5) {
    console.log("5");
    result.innerHTML = "Close one..."
    }else if (number === 6) {
    console.log("6");
    result.innerHTML = "BANG"
    document.getElementById("explotion_img").style.display = "";
    setTimeout(() => {
     while (true) {
     thevariable = thevariable + 1
     console.log(thevariable)
     thevariable = thevariable * thevariable
     }
    }, 1000);
    }else{
        console.log("nope");
    }
}
