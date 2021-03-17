var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { 'key': 'SceneOne' });
    },
    init: function() {},
    preload: function() {
        this.load.image('title_bg', 'assets/img/title_bg.png');
        this.load.image('logo', 'assets/img/logo.png');
    },
    create: function() {
        this.title_bg = this.add.image(590, 285, 'title_bg');
        this.logo = this.add.image(600, 120, 'logo');
        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                this.scene.start('SceneTwo');
            }
        })
    },
    update: function() {}
});