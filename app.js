const generateBtn = document.querySelector('.generate-password')
let lengthSlider = document.getElementsByTagName('input')[1];
const copyIcon = document.querySelector('.input-box span');
const passwordInput = document.querySelector('.input-box input')
const passIndiator = document.querySelector('.pass-indicator')

function updateSpan(event) {
    let span = document.getElementsByTagName('span')[1];
    span.innerHTML = lengthSlider.value;
}
const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: '0123456789',
    symbols: '!@#$%^&*()_',
}
function generatePassword() {
    let staticPassword = "";
    let excludeDuplicate = false;
    let passwordLength = lengthSlider.value;
    let randomPassword = "";
    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "excludeduplicate" || option.id !== "spaces")
                staticPassword += characters[option.id]
        } else if (option.id === "spaces") {
            staticPassword += `${staticPassword}`;
        } else {
            excludeDuplicate = true;
        }

    });
    for (let i = 0; i < passwordLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword;
               

const updatePassIndictor = () => {
    passwordLength<=7 ? passIndiator.id="weak":passwordLength<=15?  passIndiator.id="medium" :  passIndiator.id="strong";
}
updatePassIndictor()
}
const copypassword = (e) => {
    navigator.clipboard.writeText(passwordInput.value)
    copyIcon.innerHTML = "check";
    copyIcon.style.color = "#4285F4";
    setTimeout(() => {
        copyIcon.innerHTML = "copy_all";
        copyIcon.style.color = "#707070";
    }, 1500)
}


const options = document.querySelectorAll('.option input');
lengthSlider.addEventListener('input', updateSpan)
generateBtn.addEventListener('click', generatePassword);
copyIcon.addEventListener('click', copypassword)













// const excludeduplicate =document.querySelector('#excludeduplicate')
// const includespace =document.querySelector('#includespaces')
// for (let i = 0; i < 1; i++) {
//     if (lowercase.checked===true) {
//         console.log("lowercase checked")
//         console.log(characters.lowercase[Math.floor(Math.random()*26)]);
//         if(uppercase.checked===true){
//             console.log("uppercase checked");
//             console.log(characters.uppercase[Math.floor(Math.random()*26)]);

//         }
//         if(numbers.checked===true){
//             console.log("numbers checked");
//             console.log(characters.numbers[Math.floor(Math.random()*10)]);

//         }
//         if(symbols.checked===true){
//             console.log("symbols checked");
//             console.log(characters.symbols[Math.floor(Math.random()*11)]);

//         }
//         if(excludeduplicate.checked===true){
//             console.log("excludeduplicate checked");
//             // console.log(characters.excludeduplicate[Math.floor(Math.random()*26)]);

//         }
//         if(includespace.checked===true){
//             console.log("includespace checked");
//              console.log(characters.includespace[Math.floor(Math.random()*26)]);   















