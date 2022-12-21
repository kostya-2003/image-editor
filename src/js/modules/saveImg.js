import brightnessObj from "./brightness";
import rotateObj from "./rotate";

export default function (saveImgBtn, previewImg){
    saveImgBtn.addEventListener("click", () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = previewImg.naturalWidth;
        canvas.height = previewImg.naturalHeight;
        
        ctx.filter = `brightness(${brightnessObj.brightness}%) saturate(${brightnessObj.saturation}%) invert(${brightnessObj.inversion}%) grayscale(${brightnessObj.grayscale}%)`;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        if(rotateObj.rotate !== 0) {
            ctx.rotate(rotateObj.rotate * Math.PI / 180);
        }
        ctx.scale(rotateObj.flipHorizontal, rotateObj.flipVertical);
        ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        
        const link = document.createElement("a");
        link.download = "image.jpg";
        link.href = canvas.toDataURL();
        link.click();
    });
}