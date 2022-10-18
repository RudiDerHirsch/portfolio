let point = document.getElementById("point");
const onMouseMove = (e) => {
  point.style.left = e.pageX + "px";
  point.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);

export default onMouseMove;
