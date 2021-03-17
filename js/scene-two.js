var SceneTwo = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneTwo" });
    },
    
    init: function(data) {
        this.message = data.message;
    },
    preload: function() {
        this.load.image('sky', 'assets/img/sky.png', {width: 560, height: 1200});
        this.load.image('ground', 'assets/img/floor.png');
        this.load.image('ground_2', 'assets/img/platform_2.png');
        this.load.image('banana', 'assets/img/point_1.png');
        this.load.image('apple', 'assets/img/point_2.png');
        this.load.image('burger', 'assets/img/bad_1.png');
        this.load.image('donut', 'assets/img/bad_2.png');
        this.load.spritesheet('dude', 
            'assets/img/dude.png',
            { frameWidth: 73, frameHeight: 84 });

            //audio
        this.load.audio("fail", ['assets/audio/1834.mp3']);
        this.load.audio("win", ['assets/audio/win.mp3']);
    },

    create: function() {


    //fondo
    this.add.image(500, 350, 'sky');


    //crear plataforma
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 598, 'ground').setScale(4).refreshBody();

    //plat_1
    platforms.create(600, 400, 'ground');
    platforms.create(200, 280, 'ground_2');
    platforms.create(1100, 280, 'ground');
    platforms.create(450, 150, 'ground_2');

    //text

    this.add.text(450, 538, 'Collect the fruits! Avoid the junk!', {
        fontSize: '24pt',
        fontFamily: 'Source Sans Pro',
        fontSize: '20pt',
        align: 'center',
        });

this.add.text(100, 538, 'Press [R] to Restart', {
    fontSize: '24pt',
    fontFamily: 'Source Sans Pro',
    fontSize: '20pt',
    align: 'center',
    });

    //crear jugador
    player = this.physics.add.sprite(70, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true)

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 1, end: 7 }),
        frameRate: 12,
        repeat: 0
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 8 } ],
        frameRate: 12
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 10, end: 18 }),
        frameRate: 10,
        repeat: -1
    });
    player.body.setGravityY(400)

    //restart button

    this.input.keyboard.on(
        "keydown-R",
        function () {
          this.scene.restart({ level: this.sys.settings.data.level });
        },
        this
      );

    //colision main character
    this.physics.add.collider(player, platforms);

    //move
    cursors = this.input.keyboard.createCursorKeys();

    //food

    //apple 1
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 300, y: 490, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);


    //apple 2
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 200, y: 490, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);
    
    //apple 3
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 500, y: 80, stepX: 90 }
    });

    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //apple 4
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 660, y: 330, stepX: 90 }
    });

    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //apple 5
    points = this.physics.add.group({
        key: 'apple',
        repeat: 1,
        setXY: { x: 750, y: 490, stepX: 100 }
    });

    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);



    //banana 1
    points = this.physics.add.group({
        key: 'banana',
        setXY: { x: 770, y: 330, stepX: 90 }
    });

    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

       
    //banana 2
    points = this.physics.add.group({
        key: 'banana',
        repeat: 1,
        setXY: { x: 160, y: 220, stepX: 100 }
    });

    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //banana 3
    points = this.physics.add.group({
        key: 'banana',
        setXY: { x: 1020, y: 200, stepX: 80 }
    });

    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //junk

    //burger 1
    junk = this.physics.add.group({
        key: 'burger',
        setXY: { x: 550, y: 340, stepX: 90 }
    });

    this.physics.add.collider(junk, platforms);
    this.physics.add.overlap(junk, player);
    this.physics.add.overlap(player, junk, collectJunk, null, this);

    //burger 2
    junk = this.physics.add.group({
        key: 'burger',
        setXY: { x: 1120, y: 200, stepX: 80 }
    });

    this.physics.add.collider(junk, platforms);
    this.physics.add.overlap(junk, player);
    this.physics.add.overlap(player, junk, collectJunk, null, this);

    //donut 1
    junk = this.physics.add.group({
        key: 'donut',
        setXY: { x: 450, y: 490, stepX: 80 }
    });

    this.physics.add.collider(junk, platforms);
    this.physics.add.overlap(junk, player);
    this.physics.add.overlap(player, junk, collectJunk, null, this);
    
    //donut 2
    junk = this.physics.add.group({
        key: 'donut',
        setXY: { x: 550, y: 490, stepX: 80 }
    });

    this.physics.add.collider(junk, platforms);
    this.physics.add.overlap(junk, player);
    this.physics.add.overlap(player, junk, collectJunk, null, this);

    //donut 3
    junk = this.physics.add.group({
        key: 'donut',
        setXY: { x: 650, y: 490, stepX: 80 }
    });

    this.physics.add.collider(junk, platforms);
    this.physics.add.overlap(junk, player);
    this.physics.add.overlap(player, junk, collectJunk, null, this);


    //score text
    scoreText = this.add.text(12, 12, 'score: 0', {
         fontSize: '32pt', 
         fill: '#ffffff',
         fontFamily: 'Source Sans Pro'
        });

    //sounds
    fail = this.sound.add("fail", { loop: false });
    win = this.sound.add("win", { loop: false });
    //music
    },

    
    update: function() {

        if (cursors.left.isDown)
        {
            player.setVelocityX(-260);
    
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(260);
    
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
    
            player.anims.play('turn');
        }
    
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-480);
        }

        if (score == 100) {
            this.scene.start('SceneThree');
        }

    }

    

    
});

//función para recolección de puntos y fruta.
function collectPoints (_player, points)
{
    win.play();
    points.disableBody(true, true);

    score += 10;
    scoreText.setText('score: ' + score);
}


//función para el gameOver; si tocas la comida chatarra mueres, tienes que volver a presionar R para reiniciar.
function collectJunk (_player, junk)
{
    this.cameras.main.fadeOut(1000, 255, 0, 0);
    fail.play();
    junk.disableBody(true, true);
    this.physics.pause();

    score = 0;
    scoreText.setText('score: ' + score);

    gameOver = true;
}
