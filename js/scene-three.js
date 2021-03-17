var SceneThree = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { 'key': 'SceneThree' });
    },
    
    init: function(data) {
        this.message = data.message;
    },


    preload: function() {},
    //esta vez no precargamos nada, ya que los assets ya vienen preinstalados de la escena anterior...

    create: function() {

    score = 0;

    //fondo
    this.add.image(500, 350, 'sky');
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.sprite(70, 450, 'dude');
    player.body.setGravityY(450)


        //crear plataforma
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 598, 'ground').setScale(4).refreshBody();

        player.setBounce(0.2);
        player.setCollideWorldBounds(true)

        //plat_1

        platforms.create(500, 410, 'ground');
        platforms.create(100, 300, 'ground_2');
        platforms.create(1000, 280, 'ground_2');
        platforms.create(500, 200, 'ground_2');
        platforms.create(750, 100, 'ground_2');


        //text

        this.add.text(450, 538, 'Collect the fruits! Avoid the junk!', {
            fontSize: '24pt',
            fontFamily: 'Source Sans Pro',
            fontSize: '20pt',
            align: 'center',
            });

            //colision main character
    this.physics.add.collider(player, platforms);

    //food

    //apple 1
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 420, y: 490, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //apple 2
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 520, y: 490, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //apple 2
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 620, y: 490, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //apple 3
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 800, y: 20, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //apple 4
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 1100, y: 490, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //apple 5
    points = this.physics.add.group({
        key: 'apple',
        setXY: { x: 950, y: 190, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //banana 1
    points = this.physics.add.group({
        key: 'banana',
        setXY: { x: 80, y: 222, stepX: 90 }
    });

    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //banana 2
    points = this.physics.add.group({
        key: 'banana',
        setXY: { x: 170, y: 222, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //banana 3
    points = this.physics.add.group({
        key: 'banana',
        setXY: { x: 450, y: 100, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    //banana 4
    points = this.physics.add.group({
        key: 'banana',
        setXY: { x: 550, y: 100, stepX: 90 }
    });
    
    this.physics.add.collider(points, platforms);
    this.physics.add.overlap(points, player);
    this.physics.add.overlap(player, points, collectPoints, null, this);

    
        //junk

        //donut 1
        junk = this.physics.add.group({
            key: 'donut',
            setXY: { x: 320, y: 490, stepX: 90 }
        });
    
        this.physics.add.collider(junk, platforms);
        this.physics.add.overlap(junk, player);
        this.physics.add.overlap(player, junk, collectJunk, null, this);

        //donut 2
        junk = this.physics.add.group({
            key: 'donut',
            setXY: { x: 900, y: 490, stepX: 90 }
        });
    
        this.physics.add.collider(junk, platforms);
        this.physics.add.overlap(junk, player);
        this.physics.add.overlap(player, junk, collectJunk, null, this);

        //burger 1
        junk = this.physics.add.group({
            key: 'burger',
            setXY: { x: 1060, y: 190, stepX: 90 }
        });
    
        this.physics.add.collider(junk, platforms);
        this.physics.add.overlap(junk, player);
        this.physics.add.overlap(player, junk, collectJunk, null, this);

        //burger 2
        junk = this.physics.add.group({
            key: 'burger',
            setXY: { x: 1060, y: 190, stepX: 90 }
        });
    
        this.physics.add.collider(junk, platforms);
        this.physics.add.overlap(junk, player);
        this.physics.add.overlap(player, junk, collectJunk, null, this);

        //burger 3
        junk = this.physics.add.group({
            key: 'burger',
            setXY: { x: 1000, y: 490, stepX: 90 }
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

        this.add.text(100, 538, 'Press [R] to Restart', {
            fontSize: '24pt',
            fontFamily: 'Source Sans Pro',
            fontSize: '20pt',
            align: 'center',
            });
            

        //Restart button
        this.input.keyboard.on(
        "keydown-R",
        function () {
          this.scene.restart({ level: this.sys.settings.data.level });
        },
        this
        );

},


    
    update: function() {

        //las acciones de movimiento se tienen que volver a cargar de nuevo; imagino que será porque el movimiento va en loop y este va anidado a cada scene (es decir, página de JS)
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
            this.scene.start('SceneFour');
        }

    

    }
    //funcion movimiento


        
});


