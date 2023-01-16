class LoserFrame {
    protected position: p5.Vector;
    protected size: p5.Vector;
    protected backgroundColor: String;
    protected messageBackgroundColor: String;
    protected image: p5.Image;
    protected textMessage: String;
    // protected button: object;
    // protected button2: object;

    constructor (
        position: p5.Vector,
        size: p5.Vector,
        backgroundColor: String = "C6E3DE",
        messageBackgroundColor: String = "F5F5F5",
        image: p5.Image,
        textMessage: String = "testmeddelande yey",
        // button: object,
        // button2: object
    ) {
        this.position = position;
        this.size = size;
        this.backgroundColor = backgroundColor;
        this.messageBackgroundColor = messageBackgroundColor;
        this.image = image;
        this.textMessage = textMessage;
        // this.button = button;
        // this.button2 = button2;
    }

    public update() {
        
    }
    
    public draw() {
        push();
        let bgColor = color("#"+ this.backgroundColor);
        let bgColorMessage = color("#"+ this.messageBackgroundColor);
        fill(bgColor)
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
        fill(bgColorMessage)
        rect(this.position.x, this.position.y, this.size.x, this.size.y);
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
        text(this.textMessage, this.position.x, this.position.y, this.size.x, this.size.y);
        // button(this.button, this.position.x, this.position.y, this.size.x, this.size.y);
        // button(this.button2, this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    }
}

// function changeBG() {
//   let val = random(255);
//   background(val);
// }

// class button {
//     button = createButton('click me');
//     button.position(0, 0);
//     button.mousePressed(changeBG);
// }