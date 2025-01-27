const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwLength = document.getElementById("pw-length");

let useSymbols = document.getElementById("symbolsCheckbox");

function generate() {
    let pwOne = "";
    let pwTwo = "";
    let passwordOne = document.getElementById("passwordOne");
    let passwordTwo = document.getElementById("passwordTwo");

    if (pwLength.value < 10) {
        alert("Password length must be at least 10 characters.");
        return;
    } else if (pwLength.value > 20) {
        alert("Password length must at most 20 characters.");
        return;
    }

    if (useSymbols.checked === true) {
        for (let i = 0; i < pwLength.value; i++) {
            pwOne += characters[Math.floor(Math.random() * characters.length)];
        }
        
        for (let i = 0; i < pwLength.value; i++) {
            pwTwo += characters[Math.floor(Math.random() * characters.length)];
        }
    } else {
        for (let i = 0; i < pwLength.value; i++) {
            pwOne += characters[Math.floor(Math.random() * 62)];
        }
        
        for (let i = 0; i < pwLength.value; i++) {
            pwTwo += characters[Math.floor(Math.random() * 62)];
        }
    }
    
    passwordOne.value = pwOne;
    passwordTwo.value = pwTwo;
}

function copyOne() {
    const passwordOne = document.getElementById("passwordOne");
    passwordOne.select();
    document.execCommand("copy");
}

function copyTwo() {
    const passwordTwo = document.getElementById("passwordTwo");
    passwordTwo.select();
    document.execCommand("copy");
}