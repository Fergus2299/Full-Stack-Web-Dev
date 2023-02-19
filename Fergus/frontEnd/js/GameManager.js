var score = 0;
let GameManager = {
    // a method for starting the game
    setGameStart: function(breed) {
        this.resetPlayer(breed);
        this.setFight("Fight!");
    },
    endGame: function(message, breed) {
        // the top information and actions
        let getHeader = document.querySelector("header"); 
        let getEnemy = document.querySelector(".enemy"); 
        let getActions = document.querySelector(".actions"); 
        getHeader.innerHTML = '<h5>You\'ve been defeated!</h5><p>'+message+'</p><p>your final score:'
        +score+'</p><button type="button" onclick="GameManager.setFight(\'fight!\')">Retry</button>';
        // make the actions dissapear
        getActions.innerHTML = '';
        // revealing the enemy's stats
        getEnemy.innerHTML = '<img src="images/dogs/' + enemy.breed +  '.jpg">'+'<div><h3>'+enemy.breed+'</h3>'
        +'<p>Speed: '+enemy.speed+'</p>'
        +'<p>Strength: '+enemy.strength+'</p>'
        +'<p>Cuddliness: '+enemy.cuddliness+'</p>'
        +'</div>';

        score = 0;
    },
    resetPlayer: function(breed) {
        switch(breed) {
            case 'german_shepherd':
                player = new Dog(breed,5,9,7);
                console.log(player);
                break;
            case 'labradoodle':
                player = new Dog(breed,6,5,10);
                console.log(player);
                break;
            case 'whippet':
                player = new Dog(breed,10,3,6);
                console.log(player);
                break;
        }
        // we want to edit the interface so we use query selector method on the document
        // we select the element '.interface' and want to insert the picture.
        let changeInterface = document.querySelector(".interface");
        changeInterface.innerHTML = '<img src="images/dogs/' + breed +  '.jpg">'+'<div><h3>'+breed+'</h3>'
        +'<p>Speed: '+player.speed+'</p>'
        +'<p>Strength: '+player.strength+'</p>'
        +'<p>Cuddliness: '+player.cuddliness+'</p>'
        +'</div>';
    },

    // set up fight each time, takes intro message whether you won the previous fight
    setFight: function(message) {
        // find random enemy - for now doberman.
        // and set up the enemy part of the html element
        enemy = new Dog('doberman',this.getRandomInt(11),this.getRandomInt(11),this.getRandomInt(11));
        let getHeader = document.querySelector("header"); 
        let getArena = document.querySelector(".arena");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        getHeader.innerHTML = message;

        // these buttons select the move that the player makes. We then call the makeMove
        getActions.innerHTML = '<p>Task: make your move</p>'+
        '<div><ul><li><a href="#" class = "btn-speed" onclick="GameManager.makeMove(\'speed\')">speed</a></li>'+
        '<li><a href="#" class = "btn-strength" onclick="GameManager.makeMove(\'strength\')">strength</a></li>'+
        '<li><a href="#" class = "btn-cuddliness" onclick="GameManager.makeMove(\'cuddliness\')">cuddliness</a></li></div>';

        // makes the enemies stats hidden
        getEnemy.innerHTML = '<img src="images/dogs/' + enemy.breed +  '.jpg">'+'<div><h3>'+enemy.breed+'</h3>'
        +'<p>Speed: ...</p>'
        +'<p>Strength: ...</p>'
        +'<p>Cuddliness: ...</p>'
        +'</div>';
    },
    makeMove: function(move) {
        // if you win this round then you move onto another opponent
        if(player[move]>=enemy[move]) {
            score ++;
            this.setFight("You've beaten " + enemy.breed + "since your " + move + "is "+player[move]+", "+enemy.breed+"'s is "+enemy[move]);
        }
        // otherwise you will go to the final menu
        else {
            this.endGame("You've been beaten by " + enemy.breed + " since your " + move + " is "+player[move]+", "+enemy.breed+"'s is "+enemy[move]);
        }
    },

    getRandomInt: function(max) {
        return Math.floor(Math.random() * max);
      },
    
};