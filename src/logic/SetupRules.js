export function getTimerLength(difficulty, noOfPlayers) {
    if (difficulty === 'hard') {
        return noOfPlayers * 4;
    } else if (difficulty === 'normal') {
        return noOfPlayers * 5;
    } else {
        return 0;
    }
}