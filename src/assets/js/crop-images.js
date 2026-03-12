document.addEventListener("DOMContentLoaded", () => {
  // Find all parents with attribute data-crop-images
  const parents = document.querySelectorAll("[data-crop-images]");

  parents.forEach((parent) => {
    const images = parent.querySelectorAll("img");

    images.forEach((img) => {
      // Wait for image load
      if (img.complete) {
        cropImage(img);
      } else {
        img.onload = () => cropImage(img);
      }
    });
  });

  function cropImage(img) {
    const parent = img.parentElement;

    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // If image is smaller than parent, leave it as is
    if (imgWidth <= parentWidth && imgHeight <= parentHeight) {
      return;
    }

    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = parentWidth;
    canvas.height = parentHeight;

    const ctx = canvas.getContext("2d");

    // Calculate scale and crop
    const scale = Math.max(parentWidth / imgWidth, parentHeight / imgHeight);
    const newWidth = imgWidth * scale;
    const newHeight = imgHeight * scale;

    const offsetX = (parentWidth - newWidth) / 2;
    const offsetY = (parentHeight - newHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

    canvas.className = img.className;
    canvas.style.cssText = img.style.cssText;
    canvas.setAttribute("alt", img.getAttribute("alt") || "");

    // Replace image src with canvas data
    img.replaceWith(canvas);
  }
});