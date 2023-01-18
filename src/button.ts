class Button {

    button: p5.Element;
    hoverColor: string;

    constructor(x: number, y: number, text: string, bgColor: string, hoverColor: string) {
        this.button = createButton(text);
        this.button.position(x, y);
        this.button.style('background-color', bgColor);
        this.button.size(160, 70);
        this.button.style('border', 0);
        this.button.style('font-size', 22 + 'px');
        this.button.style('color', "#fff");
        this.hoverColor = hoverColor;
        this.button.mouseOver(() => {
        this.button.style('background-color', hoverColor)
        this.hoverColor = "#C6E3DE";
        });
        this.button.mouseOut(() => {
            this.button.style('background-color', bgColor)
        });
    }

    public draw() {
        let button = createButton('');

        let borderColor = "#C6E3DE";
        button.position(width/2 - 182,  height/2 + 150);
        button.style('background-color', borderColor)
        button.size(160, 70)
        button.style('border', 0)
        button.style('font-size', 22 + 'px')
        button.style('color', "#fff")
        
        // create a hover button; 
        button.mouseOver(() => {
            button.style('background-color', "#23c471")
            console.log("over")
        });
    
        button.mouseOut(() => {
            button.style('background', "#C6E3DE")
            console.log("out")
        });
    }
}


//     public draw() {

//         let borderColor = "000";
//         let button = createButton('Menu');;
//         let button2 = createButton('Restart');
//         button.position(width/2 - 182,  height/2 + 150);
//         button2.position(width/2 + 10, height/2 + 150);
//         button.style('background-color', borderColor)
//         button2.style('background-color', borderColor)
//         button.size(160, 70)
//         button2.size(160, 70)
//         button.style('border', 0)
//         button2.style('border', 0)
//         button.style('font-size', 22 + 'px')
//         button2.style('font-size', 22 + 'px')
//         button.style('color', "#fff")
//         button2.style('color', "#fff")
    
//         let hoverCol = color("#C6E3DE");
    
//         // create a hover button; 
//         button.mouseOver(() => {
//             button.style('color', "#000")
//             console.log("over")
//         });
    
//         button.mouseOut(() => {
//             button.style('background', "#C6E3DE")
//             console.log("out")
//         });
    
//         button2.mouseOver(() => {
//             button2.style('background-color', "#C6E3DE")
//             console.log("over")
//         });
    
//         button2.mouseOut(() => {
//             button2.style('background-color', borderColor.toString())
//             console.log("out")
//         });
//     }
// }