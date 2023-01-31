class Score {
    private time: number;
    private stars: number;
    private score: number;

    constructor(time: number) {
        this.time = time;
        this.stars = this.setScorOfStars(time);
        this.score = this.setScore(time);
    }

    /*public setNrOfStars(time: number) {
        if (time <= 1) {
            this.stars = 3;
        } else if (time <= 2) {
            this.stars = 2;
        } else {
            this.stars = 1;
        }
        return this.stars;
    }*/

    public setScorOfStars(time:number) {
        if (time <= 60) {
            this.stars = 3;
        } else if (time <= 30) {
            this.stars = 2;
        } else {
            this.stars = 1;
        }

        return this.stars;
            

    }

    public setScore(time:number) {
        this.score = Math.round(1000/time);
        return this.score;
    }

    public getStars() {
        return this.stars;
    }

    public getScore() {
        return this.score;
    }
}