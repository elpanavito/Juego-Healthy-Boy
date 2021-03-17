var SceneFour = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { 'key': 'SceneFour' });
    },
    
    init: function(data) {
        this.message = data.message;
    },
    preload: function() {
        this.load.image('ending_bg', 'assets/img/ending_bg.png', {width: 560, height: 1100});

    },

    create: function() {

    //fondo
    this.add.image(500, 290, 'ending_bg');
    this.add.text(120, 100, 'You win!', { 
        fontSize: '40pt',
        fontFamily: 'Source Sans Pro', 
        align: 'center' });

    this.add.text(600, 400, 'Eat your greens',{
        fontSize: '40pt',
        fontFamily: 'Source Sans Pro',
        align: 'center' });

    this.add.text(750, 455, 'and stay healthy',{
        fontSize: '40pt',
        fontFamily: 'Source Sans Pro',
        align: 'center' });

    },


    
    update: function() {


    }
    //funcion movimiento


        
});
