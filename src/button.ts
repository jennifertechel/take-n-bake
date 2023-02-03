class Button {
    private position: p5.Vector;
    private size: p5.Vector;
    private text: string;
    private hover: boolean;
    private onClick: () => void;
    private timeout = 500; // timeout in milliseconds
    private static lastClicked: number = 0;

    constructor(position: p5.Vector, text: string, scene: Scene) {
        this.position = position;
        this.size = createVector(200, 70);
        this.text = text;
        this.hover = false;
        this.onClick = () => game.setActiveScene(scene)    
    }

    public update() {
        if (
            mouseX > this.position.x &&
            mouseX < this.position.x + this.size.x &&
            mouseY > this.position.y &&
            mouseY < this.position.y + this.size.y
          ) {
            if (mouseIsPressed) {
                const currentTime = Date.now();
                if (currentTime - Button.lastClicked >= this.timeout) {
                  this.onClick();
                  Button.lastClicked = currentTime;
                }
              }
        }
    }

    public draw() {
        if (this.hover) {
            fill("#946AA3");
        } else {
            fill("#B599BF");
        }
        rect(this.position.x, this.position.y, this.size.x, this.size.y, 0);
        fill("#fff");
        textSize(28);
        textStyle(NORMAL)
        textAlign(CENTER, CENTER)
        text(this.text, this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
    }

    public checkHover() {
        if (mouseX > this.position.x && mouseX < this.position.x + this.size.x && mouseY > this.position.y && mouseY < this.position.y + this.size.y) {
            this.hover = true;
        } else {
            this.hover = false;
        }
    }
}