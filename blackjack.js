const suit = [" of Spades", " of Hearts", " of Clubs", " of Diamonds"]
const faces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
let deck = [], model = []
let playerArray = []
let splitter
let scoreGroup = []
let tempDeck1, tempDeck2
let point
let cft = false
let bet
let startingMoney = 1000
let canDeal = false
let splitShow = true
let returnToDeck
let userSplit, CPUSplit
let userScore = []
let CPUScore = []
let cpuHand, userHand
let scoreGroup2
let tempScore1, tempScore2
let splitted = 2
let splitGroups
let leaveThing = false

function gohome(){
    window.location.href = "http://127.0.0.1:5500/homepage.html"
}

function StartGame() {
    document.getElementById("UI").style.display = "block"
    document.getElementById("better").style.display = "block"
    document.getElementById("empezar").style.display = "none"
    document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
    document.getElementById("showRules").style.display = "none"
    document.getElementById("betAlerts").innerHTML = "Enter a bet of at least $10"
    document.getElementById("enterBet").style.display = "block"
    setUpDeck()
}

function setUpDeck() {
    for (let i = 0; i < suit.length; i++) {
        for (let g = 0; g < faces.length; g++) {
            let tempHand = faces[g].concat(suit[i])
            deck.push(tempHand)
            model.push(tempHand)
        }
        if (deck.length == 52) {
            break
        }
    }
}

function dealCards() {
    returnToDeck = []
    if (canDeal == false) return
    document.getElementById("alerts").innerHTML = ""
    document.getElementById("hit").style.display = "block"
    document.getElementById("stand").style.display = "block"
    cpuHand = []
    userHand = []
    userSplit = []
    CPUSplit = []
    userScore = []
    CPUScore = []
    tempScore1 = []
    tempScore2 = []
    splitter = [userSplit, CPUSplit]
    document.getElementById("deal").style.display = "none" 
    playerArray = [userHand, cpuHand]
    for (let h = 0; h < playerArray.length; h++) {
        for (let t = 0; t < 2; t++) {
            let spot = Math.floor(Math.random() * deck.length)
            point = deck[spot]
            playerArray[h].push(point)
            returnToDeck.push(point)
            if (point.includes("Ace")){
                splitter[h].push(1)
            } else if (point.includes("Jack")){
                splitter[h].push(11)
            } else if (point.includes("Queen")){
                splitter[h].push(12)
            } else if (point.includes("King")){
                splitter[h].push(13)
            } else {
                splitter[h].push(parseInt(point))
            }
            calcScore(h)
            for (let i = 0; i < deck.length; i++) {
                if (deck[i] === point) {
                    deck.splice(i, 1)
                }
            }
        }
    }
    show()
    checkStart()
    checkBust()
    checkSplit()
}

function takeYourCard(turn) {
    if (canDeal == false) return
    let spot = Math.floor(Math.random() * deck.length)
    point = deck[spot]
    playerArray[turn].push(point)
    returnToDeck.push(point)
    calcScore(turn)
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] === point) {
            deck.splice(i, 1)
        }
    }
    show()
    checkBust()
    checkStart()
    if (cft == false) return
    checkTie()
}

function leaveTotal() {
    document.getElementById("hit").style.display = "none"
    document.getElementById("stand").style.display = "none"
    cft = true
    checkTie()
    checkWin()
    leaveThing = true
    show()
    think()
}

function calcScore(y) {
    scoreGroup = [userScore, CPUScore]
    try {
        if (point.includes('Ace')) {
            scoreGroup[y].push(11)
            if (addTotals[y] > 21) {
                scoreGroup[y].splice(-1, 1, 1)
            }
        } else if (point.includes('Jack')) {
            scoreGroup[y].push(10)
        } else if (point.includes('Queen')) {
            scoreGroup[y].push(10)
        } else if (point.includes('King')) {
            scoreGroup[y].push(10)
        } else {
            scoreGroup[y].push(parseInt(point))
        }
    } catch (error) {
        alert("Deck is completely empty!")
    }
}

function calcInitialSplitScore(p){
    scoreGroup2 = [tempScore1, tempScore2]
    try {
        if (userHand[p].includes('Ace')) {
            scoreGroup2[p].push(11)
            if (addTotals[p] > 21) {
                scoreGroup2[p].splice(-1, 1, 1)
            }
        } else if (userHand[p].includes('Jack')) {
            scoreGroup2[p].push(10)
        } else if (userHand[p].includes('Queen')) {
            scoreGroup2[p].push(10)
        } else if (userHand[p].includes('King')) {
            scoreGroup2[p].push(10)
        } else {
            scoreGroup2[p].push(parseInt(userHand[p]))
        }
    } catch (error) {
        alert("Deck is completely empty!")
    }
}

function calcSplitScore(p){
    try {
        if (point.includes('Ace')) {
            scoreGroup2[p].push(11)
            if (addTotals[p] > 21) {
                scoreGroup2[p].splice(-1, 1, 1)
            }
        } else if (point.includes('Jack')) {
            scoreGroup2[p].push(10)
        } else if (point.includes('Queen')) {
            scoreGroup2[p].push(10)
        } else if (point.includes('King')) {
            scoreGroup2[p].push(10)
        } else {
            scoreGroup2[p].push(parseInt(point))
        }
    } catch (error) {
        alert("Deck is completely empty!")
    }
}

function think() {
    let thinkDeck = []
    let predictWin = 0
    let tryThis = 21 - addTotals(CPUScore)
    for(let w = 0; w < deck.length; w++) {
        try {       
            if (deck[w].includes('Ace')) {
                thinkDeck.push(1)
            } else if (deck[w].includes('Jack')) {
                thinkDeck.push(10)
            } else if (deck[w].includes('Queen')) {
                thinkDeck.push(10)
            } else if (deck[w].includes('King')) {
                thinkDeck.push(10)
            } else {
                thinkDeck.push(parseInt(deck[w]))
            }
        } catch (error) {
            alert("Deck is completely empty!")
            return
        }
    }
    for (let e = 0; e < thinkDeck.length; e++) {
        if (tryThis >= thinkDeck[e]) {
            predictWin++
        }
    }
    let brain = (predictWin/thinkDeck.length) 
    if ((addTotals(CPUScore) < addTotals(userScore)) && cft == true){
        brain += 0.2
    }
    if (brain >= 0.475) {
        takeYourCard(1)
    }
    if(playerArray[1].length == 2){ 
        leaveThing = true
    }
    show()
}

function show() {
    if (splitShow == true){
        document.getElementById("UserHand").innerHTML = "Your Hand: " + playerArray[0].join(' & ')
        document.getElementById("UserScore").innerHTML = "Your Score: " + addTotals(userScore)
    }
    if (leaveThing == false && addTotals(CPUScore) < 21){
        document.getElementById("cpuScore").innerHTML = "Their Score: ?"
        document.getElementById("cpuHand").innerHTML = "Their Hand: ? & " + playerArray[1][1]
    } else if (leaveThing == true) {
        document.getElementById("cpuHand").innerHTML = "Their Hand: " + playerArray[1].join(' & ')
        document.getElementById("cpuScore").innerHTML = "Their Score: " + addTotals(CPUScore)
    }
}

function addTotals(arr) {
    let tempSum = 0
    for (let d = 0; d < arr.length; d++) {
        tempSum += arr[d]
    }
    return tempSum
}

function checkTie(){
    if (((addTotals(CPUScore) == addTotals(userScore)) && ((addTotals(CPUScore) + addTotals(userScore)) <= 42)) && cft == true){
        document.getElementById("alerts").innerHTML = "TIE!"
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
        return true
    }
}

function placeBet(){
    bet = document.getElementById("enterBet").value
    bankrupt()
    if (bet !== null && bet <= startingMoney && bet >= 10){
        console.log("hey")
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        document.getElementById("better").style.display = "none"
        document.getElementById("enterBet").style.display = "none"
        document.getElementById("changeDeck").style.display = "none"
        document.getElementById("hitSplit").style.display = "none"
        document.getElementById("startSplit").style.display = "none"
        document.getElementById("d1").style.display = "none"
        document.getElementById("d2").style.display = "none"
        document.getElementById("UserHand").style.display = "block"
        document.getElementById("UserScore").style.display = "block"    
        document.getElementById("enterBet").value = ""
        document.getElementById("enterBet").style.display = "none"
        document.getElementById("betAlerts").innerHTML = ""
        canDeal = true
        dealCards()
    } else if (bet > startingMoney){
        document.getElementById("betAlerts").innerHTML = "You do not possess enough funds to bet this much money."
    } else if (bet < 10 && bet != null){
        document.getElementById("betAlerts").innerHTML = ("Your bet goes below the minimum bet")
    } else if (bet == null){
        document.getElementById("betAlerts").innerHTML =  ("That is not a valid bet!")
    }
    replaceCards(returnToDeck)
}

function split(){
    tempDeck1 = []
    tempDeck2 = []  
    document.getElementById("changeDeck").style.display = "block"
    document.getElementById("UserHand").style.display = "none"
    document.getElementById("UserScore").style.display = "none"
    document.getElementById("alerts").innerHTML = ""
    document.getElementById("betAlerts").innerHTML = ""
    document.getElementById("hit").style.display = "none"
    document.getElementById("d1").style.display = "block"
    document.getElementById("d2").style.display = "block"
    document.getElementById("hitSplit").style.display = "block"
    tempDeck1.push(userHand[0])
    tempDeck2.push(userHand[1])
    calcInitialSplitScore(0)
    calcInitialSplitScore(1)
    showSplit()
    splitShow = false
}

function checkSplit(){
    for (let s = 0; s < splitter.length; s++){
        for (let i = 0; i < splitter[s].length; i++){
            if (i == 0){
                if (userSplit[0] == userSplit[1]){
                    document.getElementById("startSplit").style.display = "block"
                } 
            } else if (i == 1){
                return
            }
        }
    }
}

function showSplit(){
    document.getElementById("tempHand2").innerHTML = "Hand 2: " + tempDeck2.join(" & ")
    document.getElementById("tempHand1").innerHTML = "Hand 1: " + tempDeck1.join(" & ")
    document.getElementById("UserScore1").innerHTML = "Hand 1 Total: " + addTotals(tempScore1)
    document.getElementById("UserScore2").innerHTML = "Hand 2 Total: " + addTotals(tempScore2)
    showActiveDeck()
}

function userChangeDeck(){
    splitted++
    showActiveDeck()
}

function showActiveDeck(){
    if (splitted%2 == 0){
        document.getElementById("d1").setAttribute('style', 'color: green; font-size: larger')
        document.getElementById("d2").setAttribute('style', 'color: brown; font-size: small')
    } else if (splitted%2 == 1){
        document.getElementById("d2").setAttribute('style', 'color: green; font-size: larger')
        document.getElementById("d1").setAttribute('style', 'color: brown; font-size: small')
    }
}

function hitSplit(d){
    splitGroups = [tempDeck1, tempDeck2]
    let spot = Math.floor(Math.random() * deck.length)
    point = deck[spot]
    splitGroups[d].push(point)
    returnToDeck.push(point)
    calcSplitScore(d)
    for (let i = 0; i < deck.length; i++) {
        if (deck[i] == point) {
            deck.splice(i, 1)
        }
    }
    showSplit()
    think()
    if ((addTotals(CPUScore) < addTotals(scoreGroup2[d]) && addTotals(scoreGroup2[d]) <= 21) && canDeal == false) {
        document.getElementById("alerts").innerHTML = "YOU WON!"
        startingMoney += (2 * bet)
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    }
    if (cft == true){
        checkTie()
    } else {
        checkBust()
        checkStart()
    }
}

function bankrupt(){
    if (startingMoney < 10){
        document.getElementById("betAlerts").innerHTML = ("It appears as if you cannot afford the minimum bet anymore. Too Bad!")
        window.location.reload(true)
    }
}

function replaceCards(array){
    for (let q = 0; q < array.length; q++){
        deck.push(array[q])
    }
}

function checkWin() {
    if ((addTotals(CPUScore) > addTotals(userScore)) && addTotals(CPUScore) <= 21) {
        document.getElementById("alerts").innerHTML = "THE CPU WON!"
        startingMoney -= bet
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    } else if ((addTotals(CPUScore) > addTotals(userScore)) && addTotals(CPUScore) > 21) {
        document.getElementById("alerts").innerHTML = "THE CPU BUSTED! YOU WON!"
        startingMoney += (2 * bet)
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    }
    if ((addTotals(CPUScore) < addTotals(userScore)) && addTotals(userScore) <= 21) {
        document.getElementById("alerts").innerHTML = "YOU WON!"
        startingMoney += (2 * bet)
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    } else if ((addTotals(CPUScore) < addTotals(userScore)) && addTotals(userScore) > 21) {
        document.getElementById("alerts").innerHTML = "YOU BUSTED! THE CPU WON!"
        startingMoney -= bet
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    }
    if ((addTotals(CPUScore) == 21)) {
        document.getElementById("alerts").innerHTML = "THE CPU WON!"
        startingMoney -= bet
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    } else if ((addTotals(userScore) == 21)) {
        document.getElementById("alerts").innerHTML = "YOU WON!"
        startingMoney += (2 * bet)
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    }
    document.getElementById("better").style.display = "block"
    document.getElementById("enterBet").style.display = "block"
    splitShow = true
    leaveThing = false
}

function checkStart() {
    if ((addTotals(CPUScore) == 21)) {
        document.getElementById("alerts").innerHTML = "THE CPU WON!"
        startingMoney -= bet
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    } else if ((addTotals(userScore) == 21)) {
        document.getElementById("alerts").innerHTML = "YOU WON!"
        startingMoney += (2 * bet)
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
    }
    document.getElementById("better").style.display = "block"
    document.getElementById("enterBet").style.display = "block"
    splitShow = true
    leaveThing = false
}

function checkBust(){
    if (addTotals(CPUScore) > 21) {
        document.getElementById("alerts").innerHTML = "THE CPU BUSTED! YOU WON!"
        startingMoney += (2 * bet)
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
        leaveTotal()
    } else if (addTotals(userScore) > 21 || (addTotals(tempScore1) > 21 || addTotals(tempScore2) > 21)) {
        document.getElementById("alerts").innerHTML = "YOU BUSTED! THE CPU WON!"
        startingMoney -= bet
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
        leaveTotal()
    } else if (addTotals(userScore) > 21 && addTotals(CPUScore) > 21) {
        checkTie()
        if (checkTie() !== true) return
        if (addTotals(CPUScore) < addTotals(userScore)){
            document.getElementById("alerts").innerHTML = "YOU BUSTED! THE CPU WON!"
            startingMoney -= bet
            leaveTotal()
        } else if (addTotals(CPUScore) > addTotals(userScore)){
            document.getElementById("alerts").innerHTML = "THE CPU BUSTED! YOU WON!"
            startingMoney += (2 * bet)
            leaveTotal()
        }
        document.getElementById("monies").innerHTML = "Cash: $" + startingMoney
        bet = 0
        document.getElementById("bet").innerHTML = "Your Bet: $" + bet
        canDeal = true
        document.getElementById("hit").style.display = "none"
        document.getElementById("stand").style.display = "none"
        
    }
    document.getElementById("better").style.display = "block"
    document.getElementById("enterBet").style.display = "block"
    splitShow = true
    leaveThing = false
}

function goBack(){
    document.getElementById("return").style.display = "none"
    document.getElementById("empezar").style.display = "block"
    document.getElementById("showRules").style.display = "block"
    document.getElementById("rules").style.display = "none"
}

function showRules(){
    document.getElementById("return").style.display = "block"
    document.getElementById("empezar").style.display = "none"
    document.getElementById("showRules").style.display = "none"
    document.getElementById("rules").style.display = "block"
}