import brightnessObj from "./brightness";

export default function (filterOptions, filterName, filterSlider, filterValue){
    filterOptions.forEach(option => {
        option.addEventListener("click", () => {
            option.id = option.value.toLowerCase()
            filterName.innerText = option.id;
            switch(option.id){
                case "brightness":
                    filterSlider.max = "200";
                    filterSlider.value = brightnessObj.brightness;
                    filterValue.innerText = `${brightnessObj.brightness}%`;
                break;
                case "saturation":
                    filterSlider.max = "200";
                    filterSlider.value = brightnessObj.saturation;
                    filterValue.innerText = `${brightnessObj.saturation}%`
                break;
                case "inversion":
                    filterSlider.max = "100";
                    filterSlider.value = brightnessObj.inversion;
                    filterValue.innerText = `${brightnessObj.inversion}%`;
                break;
                case "grayscale":
                    filterSlider.max = "100";
                    filterSlider.value = brightnessObj.grayscale;
                    filterValue.innerText = `${brightnessObj.grayscale}%`;
                break;
            }
        })
        
    });
}