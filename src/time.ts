class Time {
    private time: number;
    
    constructor() {
        this.time = millis();
    }

    public reset() {
        this.time = 0;
    }

    public update() {
        this.time = millis();
        this.time = Math.floor(this.time / 1000);
    }
    
    public getRealTime() {
        return this.time;
    }

    public getTime() {
        let minutes = Math.floor(this.time / 60);
        let seconds = this.time % 60;
        let formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        return formattedTime;
    }
}