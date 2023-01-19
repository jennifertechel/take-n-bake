class MessageBox {
    private title: string;

    constructor(title: string) {
        this.title = title;
    }

    public update() {}

    public draw() {
        strokeWeight(60);
        stroke("#C6E3DE")
        fill("#F5F5F5");
        rect(innerWidth/2-525, innerHeight/2-306, 1050, 612);
        fill("#946AA3")
        noStroke()
        textSize(64);
        textStyle(BOLD)
        textAlign(CENTER)
        text(this.title, innerWidth/2, innerHeight/2 - 200)
        text(this.title, innerWidth/2, innerHeight/2 - 185)

    }
}

