

class Time {

    private timer: number;
    private lastTime: number;
    
    constructor() {
        this.timer = 0;
        this.lastTime = millis();
    }

    update() {
        if (millis() - this.lastTime > 1000){
            this.timer++; 
            this.lastTime = millis();
        }

    }

    draw() {
        
        text(this.time, 20, 400 );
    }

    time () {
        
    }
     
}
