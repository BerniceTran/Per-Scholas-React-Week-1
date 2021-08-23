let mName: string = "Adam";
console.log(name);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

var myRect = [];
function Rectangle(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
}

function Circle(x, y, radius, startAngle, endAngle, fill) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle
    this.fill = fill;
}
// const colorCheck = ["red", "green", "blue", "yellow", "black"];

let color: string = "";
let x: number = 0;
let y: number = 0;

let width: number = 0;
let height: number = 0;

let radius: number = 0;

let i = 0;

let shape: string = "";

function selectShapes()
{
    let inputVal: string = document.getElementById("shape").value;
    shape = inputVal;

    // console.log(shape);
}

function selectColor()
{
    let inputVal: string = document.getElementById("color").value;
    color = inputVal;

    // console.log(color);
}

function getInputYValue()
{
    let inputVal: number = document.getElementById("myInputY").value;

    y = inputVal;
}

function getInputXValue()
{
    let inputVal: number = document.getElementById("myInputX").value;

    x = inputVal;
}

function getWidthValue()
{
    let inputVal: number = document.getElementById("myInputWidth").value;

    width = inputVal;
}

function getHeightValue()
{
    let inputVal: number = document.getElementById("myInputHeight").value;

    height = inputVal;
}

function getRadius()
{
    let inputVal: number = document.getElementById("myInputRadius").value;

    radius = inputVal;
}

function getInputValue()
{
                
    // for(let i = 0; i < inputVal; i++)
    // {
        //Generate x y coords, offset by the top x,y of the leaf:
        if(shape == "rectangle")
        {
            let rand = Math.floor(Math.random() * 5);
    
            myRect.push(new Rectangle(x, y, width, height, color));
    
    
            let oRec = myRect[i];
            ctx.fillStyle = oRec.fill;
            ctx.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);
            // x += 10;
            // y += 10;
    
            i += 1;
            x = 0;
            y = 0;
            width = 0;
            height = 0;

        }
        else if(shape == "circle")
        {
            let c = new Circle(x, y, radius, 0, 2 * Math.PI, color);
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.radius, 0, 2 * Math.PI);
            // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            // let color = selectColor();
            // console.log("circle", color);
            ctx.fillStyle=c.fill;
            ctx.fill();
            ctx.stroke();
        }
    // }
}