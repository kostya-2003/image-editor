export default function (fileInput, previewImg, resetFilterBtn) {
    fileInput.addEventListener("change", () => {
        let file = fileInput.files[0];
        if(!file) {
            return
        };
        previewImg.src = URL.createObjectURL(file);
        previewImg.addEventListener("load", () => {
            resetFilterBtn.click();
            document.querySelector(".container").classList.remove("disable");
        });
    });
}