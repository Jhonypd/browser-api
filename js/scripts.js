/** @format */

function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);

  event.currentTarget.style.backgroundColor = "gray";
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();
}

// window.addEventListener("DOMContentLoaded", () => {
//   const drag = document.querySelector("#drag-1");

//   drag.addEventListener("dragstart", dragStart);
// });

window.addEventListener("resize", function () {
  if (this.innerWidth < 720) {
    this.document.body.style.backgroundColor = "#333";
    this.document.body.style.color = "#eee";
  } else {
    this.document.body.style.backgroundColor = "#fff";
    this.document.body.style.color = "#000";
  }
});
