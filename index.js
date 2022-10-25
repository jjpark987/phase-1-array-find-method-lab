function superbowlWin(broncoRecord) {
    for(const value of broncoRecord) {
        if(value.result === `W`) {
            return value.year;
        }
    }
}