class Score {
    // private time: number;
    private stars: number;

    constructor(time: number) {
        // this.time = time;
        this.stars = this.setNrOfStars(time);
    }

    public setNrOfStars(time: number) {
        if (time <= 1) {
            this.stars = 3;
        } else if (time <= 2) {
            this.stars = 2;
        } else {
            this.stars = 1;
        }
        return this.stars;
    }

    public getStars() {
        return this.stars;
    }
}