import applyFilter from "./applyFilter";
import rotateObj from "./rotate";

export default function(rotateOptions){
    rotateOptions.forEach(option => {
        option.addEventListener("click", () => {
            switch(option.id){
                case "left":
                    rotateObj.rotate -= 90;
                break;
                case "right":
                    rotateObj.rotate += 90;
                break;
                case "horizontal":
                    rotateObj.flipHorizontal = rotateObj.flipHorizontal === 1 ? -1 : 1;
                break;
                case "vertical":
                    rotateObj.flipVertical = rotateObj.flipVertical === 1 ? -1 : 1;
                break;
            }
            
            applyFilter(
                document.querySelector(".preview-img img")
            );
        });
    });
}