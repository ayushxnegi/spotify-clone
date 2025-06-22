let audioElement = new Audio("songs/1.mp3");
// audioElement.play();
let index = 0;
let masterplay = document.getElementById("masterplay");
let progress_bar = document.getElementById("progress_bar");
let songlist = [
  { filepath: "songs/1.mp3" },
  { filepath: "songs/2.mp3" },
  { filepath: "songs/3.mp3" },
  { filepath: "songs/4.mp3" },
  { filepath: "songs/5.mp3" },
  { filepath: "songs/6.mp3" },
  { filepath: "songs/7.mp3" },
  { filepath: "songs/8.mp3" },
  { filepath: "songs/9.mp3" },
  { filepath: "songs/10.mp3" },
  { filepath: "songs/1.mp3" },
  { filepath: "songs/2.mp3" },
  { filepath: "songs/3.mp3" },
  { filepath: "songs/4.mp3" },
  { filepath: "songs/5.mp3" },
  { filepath: "songs/6.mp3" },
  { filepath: "songs/7.mp3" },
  { filepath: "songs/8.mp3" },
];

masterplay.addEventListener("click", () => {
  if (audioElement.paused | (audioElement.currentTime <= 0)) {
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause");
    masterplay.classList.add("fa-play");
  }
});
audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  progress_bar.value = progress;
  // console.log(progress);
});
progress_bar.addEventListener("change", () => {
  audioElement.currentTime = (progress_bar.value * audioElement.duration) / 100;
});

const makeallunplay = () => {
  Array.from(document.getElementsByClassName("music_card")).forEach(
    (element) => {
      element.classList.remove("playsong");
    }
  );
};

Array.from(document.getElementsByClassName("music_card")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeallunplay();

    const foo = e.target;
    if (foo.classList.contains("card-picture")) {
      let ayu = foo.parentElement;
      ayu.classList.add("playsong");
      foo.classList.remove("playsong");
      index = parseInt(ayu.id);
      // console.log(index);
      audioElement.src = `songs/${index}.mp3`;
      audioElement.play();
      masterplay.classList.add("fa-pause");
      masterplay.classList.remove("fa-play");
    } else {
      index = parseInt(e.target.id);
      // console.log(index);
      e.target.classList.add("playsong");
      audioElement.src = `songs/${index}.mp3`;
      audioElement.play();
      masterplay.classList.add("fa-pause");
      masterplay.classList.remove("fa-play");
    }
  });
});

document.getElementById("priveous_button").addEventListener("click", () => {
  makeallunplay();
  console.log("beforw", index);

  if (index <= 1) {
    index = 18;
  } else {
    index -= 1;
  }
  console.log("after", index);
  let yyy = document.getElementById(index);
  yyy.classList.add("playsong");
  audioElement.src = `songs/${index}.mp3`;
  audioElement.play();
  masterplay.classList.add("fa-pause");
  masterplay.classList.remove("fa-play");
  console.log(audioElement.src);
});
document.getElementById("next_button").addEventListener("click", () => {
  makeallunplay();
  console.log("beforw", index);

  if (index >= 18) {
    index = 1;
  } else {
    index += 1;
  }
  console.log("after", index);
  let yyy = document.getElementById(index);
  yyy.classList.add("playsong");
  audioElement.src = `songs/${index}.mp3`;
  audioElement.play();
  masterplay.classList.add("fa-pause");
  masterplay.classList.remove("fa-play");
  console.log(audioElement.src);
});
// document.getElementById("next_button").addEventListener("click", () => {
//   makeallunplay();

//   if(index>=18){
// index=0
//   }
//   else{
//     index = 1;
//   }
//   let previous_song = index;
//   let yyy = document.getElementById(previous_song);
//   yyy.classList.add("playsong");
//   audioElement.src = `songs/${index}.mp3`;
//   audioElement.play();
//   masterplay.classList.add("fa-pause");
//   masterplay.classList.remove("fa-play");
// });

// Array.from(document.getElementsByClassName("music_card")).forEach((element) => {
//   element.addEventListener("click", (e) => {
//     makeallunplay();
//     // console.log(e.target);
//     // console.log(e);
//     const foo = e.target;
//     if (foo.classList.contains("card-picture")) {
//       // console.log("done");
//       let ayu = foo.parentElement;
//       // console.log(ayu);
//       ayu.classList.add("playsong");
//     }
//     e.target.classList.add("playsong");
//     makeallunplay2();
//   });
// });
