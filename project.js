document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const splashTitle = splashScreen.querySelector('.splash-title');
    const text = [
        "Welcome to Zero Hunger",
        "End Hunger Today",
        "Fight Hunger , Build Hope"
    ];
    let idx = 0;
    const colur = [
        "brown",
        "blue",
        "#ff1493"
    ];

    function changeTexts() {
        splashTitle.textContent = text[idx];
        splashTitle.style.color = colur[idx];
        idx = (idx + 1) % text.length;
    }


    

    const textInterval = setInterval(changeTexts, 1500);

    setTimeout(function() {
   
    clearInterval(textInterval)
    splashScreen.classList.add('hidden');
    setTimeout(function() {
        document.getElementById('main').classList.add('visible');
    }, 500);
}, 6000); 
});


document.addEventListener("DOMContentLoaded", function() {
const textChanger = document.getElementsByClassName('quote')[0];

const texts = [
    "If you can't feed a hundred people, then just feed one...",
    "If we can conquer space, we can conquer childhood hunger..",
    "The full man does not understand the wants of the hungry...",
    "The Little Hunger wants food for the belly...",
    " Don't be rude, donate some food....",
    "Give what you can. Take a bite out of hunger.."
];
let index = 0;
const colors = [
    "pink",
    "lightblue",
    "lightgreen",
    "burlywood",
    "lightcoral",
    "lightgray"
];

function changeText() {
    textChanger.textContent = texts[index];
    textChanger.style.backgroundColor = colors[index];
    index = (index + 1) % texts.length;
}


setInterval(changeText, 5000);


textChanger.addEventListener('click', changeText);
});