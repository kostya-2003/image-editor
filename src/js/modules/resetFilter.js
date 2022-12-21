import applyFilter from "./applyFilter";
import brightnessObj from "./brightness";
import rotateObj from "./rotate";

export default function (resetFilterBtn, filterOptions){
    resetFilterBtn.addEventListener("click", () => {
        brightnessObj.brightness = "100";
        brightnessObj.saturation = "100"; 
        brightnessObj.inversion = "0"; 
        brightnessObj.grayscale = "0";
        rotateObj.rotate = 0;
        rotateObj.flipHorizontal = 1;
        rotateObj.flipVertical = 1;
        
        applyFilter(
            document.querySelector(".preview-img img")
        );
        filterOptions.click()
    });
}