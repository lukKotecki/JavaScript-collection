const element = document.getElementById('element')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
// const img = document.getElementById('img')
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const button = document.getElementById('button')
const width = document.getElementById('width')



// button.addEventListener('click', grayscale)

// input.addEventListener('change', e=>{
//     var URL = window.URL;
//     var url = URL.createObjectURL(e.target.files[0]);
//     img.src = url;
//     img.onload = function() {
//         var imgSize = calculateAspectRatioFit(img.width, img.height, canvas.clientWidth, canvas.clientHeight);
    
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(img, 0, 0, imgSize.width, imgSize.height);
//     }
// })

// function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
// var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
// var rtnWidth = srcWidth * ratio;
// var rtnHeight = srcHeight * ratio;
// return {
//     width: rtnWidth,
//     height: rtnHeight
// };
// }

// const img = new Image();
// // img.crossOrigin = "anonymous";
// img.src = "./assets/images.jpeg";
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 0, 0);
//   img.style.display = "none";
// }); 
// const selectedColor = document.getElementById("selected-color");

// function pick(event, destination) {
//   const bounding = canvas.getBoundingClientRect();
//   const x = event.clientX - bounding.left;
//   const y = event.clientY - bounding.top;
//   const pixel = ctx.getImageData(x, y, 1, 1);
//   const data = pixel.data;

//   const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`;
//   console.log(rgbColor) 

// //   grayscale()
//   return rgbColor;
// }
 
// canvas.addEventListener("click", (event) => pick(event, selectedColor));

// function grayscale() {
//     ctx.drawImage(img, 0, 0);
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;
//     for (let i = 0; i < data.length; i += 4) {
//       const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
//       data[i] = avg; // red
//       data[i + 1] = avg; // green
//       data[i + 2] = avg; // blue
//     }
//     ctx.putImageData(imageData, 0, 0);
//   };
  


input.addEventListener('change',(e)=>{
    e.preventDefault()
    const image = new Image()

    let URL = window.URL;
    let url = URL.createObjectURL(e.target.files[0]);
    image.src = url;

    console.log(url)

    canvas.width = width.value
    canvas.height = 100

    image.addEventListener('load', ()=>{
        // ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    })

})

