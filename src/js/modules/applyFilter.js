import brightnessObj from "./brightness";
import rotateObj from "./rotate";

export default function (previewImg) {
    previewImg.style.transform = `rotate(${rotateObj.rotate}deg) scale(${rotateObj.flipHorizontal}, ${rotateObj.flipVertical})`;
    previewImg.style.filter = `brightness(${brightnessObj.brightness}%) saturate(${brightnessObj.saturation}%) invert(${brightnessObj.inversion}%) grayscale(${brightnessObj.grayscale}%)`;
}