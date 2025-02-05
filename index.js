const body = document.querySelector("body");
const container = document.createElement("div");
const left = document.createElement("button");
const right = document.createElement("button");
// const nums = document.createElement("div");

container.className = "cont";
left.className = "left";
right.className = "right";
// nums.className = "nums";

body.appendChild(container);
container.appendChild(left);
container.appendChild(right);
// container.appendChild(nums);

left.style.width = "50%";
right.style.width = "50%";

left.onclick = increase;
right.onclick = increase;

function increase(value) {
  if (value.target.className === "left") {
    left.style.width = parseInt(left.style.width) + 1 + "%";
    right.style.width = parseInt(right.style.width) - 1 + "%";
    left.innerText = left.style.width;
    right.innerText = right.style.width;

    if (parseInt(left.style.width) >= 100) {
      left.innerText = "RED WIN";
      right.innerText = "";
    }
    // nums.innerText = left.style.width;
  } else {
    left.style.width = parseInt(left.style.width) - 1 + "%";
    right.style.width = parseInt(right.style.width) + 1 + "%";
    right.innerText = right.style.width;
    left.innerText = left.style.width;
    if (parseInt(right.style.width) >= 100) {
      left.innerText = "";
      right.innerText = "BLUE WIN";
    }
    // nums.innerText = left.style.width;
  }
}
