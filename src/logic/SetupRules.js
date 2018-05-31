export function getTimerLength(difficulty, noOfPlayers) {
    return 1;
    if (difficulty === 'hard') {
        return noOfPlayers * 4;
    } else if (difficulty === 'normal') {
        return noOfPlayers * 5;
    } else {
        return 0;
    }
}