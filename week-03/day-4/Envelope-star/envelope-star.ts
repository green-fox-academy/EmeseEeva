
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function envelopeStar() {

    for (let y = 0; y < canvas.height / 2; y += 10) {


        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(canvas.width / 2 + y, canvas.height / 2);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y);
        ctx.lineTo(canvas.width / 2 - y, canvas.height / 2);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height-y);
        ctx.lineTo(canvas.width / 2 + y, canvas.height / 2);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height-y);
        ctx.lineTo(canvas.width / 2 - y, canvas.height / 2);
        ctx.stroke();

    }
}

envelopeStar();