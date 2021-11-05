var img = document.getElementById("omni1");
var container = document.getElementById("container");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio("./audio/pop.mp3");
var audio2 = new Audio("./audio/music.mp3");
var music = document.getElementById("music");
var click = 0;
var total = document.getElementById("total");

// mouseclick event
container.addEventListener("mousedown", function () {
  increaseScore();
  img.src = "./img/ThiccOmniMan.png";
  audio.play();
});

container.addEventListener(
  "mousedown",
  _.debounce(async () => {
    let IdUserUpdate = 1;
    //dữ liệu muốn update
    let newDataUpdate = {
      // let a = await fetch(
      //   `https://613483b1bbc9840017de4fd1.mockapi.io/api/user/${IdUserUpdate}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     //gửi data muốn update lên dạng json
      //     body: JSON.stringify(newDataUpdate)
      //   }
      // ),
      // newClick: a.newClick+score,
      newClick:2000,
    };

    let userData = await fetch(
      `https://613483b1bbc9840017de4fd1.mockapi.io/api/user/${IdUserUpdate}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        //gửi data muốn update lên dạng json
        body: JSON.stringify(newDataUpdate)
      }
    );
    //convert data trả về sang object
    let dataConverted = await userData.json();
    console.log(dataConverted);
    return dataConverted;
    //sau 2 giây sẽ gửi lên api
    }, 2000)
);
container.addEventListener("mouseup", function () {
  img.src = "./img/OmniMan.gif";
  audio.play();
});

body.addEventListener("keydown", function () {
  img.src = "./img/ThiccOmniMan.png";
  audio.play();
});

body.addEventListener(
  "keydown",
  _.debounce(async () => {
    let IdUserUpdate = 1;
    //dữ liệu muốn update
    let newDataUpdate = {
      newClick: 2000
    };
    let userData = await fetch(
      `https://613483b1bbc9840017de4fd1.mockapi.io/api/user/${IdUserUpdate}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        //gửi data muốn update lên dạng json
        body: JSON.stringify(newDataUpdate)
      }
    );
    //convert data trả về sang object
    let dataConverted = await userData.json();
    console.log(dataConverted);
    return dataConverted;
    //sau 2 giây sẽ gửi lên api
    }, 2000) 
);

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

// let apiKey = "1be9a6884abd4c3ea143b59ca317c6b2";
// // Make the reques
// let continentUser = async () => {
//   let a = await fetch(
//     "https://www.ip2location.com/download?token=vSqQwb5ClFutLIMcjlVSiwJbicBOmFfwFN7LI99ey9W1IXbaqfHLbBCt1NuXOjeX&file={DATABASE_CODE}" ,

//     {headers: {
//       "Access-Control-Allow-Origin":"*"

//     },mode:"no-cors"}
//   );
//   // Extract JSON body content from HTTP response
//   let dataTrans = await a.json();

//   return dataTrans;
// };

// async function getData() {
//   try {
//     const result = await fetch(
//       "https://613483b1bbc9840017de4fd1.mockapi.io/api/user"
//     );
//     const resultConverted = await result.json();
//     return resultConverted;
//   } catch (error) {
//     console.log("Lay data bi loi");
//   }
// }
// let continent = getData();

// async function main() {
//   let data = await continentUser();
//   let continent = await getData();
//   console.log(data);
//   console.log(continent)

// }
// main();



