const RPSchoices = [ 'rock','paper','scissors'];
const RPSLSchoices = [ 'rock','paper','scissors','lizard','spock'];


export function rps(shot) {
    
    let opp = choicesRPS[Math.floor(Math.random() * choicesRPS.length)];
    if (shot == undefined)
        return {"player": opp};
    
    let play = shot.toLowerCase();
    if (!RPSchoices.includes(shot)){
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }
}