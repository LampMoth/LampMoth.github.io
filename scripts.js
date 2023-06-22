const galleryLink = document.getElementById('gallerylink');
const page2 = document.getElementById('page2');

galleryLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  const page2Bottom = page2.offsetTop + page2.offsetHeight - window.innerHeight;
  window.scrollTo({ top: page2Bottom, behavior: 'smooth' });
});
