const slideList = [
 {img: "images/EA (1).jpg",},
{img: "images/EA (2).jpg",},
{img: "images/EA (3).jpg",},
{img: "images/EA (4).jpg",},
{img: "images/EA (5).jpg",},
{img: "images/EA (6).jpg",},
{img: "images/EA (7).jpg",},
{img: "images/EA (8).jpg",},
{img: "images/EA (9).jpg",},
{img: "images/EA (10).jpg",},
{img: "images/EA (11).jpg",},
{img: "images/EA (12).jpg",},
{img: "images/EA (13).jpg",},
{img: "images/EA (14).jpg",},
{img: "images/EA (15).jpg",},
{img: "images/EA (16).jpg",},
{img: "images/EA (17).jpg",},
{img: "images/EA (18).jpg",},
{img: "images/EA (19).jpg",},
{img: "images/EA (20).jpg",},
{img: "images/EA (21).jpg",},
{img: "images/EA (22).jpg",},
{img: "images/EA (23).jpg",},
{img: "images/EA (24).jpg",},
{img: "images/EA (25).jpg",},
{img: "images/EA (26).jpg",},
{img: "images/EA (27).jpg",},
{img: "images/EA (28).jpg",},
{img: "images/EA (29).jpg",},
{img: "images/EA (30).jpg",},
{img: "images/EA (31).jpg",},
{img: "images/EA (32).jpg",},
{img: "images/EA (33).jpg",},
{img: "images/EA (34).jpg",},
{img: "images/EA (35).jpg",},
{img: "images/EA (36).jpg",},
{img: "images/EA (37).jpg",},
{img: "images/EA (38).jpg",},
{img: "images/EA (39).jpg",},
{img: "images/EA (40).jpg",},
{img: "images/EA (41).jpg",},
{img: "images/EA (42).jpg",},
{img: "images/EA (43).jpg",},
{img: "images/EA (44).jpg",},
{img: "images/EA (45).jpg",},
{img: "images/EA (46).jpg",},
{img: "images/EA (47).jpg",},
{img: "images/EA (48).jpg",},
{img: "images/EA (49).jpg",},
{img: "images/EA (50).jpg",},
{img: "images/EA (51).jpg",},
{img: "images/EA (52).jpg",},
{img: "images/EA (53).jpg",},
{img: "images/EA (54).jpg",},
{img: "images/EA (55).jpg",},
{img: "images/EA (56).jpg",},
{img: "images/EA (57).jpg",},
{img: "images/EA (58).jpg",},
{img: "images/EA (59).jpg",},
{img: "images/EA (60).jpg",},
{img: "images/EA (61).jpg",},
{img: "images/EA (62).jpg",},
{img: "images/EA (63).jpg",},
{img: "images/EA (64).jpg",},
{img: "images/EA (65).jpg",},
{img: "images/EA (66).jpg",},
{img: "images/EA (67).jpg",},
{img: "images/EA (68).jpg",},
{img: "images/EA (69).jpg",},
{img: "images/EA (70).jpg",},
{img: "images/EA (71).jpg",},
{img: "images/EA (72).jpg",},
{img: "images/EA (73).jpg",},
	  
  
];

const img = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll("span")];
let time = 2000;
let active = 0;

const changeSlide = () => {
  active++;
  if (active == slideList.length) active = 0;
  img.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};

const changeSlideToPrevious = () => {
  active--;
  if (active == -1) active = slideList.length - 1;
  img.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};



const keyChangeSlide = (e) => {
  if (e.keyCode == 37) {
    clearInterval(changeInterval);
    changeSlideToPrevious();
    changeInterval = setInterval(changeSlide, time);
  } else if (e.keyCode == 39) {
    clearInterval(changeInterval);
    changeSlide();
    changeInterval = setInterval(changeSlide, time);
  }
};

function changeDotToClicked(e) {
  const num = changeIdToNum(this.id);
  active = num;
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  img.src = slideList[num].img;
  h1.textContent = slideList[num].text;
  this.classList.add("active");
  clearInterval(changeInterval);
  changeInterval = setInterval(changeSlide, time);
}



let changeInterval = setInterval(changeSlide, time);
for (dot of dots) {
  dot.addEventListener("click", changeDotToClicked);
}
window.addEventListener("keydown", keyChangeSlide);
