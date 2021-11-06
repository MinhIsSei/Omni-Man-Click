var img = document.getElementById("omni1");
var container = document.getElementById("container");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio("./audio/pop.mp3");
var audio2 = new Audio("./audio/music.mp3");
var music = document.getElementById("music");
var click = 0;
var total = document.getElementById("total");
var TotalClick = 0;
// mouseclick event
container.addEventListener("mousedown", function () {
  increaseScore();
  img.src = "./img/ThiccOmniMan.png";
  audio.play();
});

container.addEventListener("mouseup", function () {
  img.src = "./img/OmniMan.gif";
  audio.play();
});

body.addEventListener("keydown", function () {
  img.src = "./img/ThiccOmniMan.png";
  audio.play();
});

body.addEventListener("keyup", function () {
  img.src = "./img/OmniMan.gif";
  increaseScore();
  audio.play();
});

// touch event
container.addEventListener("touchstart", function () {
  increaseScore();
  img.src = "./img/ThiccOmniMan.png";
  audio.play();
});

container.addEventListener("touchmove", function () {
  img.src = "./img/OmniMan.gif";
  audio.play();
});

function increaseScore() {
  score++;
  count.innerHTML = score;
}

music.addEventListener("mousedown", function () {
  click++;
  audio2.volume = 0.15;
  increaseCount();
});

function increaseCount() {
  if (click % 2 == 0) {
    audio2.pause();
  } else {
    audio2.play();
  }
}

const leaderToggle = document.querySelector(".leader-toggle");
const tabContent = document.querySelector(".tab-content");

let toggle = true;

leaderToggle.addEventListener("click", () => {
  toggle = !toggle;
  if (!toggle) {
    tabContent.style.display = "block";
  } else {
    tabContent.style.display = "none";
  }
});

const sendNewDataToAPI = async () => {
  let IdUserUpdate = 1;
  //dữ liệu muốn update
  let dataUpdated = {
    click: Number(TotalClick) + score,
  }

  let userData = await fetch(
    `https://613483b1bbc9840017de4fd1.mockapi.io/api/user/${IdUserUpdate}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      //gửi data muốn update lên dạng json
      body: JSON.stringify(dataUpdated)
    }
  );
}
const fetchDataFromAPI = async () => {
  let IdUserUpdate = 1;
  let dataFromAPI = await fetch(
    `https://613483b1bbc9840017de4fd1.mockapi.io/api/user/${IdUserUpdate}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }
  );
  let dataConverted = await dataFromAPI.json();
  return dataConverted;
}

async function main() {
  console.log("main");
  let data = await fetchDataFromAPI();
  total.innerHTML = data.click;
  setInterval(async () => {
    let data = await fetchDataFromAPI();
    TotalClick = data.click;
    total.innerHTML = TotalClick;
  }, 3000);

  container.addEventListener(
    "mousedown",
    _.debounce(async function () {
      console.log("send");
      sendNewDataToAPI()
    }, 2000)
  );
  body.addEventListener(
    "keyup",
    _.debounce(async function () {
      console.log("send");
      sendNewDataToAPI()
    }, 2000)
  );
}
main();




