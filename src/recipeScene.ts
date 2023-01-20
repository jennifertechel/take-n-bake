class RecipeScene {
    private RecipeSceneBackground: p5.Vector;
    private tableCloth: p5.Image;
    private game: IScene;

    constructor(game: IScene) {
    this.RecipeSceneBackground = createVector((innerWidth/4-225), 580, 50);
    this.tableCloth = images.backgroundObjects.tableCloth;
    this.game = game;
    }

    public draw(){
        this.RecipeSceneBackground

        image(this.tableCloth, 0, innerHeight-180, innerWidth, 180);
    }

}