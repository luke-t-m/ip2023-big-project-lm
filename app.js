
let canvas;
let ctx;
let stroke = 15;
let currentTool = "";
let colour = 'black';
let isMouseDown = false;
let drawnPoints = [];
let selected_tool;



window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  addEventListener("mousedown", (event) => {
    currentPosition = getMousePos(event);
    ctx.moveTo(currentPosition.x, currentPosition.y);
    isMouseDown = true;
    switch(currentTool) {
      case "brush":
        ctx.beginPath();
        ctx.lineWidth = stroke;
        ctx.lineCap = 'round';
        ctx.strokeStyle = colour;
        break;

      case "pencil":
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = colour;
        break;
      
      case "eraser":
        ctx.beginPath();
        ctx.lineWidth = stroke;
        ctx.lineCap = 'round';
        ctx.strokeStyle = "white";
        break;

    }

  });
  addEventListener("mousemove", (event) => {
    if (isMouseDown) {
      switch (currentTool) {
        case "brush":
        case "pencil":
        case "eraser":
          currentPosition = getMousePos(event);
          ctx.lineTo(currentPosition.x, currentPosition.y);
          ctx.stroke();
          break;
        
      }
    }


  });
  addEventListener("mouseup", (event) => {
    isMouseDown = false



  });


  console.log("window loaded!!")


}

function getMousePos(e) {
  x = e.clientX;
  y = e.clientY;
  bounds = canvas.getBoundingClientRect();
  console.log(x, y, bounds.top, bounds.left)
  x -= bounds.left;
  y -= bounds.top;
  return {
    x: x,
    y: y
  }
}






function selectTool(toolName) {
  if (selected_tool) {
    selected_tool.className = "not_selected"
    console.log(selected_tool)
  }
  currentTool = toolName
  selected_tool = document.getElementById(toolName)
  selected_tool.className = "selected"


}