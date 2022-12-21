import loadImage from "./modules/loadImage";
import choseImg from "./modules/choseImg";
import filterOption from "./modules/filterOption";
import updateFilter from "./modules/updateFilter";
import rotateOption from "./modules/rotateOption";
import resetFilter from "./modules/resetFilter";
import saveImg from "./modules/saveImg"

loadImage(
    document.querySelector(".file-input"),
    document.querySelector(".preview-img img"),
    document.querySelector(".reset-filter")
)

choseImg(
    document.querySelector(".choose-img"),
    document.querySelector(".file-input")
)

filterOption(
    document.querySelectorAll(".filter select"),
    document.querySelector(".filter-info .name"),
    document.querySelector(".slider input"),
    document.querySelector(".filter-info .value")
)

updateFilter(
    document.querySelector(".slider input"),
    document.querySelector(".filter-info .value")
)

rotateOption(
    document.querySelectorAll(".rotate button")
)
    
resetFilter(
    document.querySelector(".reset-filter"),
    document.querySelector(".filter .options")
)

saveImg(
    document.querySelector(".save-img"),
    document.querySelector(".preview-img img")
)
