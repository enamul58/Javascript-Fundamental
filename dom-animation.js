function moveBox() {
  let boxMove = document.querySelector(".box");
  let move = 0;

  let instanceOfSetInterval = setInterval(singleStepMove, 10);

  function singleStepMove() {
    if (move < 350) {
      move++;
      boxMove.style.top = move + "px";
      boxMove.style.left = move + "px";
    } else {
      clearInterval(instanceOfSetInterval);
    }
  }
}
