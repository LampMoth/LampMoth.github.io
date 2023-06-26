  const galleryLink = document.getElementById('gallerylink');
  const page2 = document.getElementById('page2');

  galleryLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    const page2Bottom = page2.offsetTop + page2.offsetHeight - window.innerHeight;
    window.scrollTo({ top: page2Bottom, behavior: 'smooth' });
  });


  document.getElementById('contactlink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    const page3 = document.querySelector('.Page3');
    const page3Top = page3.offsetTop;
    window.scrollTo({ top: page3Top, behavior: 'smooth' });
  });



