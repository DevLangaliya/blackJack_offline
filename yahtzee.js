let dice = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]]

function show_dice(){
    roll = Math.floor(Math.random()*6)
    console.log(dice[roll], dice[roll][roll])
}

function gohome(){
    window.location.href = "http://127.0.0.1:5500/homepage.html"
}