let guess = 6
let guessArray = []
const wordArray = [
    "cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", 
    "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", 
    "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", 
    "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", 
    "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", 
    "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", 
    "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", 
    "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", 
]

function give_word(){
    guessArray.length = 0
    document.getElementById("test").innerHTML = generate_word() + "  Your guess was      " + check_word()
    // document.getElementsByClassName("guess").style.display = "block"
}

function generate_word(){
    word = wordArray[Math.floor(Math.random()*wordArray.length)]
    return word
}

function check_word(){
    if(guess%6 == 0){
        guessArray.push(document.getElementById("1").value) 
        guessArray.push(document.getElementById("2").value)
        guessArray.push(document.getElementById("3").value)
        guessArray.push(document.getElementById("4").value)
        guessArray.push(document.getElementById("5").value)
        
    } else if(guess%6 == 1){
        guessArray.push(document.getElementById("6").value) 
        guessArray.push(document.getElementById("7").value)
        guessArray.push(document.getElementById("8").value)
        guessArray.push(document.getElementById("9").value)
        guessArray.push(document.getElementById("10").value)
        
    } else if(guess%6 == 2){
        guessArray.push(document.getElementById("11").value) 
        guessArray.push(document.getElementById("12").value)
        guessArray.push(document.getElementById("13").value)
        guessArray.push(document.getElementById("14").value)
        guessArray.push(document.getElementById("15").value)
        
    } else if(guess%6 == 3){
        guessArray.push(document.getElementById("16").value) 
        guessArray.push(document.getElementById("17").value)
        guessArray.push(document.getElementById("18").value)
        guessArray.push(document.getElementById("19").value)
        guessArray.push(document.getElementById("20").value)
        
    } else if(guess%6 == 4){
        guessArray.push(document.getElementById("21").value) 
        guessArray.push(document.getElementById("22").value)
        guessArray.push(document.getElementById("23").value)
        guessArray.push(document.getElementById("24").value)
        guessArray.push(document.getElementById("25").value)
        
    } else if(guess%6 == 5){
        guessArray.push(document.getElementById("26").value) 
        guessArray.push(document.getElementById("27").value)
        guessArray.push(document.getElementById("28").value)
        guessArray.push(document.getElementById("29").value)
        guessArray.push(document.getElementById("30").value)
        
    }
    console.log(guessArray)
    if (guessArray.includes(" ")){
        for (let i = 0; i < guessArray.length; i++){
            if (guessArray[i] = " "){
                guessArray.splice(i, 1)
            }
            console.log(guessArray)
        }
    } else {
        if (guessArray.length < 5){
            console.log("here")
            alert("You do not have enough letters")
            return 
        } else {
            console.log("bruh", guessArray.length)
            guess += 1
            allow_next(guess%6)
            console.log(guess%6)
            return guessArray.join("")
        }
    }
}

function allow_next(turn) {
    if (turn === 1){
        document.getElementById("turn_in1").disabled = true
        document.getElementById("turn_in2").disabled = false
    } else if (turn === 2){
        document.getElementById("turn_in2").disabled = true
        document.getElementById("turn_in3").disabled = false
    } else if (turn === 3){
        document.getElementById("turn_in3").disabled = true
        document.getElementById("turn_in4").disabled = false
    } else if (turn === 4){
        document.getElementById("turn_in4").disabled = true
        document.getElementById("turn_in5").disabled = false
    } else if (turn === 5){
        document.getElementById("turn_in5").disabled = true
        document.getElementById("turn_in6").disabled = false
    } else if (turn === 0){
        alert("done")
    }
}

function clear_guesses(){
    
}


