let img = document.querySelector("img");
let btn = document.querySelectorAll("button");
let imgNum = 0;
let imgArr = [
    "https://media.istockphoto.com/id/1597475039/photo/abstract-colorful-glass-background.jpg?s=1024x1024&w=is&k=20&c=69iVajUD3esSholVtX_X2zuLmJg0NKsWodjfb42Ao70=",
  "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=1024x1024&w=is&k=20&c=aA2czcJSdCtbvP2VTbnY_BVmox-c0KGdoXXIwB_P44o=",
  "https://media.istockphoto.com/id/497279046/vector/design-concept-of-travel-world-landmarks.jpg?s=1024x1024&w=is&k=20&c=NvDG2C9yQfdVG5TbPCjFivzUW6e1fCz4hN97bl6MOPo=",
  "https://media.istockphoto.com/id/654016580/vector/travel-concept-around-the-world-with-famous-international-landmarks.jpg?s=1024x1024&w=is&k=20&c=73e5jqdZbWHf3Ps14d9kIoQ5d95F4RGb5d3eWlB4eis=",
  "https://media.istockphoto.com/id/867047736/photo/travel-and-tourism.jpg?s=1024x1024&w=is&k=20&c=nWMYve1A5c-sHxsNy7gFnrZA7J4FMOHFJtM7I8jliuw=",
  "https://media.istockphoto.com/id/1299198919/photo/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-white-sandbar-beach.jpg?s=1024x1024&w=is&k=20&c=2jD-V99G15zcEAwToecyU5s5NDwm2pt-pU1bqgZuJKc=",
];

btn[0].addEventListener("click", function(){
    if(imgNum==0){
        imgNum=imgArr.length-1
    }
    else{
        imgNum--
    }
    img.src=imgArr[imgNum]
});
btn[1].addEventListener("click",function(){
    if(imgNum==imgArr.length-1){
        imgNum=0
    }
    else{
      imgNum++
    }
    img.src=imgArr[imgNum]
})
 
//or

// btn[0].addEventListener("click", showPreviousImage);
// function showPreviousImage() {
//     if (imgNum == 0) {
//         imgNum = imgArr.length - 1;
//     } else {
//         imgNum--;
//     }
//     img.src = imgArr[imgNum];
// }

// btn[1].addEventListener("click", showNextImage)
// function showNextImage() {
//     if (imgNum == imgArr.length - 1) {
//         imgNum = 0;
//     } else {
//         imgNum++;
//     }
//     img.src = imgArr[imgNum];
// }