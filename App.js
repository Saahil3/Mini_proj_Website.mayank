const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movielist");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("Img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (6 + clickCounter) + (6 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 260
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  

  console.log(Math.floor(window.innerWidth / 270));
});
// show video
let playbutton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closeBtn = document.querySelector(".closevideo");

playbutton.onclick = () =>
{
  video.classList.add("show-video");

};  
closeBtn.onclick = () =>
{
  video.classList.remove("show-video");
};     