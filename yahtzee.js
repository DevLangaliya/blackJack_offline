const dice = [1, 2, 3, 4, 5, 6];

function show_dice(){
    let dice_arr = []
    for(let i = 0; i < 5; i++){
        dice_arr.push(dice[Math.floor(Math.random()*dice.length)])
    }
    curent_hand = dice_arr.join(', ')
    document.getElementById("dice").innerHTML = curent_hand
    setInterval(show_dice(), 2000)
}

function gohome(){
    window.location.href = "http://127.0.0.1:5500/homepage.html"
}

