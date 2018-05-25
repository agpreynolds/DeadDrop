export function getTimerLength(difficulty, noOfPlayers) {
    if (difficulty === 2) {
        return noOfPlayers * 4;
    } else if (difficulty === 1) {
        return noOfPlayers * 5;
    } else {
        return 0;
    }
}