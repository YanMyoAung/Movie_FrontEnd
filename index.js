function showSection(section) {
    let sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
    }
    document.getElementById(section).classList.add('active');
  
    let links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    document.querySelector('.sidebar a[href="#' + section + '"]').classList.add('active');
  }


  document.getElementById('movie_click').addEventListener("click", () => { showSection('movie')});
  document.getElementById('director_click').addEventListener("click", () => { showSection('director')});
  document.getElementById('genre_click').addEventListener("click", () => { showSection('genre')});
  document.getElementById('download_click').addEventListener("click", () => { showSection('download')});
  document.getElementById('sideImage_click').addEventListener("click", () => { showSection('sideImage')});
  document.getElementById('cast_click').addEventListener("click", () => { showSection('cast')});
  document.getElementById('gallery_click').addEventListener("click", () => { showSection('gallery')});