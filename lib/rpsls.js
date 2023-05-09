const movesrps = ["rock", "paper", "scissors"]
export function rps(shot) {
    let opp = movesrps[Math.floor(Math.random() * movesrps.length)]
    let result = ""

    if (shot === undefined) {
        return {player: opp};
    }
    
    let play = shot.toLowerCase();

    if (!movesrps.includes(play)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (opp === play) {
        result = "tie"
    }
    else if (play === "rock" && opp === "scissors" || 
            play === "scissors" && opp === "paper" || 
            play === "paper" && opp === "rock") {
        result = "win"
    }
    else {
        result = "lose"
    }

    return { player: play,
            opponent: opp,
            result: result };
}

export function rpsls(shot) {
    const movesrpsls = ["rock", "paper", "scissors", "lizard", "spock"]
    let opp = movesrpsls[Math.floor(Math.random() * movesrpsls.length)]
    let result = ""

    if (shot === undefined) {
        return {player: opp};
    }
    
    let play = shot.toLowerCase();

    if (!movesrpsls.includes(play)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (opp === play) {
        result = "tie"
    }
    else if (play === "rock" && opp === "lizard" ||
             play === "lizard" && opp === "spock" || 
             play === "spock" && opp === "scissors" || 
             play === "scissors" && opp === "lizard" || 
             play === "lizard" && opp === "paper" || 
             play === "paper" && opp === "spock" || 
             play === "spock" && opp === "rock") {
        result = "win"
    }
    else if (play === "rock" && opp === "scissors" || 
            play === "scissors" && opp === "paper" || 
            play === "paper" && opp === "rock") {
        result = "win"
    }
    else {
        result = "lose"
    }

    return { player: play,
            opponent: opp,
            result: result };
}