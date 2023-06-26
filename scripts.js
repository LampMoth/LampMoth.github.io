//Gallery jump link
  const galleryLink = document.getElementById('gallerylink');
  const page2 = document.getElementById('page2');

  galleryLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    const page2Bottom = page2.offsetTop + page2.offsetHeight - window.innerHeight;
    window.scrollTo({ top: page2Bottom, behavior: 'smooth' });
  });

//Contact jump link
  document.getElementById('contactlink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    const page3 = document.querySelector('.Page3');
    const page3Top = page3.offsetTop;
    window.scrollTo({ top: page3Top, behavior: 'smooth' });
  });

//Home jump link
  const homeLink = document.getElementById('homelink');
  const page1 = document.querySelector('.Page1');

  homeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    page1.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  


// Change Titles to Black when reaching white background
  window.addEventListener('scroll', function() {
    var page1 = document.querySelector('.Page1');
    var title = document.querySelector('.Title');
    var underTitle = document.querySelector('.UnderTitle');
    var homeLink = document.querySelector('.Home');
    var aboutLink = document.querySelector('.About');
    var galleryLink = document.querySelector('.gallerylink');
    var contactLink = document.querySelector('.Contact');
  
    var page1Rect = page1.getBoundingClientRect();
    var top20Percent = window.innerHeight * 0.2;
  
    if (page1Rect.bottom <= top20Percent) {
      title.style.color = 'black';
      underTitle.style.color = 'black';
      homeLink.style.color = 'black';
      aboutLink.style.color = 'black';
      galleryLink.style.color = 'black';
      contactLink.style.color = 'black';
    } else {
      title.style.color = 'white';
      underTitle.style.color = 'white';
      homeLink.style.color = 'white';
      aboutLink.style.color = 'white';
      galleryLink.style.color = 'white';
      contactLink.style.color = 'white';
    }
  });
  