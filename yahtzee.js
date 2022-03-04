const dice = [1, 2, 3, 4, 5, 6];
const p1_upper = [0, 0, 0, 0, 0, 0];
const p2_upper = [0, 0, 0, 0, 0, 0];
const p1_lower = [0, 0, 0, 0, 0, 0];
const p2_lower = [0, 0, 0, 0, 0, 0];

function show_dice(){
    dice_arr = []
    for(let i = 0; i < 5; i++){
        dice_arr.push(dice[Math.floor(Math.random()*dice.length)])
    }
    woah = dice_arr.sort((a,b) => a - b)
    current_hand = woah.join(', ')
    document.getElementById("dice").innerHTML = current_hand
    check_roll()
}

function check_card(){
    show_dice()
    document.getElementById("ace11").innerHTML = woah
}


function gohome(){
    window.location.href = "http://127.0.0.1:5500/homepage.html"
}

function check_roll(){
     
}

function calc_ace(){

}

function calc_two(){
    
}

function calc_three(){
    
}

function calc_four(){
    
}

function calc_five(){
    
}

function calc_six(){
    
}
