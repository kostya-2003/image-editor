import applyFilter from "./applyFilter";
import brightnessObj from "./brightness";

export default function (filterSlider, filterValue){
    filterSlider.addEventListener("input", () => {
        filterValue.textContent = `${filterSlider.value}%`;
        const selectedFilter = document.querySelector(".filter .options");
        switch(selectedFilter.id){
            case "brightness":
                brightnessObj.brightness = filterSlider.value;
            break;
            case "saturation":
                brightnessObj.saturation = filterSlider.value;
            break;
            case "inversion":
                brightnessObj.inversion = filterSlider.value;
            break;
            case "grayscale":
                brightnessObj.grayscale = filterSlider.value;
            break;
        }
        applyFilter(
            document.querySelector(".preview-img img")
        )
    });
    
}