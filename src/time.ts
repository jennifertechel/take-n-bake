class Time {
    private time: number;
    
    constructor() {
        this.time = millis();
    }
    
    public update() {
        this.time = millis();
        this.time = Math.floor(this.time / 1000);
    }
    
    public getTime() {
        return this.time;
    }
}
