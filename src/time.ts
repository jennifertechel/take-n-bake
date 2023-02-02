class Time {
    private time: number;
    private startTime: number;
    
    constructor() {
        this.time = 0;
        this.startTime = performance.now();
    }

    public reset() {
        this.time = 0;
        console.log("Timer reset to: ", this.time);
    }

    public update(): void {
        let currentTime = performance.now();
        this.time += (currentTime - this.startTime) / 1000;
        this.startTime = currentTime;
    }

    public getRealTime() {
        return this.time;
    }

    public getTime() {
        let minutes = Math.floor(this.getRealTime() / 60);
        let seconds = Math.floor(this.getRealTime() % 60);
        let formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        return formattedTime;
    }
}
