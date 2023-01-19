class Button {
    private position: p5.Vector;
    private size: p5.Vector;
    private text: string;
    private hover: boolean;

    constructor(position: p5.Vector, text: string) {
        this.position = position;
        this.size = createVector(200, 70);
        this.text = text;
        this.hover = false;
    }

    public update() {}

    public draw() {
        if (this.hover) {
            fill("#93B9C6");
        } else {
            fill("#B5DBD2");
        }
        rect(this.position.x, this.position.y, this.size.x, this.size.y, 0);
        fill("#fff");
        textSize(35);
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