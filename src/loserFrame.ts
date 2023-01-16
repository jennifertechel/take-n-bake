class LoserFrame {
    protected position: p5.Vector;
    protected size: p5.Vector;
    protected borderColor: String;
    protected messageBackgroundColor: String;
    protected image: p5.Image;
    protected textMessage: String;
    protected backgroundImg: p5.Image;

    constructor (
        image: p5.Image)
     {
        this.position = createVector(width/2 - 525, height/2 - 305.5);
        this.size = createVector(1050, 611);
        this.borderColor = "C6E3DE";
        this.messageBackgroundColor = "F5F5F5";
        this.image = image;
        this.textMessage = "Ops...try again!";
        this.backgroundImg = loadImage("assets/images/Logo.svg");

    }

    public update() {
        
    }
    
    public draw() {
        push();
        let borderColor = color("#"+ this.borderColor);
        let bgColorMessage = color("#"+ this.messageBackgroundColor);
        fill(bgColorMessage)
        stroke(borderColor);
        strokeWeight(60);
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
        image(this.image, width/2-200, height/2 - 130, 400, 300);
        
        textSize(64);
        fill('black');
        noStroke();
        textStyle(BOLD);
        text(this.textMessage, width/2 - 256, height/2 - 195, this.size.x, this.size.y);

        let button = createButton('Menu');;
        let button2 = createButton('Restart');
        button.position(width/2 - 182,  height/2 + 150);
        button2.position(width/2 + 10, height/2 + 150);
        button.style('background-color', borderColor)
        button2.style('background-color', borderColor)
        button.size(160, 70)
        button2.size(160, 70)
        button.style('border', 0)
        button2.style('border', 0)
        button.style('font-size', 22 + 'px')
        button2.style('font-size', 22 + 'px')
        button.style('color', "#fff")
        button2.style('color', "#fff")
        pop();
    }
}

// function changeBG() {
//   let val = random(255);
//   background(val);
// }

// class button {
//     button.mousePressed(changeBG);
// }