//^ abstraction - the real implementation will not be clear, rather we will have an idea
// idea age ashbe
// clear implementation pore korbo
/*
 $Abstraction can be done in two ways:
    $1. interface
    $2. abstract class
*/

//* Using Interface
// //& idea
// interface MediaPlayer {
//   play(): void; // we dont know the implementation yet
//   pause(): void;
//   stop(): void;
// }
// //& implementation
// class MusicPlayer implements MediaPlayer {
//   play(): void {
//     console.log(`Playing music ♫`);
//   }
//   pause(): void {
//     console.log(`Paused music ⏸️`);
//   }
//   stop(): void {
//     console.log(`Stopped ⏹️`);
//   }
// }

// const vlcPlayer = new MusicPlayer(); //instance
// vlcPlayer.play();

//* Using abstract class
// idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}
//! const vlcPlayer = new MediaPlayer(); Cannot create an instance of an abstract class.
//implementation
class MusicPlayer extends MediaPlayer {
  play(): void {
    console.log(`Playing music ♫`);
  }
  pause(): void {
    console.log(`Paused music ⏸️`);
  }
  stop(): void {
    console.log(`Stopped ⏹️`);
  }
}

const vlcPlayer = new MusicPlayer();

vlcPlayer.pause();
