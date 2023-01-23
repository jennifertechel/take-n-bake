class Score {
    private time: Number;
    private stars: Number;

    constructor(time: number) {
        this.time= 3.12;
        this.stars = this.nrOfStars(time);
    }

    public nrOfStars(time: Number) {
        if (time <= 1) {
            this.stars = 3;
        } else if (time <= 3) {
            this.stars = 2;
        } else {
            this.stars = 1;
        }
        return this.stars;
    }
}