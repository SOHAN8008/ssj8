// Use an array of image objects to populate the gallery
const galleryImages = [
  { src: "images/flowers-white.jpg", alt: "Thumbnail 1", caption: "White Flowers" },
  { src: "images/flowers-yellow.jpg", alt: "Thumbnail 2", caption: "Yellow Flowers" },
  { src: "images/flowers-pink.jpg", alt: "Thumbnail 3", caption: "Pink Flowers" },
  { src: "images/flowers-purple.jpg", alt: "Thumbnail 4", caption: "Purple Flowers" },
  { src: "images/flowers-red.jpg", alt: "Thumbnail 5", caption: "Red Flowers" },
  // Add more images as needed
];

const featuredImage = document.getElementById('featured-image');
const caption = document.getElementById('caption');
const thumbnails = document.getElementById('thumbnails');

// Build the <ul> thumbnail list from the array of images
galleryImages.forEach((image, index) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  
  img.src = image.src;
  img.alt = image.alt;
  img.className = 'thumbnail';
  img.dataset.index = index;

  img.addEventListener('click', () => {
    featuredImage.src = image.src.replace('.jpg', '-large.jpg'); // full-sized version
    featuredImage.alt = image.alt;

    caption.textContent = image.caption;

    thumbnails.querySelectorAll('.thumbnail').forEach((t) => t.classList.remove('active'));

    img.classList.add('active');
  });

  li.appendChild(img);
  thumbnails.appendChild(li);
});

// Load the first image into the featured image
thumbnails.firstChild.firstChild.click();
