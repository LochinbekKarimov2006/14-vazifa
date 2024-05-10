let repeat=document.querySelector('#repeat')
let audio = document.querySelector("audio");
let divrasmlar = document.querySelector(".div-rasmlar");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let divgromki = document.querySelector(".div-gromki");
let i = document.querySelectorAll("i");
let musicImg = [
  "music-img-1",
  "music-img-2",
  "music-img-3",
  "music-img-4",
  "music-img-5",
  "music-img-6",
  "music-img-7",
  "music-img-8",
  "music-img-9",
  "music-img-10",
  "music-img-11",
  "music-img-12",
];
let button2 = document.querySelector(".button2");
let button1 = document.querySelector(".button1");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let divasosi = document.querySelector(".div-asosi");
let div5 = document.querySelector(".div-5");
let div3 = document.querySelector(".div-3");
let div6 = document.querySelector(".div-6");
let button = document.querySelectorAll(".button10");
let img = document.querySelectorAll(".img");
let button15 = document.querySelectorAll(".button15");
let input1 = document.querySelector("input");
let div211=document.querySelector('.div-2-1-1')
let p= document.getElementById('p')
let span1= document.getElementById('span1')
let span2= document.getElementById('span2')
let k = 0;
let l = 0;
audio.volume = input1.value;
button[0].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 0;
  k = 0;
  audio.play();
  forward();
});
button[1].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 1;
  k = 1;
  audio.play();
  forward();
});
button[2].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 2;
  k = 2;
  audio.play();
  forward();
});
button[3].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 3;
  k = 3;
  audio.play();
  forward();
});
button[4].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 4;
  k = 4;
  audio.play();
  forward();
});
button[5].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 5;
  k = 5;
  audio.play();
  forward();
});
button[6].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 6;
  k = 6;
  audio.play();
  forward();
});
button[7].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 7;
  k = 7;
  audio.play();
  forward();
});
button[8].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 8;
  k = 8;
  audio.play();
  forward();
});
button[9].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 9;
  k = 9;
  audio.play();
  forward();
});
button[10].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 10;
  k = 10;
  audio.play();
  forward();
});
button[11].addEventListener("click", () => {
  i[4].classList = "fa-solid fa-pause";
  l = 11;
  k = 11;
  audio.play();
  forward();
});
input1.addEventListener("input", (e) => {
  console.log((audio.volume = e.target.value));
});
let z = true;
function buttonplay() {
  if (z) {
    audio.pause();
    i[4].classList = "fa-solid fa-play";
  } else {
    i[4].classList = "fa-solid fa-pause";
    audio.play();
  }
  z = !z;
}
function forward() {
  k += 1;
  l += 1;
  if (k == musicImg.length) {
    k = 0;
    audio.src = `./music/${musicImg[k]}.mp3`;
    img3.src = `./img/${musicImg[l + 1]}.jpg`;
    img1.src = `./img/${musicImg[l - 1]}.jpg`;
    img2.src = `./img/${musicImg[l]}.jpg`;
    i[4].classList = "fa-solid fa-pause";
    audio.play();
  } else {
    audio.src = `./music/${musicImg[k]}.mp3`;
    img3.src = `./img/${musicImg[l + 1]}.jpg`;
    img1.src = `./img/${musicImg[l - 1]}.jpg`;
    img2.src = `./img/${musicImg[l]}.jpg`;
    i[4].classList = "fa-solid fa-pause";
    audio.play();
  }
  if (l == musicImg.length - 1) {
    l = 11;
    audio.src = `./music/${musicImg[11]}.mp3`;
    img3.src = `./img/${musicImg[0]}.jpg`;
    img2.src = `./img/${musicImg[11]}.jpg`;
    img1.src = `./img/${musicImg[10]}.jpg`;
    i[4].classList = "fa-solid fa-pause";
    audio.play();
  } else if (l >= 11) {
    l = 0;
    audio.src = `./music/${musicImg[0]}.mp3`;
    img3.src = `./img/${musicImg[11]}.jpg`;
    img2.src = `./img/${musicImg[0]}.jpg`;
    img1.src = `./img/${musicImg[1]}.jpg`;
    i[4].classList = "fa-solid fa-pause";
    audio.play();
  }
}
function buttonforward() {
  l -= 1;
  k -= 1;
  if (k == -1) {
    k = 11;
    l = 11;
    audio.src = `./music/${musicImg[k]}.mp3`;
    img2.src = `./img/${musicImg[l]}.jpg`;
    img1.src = `./img/${musicImg[l - 1]}.jpg`;
    img3.src = `./img/${musicImg[l + 1]}.jpg`;
    audio.play();
  } else {
    audio.src = `./music/${musicImg[k]}.mp3`;
    img2.src = `./img/${musicImg[l]}.jpg`;
    img1.src = `./img/${musicImg[l - 1]}.jpg`;
    img3.src = `./img/${musicImg[l + 1]}.jpg`;
    audio.play();
  }
  if (l == musicImg.length - 1) {
    l = 11;
    audio.src = `./music/${musicImg[11]}.mp3`;
    img3.src = `./img/${musicImg[0]}.jpg`;
    img2.src = `./img/${musicImg[11]}.jpg`;
    img1.src = `./img/${musicImg[10]}.jpg`;
    audio.play();
  } else if (l >= 11) {
    l = 0;
    audio.src = `./music/${musicImg[0]}.mp3`;
    img3.src = `./img/${musicImg[11]}.jpg`;
    img2.src = `./img/${musicImg[0]}.jpg`;
    img1.src = `./img/${musicImg[11]}.jpg`;
    audio.play();
  }
  i[4].classList = "fa-solid fa-pause";
}
let x = true;
button15[0].addEventListener("click", () => {
  if (x) {
    divgromki.style.display = "flex";
  } else {
    divgromki.style.display = "none";
  }
  x = !x;
});
let d = true;
button15[1].addEventListener("click", () => {
  if (d) {
    div5.style.display = "grid";
  } else {
    div5.style.display = "none";
  }
  d = !d;
});
let v = true;
button15[2].addEventListener("click", () => {
  if (v) {
    div6.style.display = "flex";
  } else {
    div6.style.display = "none";
  }
  v = !v;
});
let b = true;
button15[3].addEventListener("click", () => {
  if (b) {
    divrasmlar.style.display = "flex";
  } else {
    divrasmlar.style.display = "none";
  }
  b = !b;
});
let f = true;
button1.addEventListener("click", () => {
    console.log('salom')
  if (f) {
    div3.style.display = "flex";
  } else {
    div3.style.display = "none";
    divgromki.style.display = "none";
    divrasmlar.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none";
  }
  f = !f;
});
button2.addEventListener("click", buttonforward);
button3.addEventListener("click", buttonplay);
button4.addEventListener("click", forward);

audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;
    p.style.width = `${progressPercent}%`;
    updateTimer(currentTime, duration);
  i[4].classList = "fa-solid fa-pause";
    // audio.play()
});


function updateTimer(currentTime, duration) {
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);

    let times;
    if (isNaN(duration)) {
        times = '00:00';
    } else {
        times = `${durationMinutes.toString().padStart(2, '0')}:${durationSeconds.toString().padStart(2, '0')}`;
    }

    const currentTimeString = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;

    span1.textContent = currentTimeString;
    span2.textContent = times;
}
div211.addEventListener('click', (e) => {
    const width = div211.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});
repeat.addEventListener('click',()=>{
    audio.currentTime=0;
    audio.play()
})
