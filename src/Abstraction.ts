
// Abstraction in OOP

// idea pabo but clear implementation pore pabo

/*

    1. interface
    2. abstract class

*/

interface MediaPlayer{
    play(): void;
    pause(): void;
    stop(): void;
};

//implementation

class MusicPlayer implements MediaPlayer{
    play(){
        console.log('playing music');
    }
    pause(){
        console.log('music paused');
    }
    stop(){
        console.log('music stop');
    }
}

// const userPlayer = new MusicPlayer();
// userPlayer.play();


//idea
abstract class AbstractMediaPlayer{
    abstract play():void;
    abstract pause():void;
    abstract stop():void;
}


class Person2Player extends AbstractMediaPlayer{
    play() {
        console.log(`playing music`)
    }
    pause() {
        console.log(`music pause`)
    }
    stop() {
        console.log(`music stop`)
    }
}