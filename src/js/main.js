function animateProjects() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card, index) => {
    // Aplicar animación al contenedor completo del proyecto
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.style.transition = 'all 0.5s ease';
    }, index * 200);

    // Animación adicional para la imagen si existe
    const projectImage = card.querySelector('img');
    if (projectImage) {
      projectImage.style.opacity = '0';
      projectImage.style.transform = 'scale(0.9)';

      setTimeout(() => {
        projectImage.style.opacity = '1';
        projectImage.style.transform = 'scale(1)';
        projectImage.style.transition = 'all 0.5s ease';
      }, index * 200);
    }
  });
}

// Función para agregar animación al perfil en la página index.html
function animateProfile() {
  const profileImage = document.querySelector('.profile-image');
  const profileDescription = document.querySelector('.personal-description h2, .personal-description p');

  profileImage.style.opacity = '0';
  profileImage.style.transform = 'scale(0.8)';

  profileDescription.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
  });

  setTimeout(() => {
    profileImage.style.opacity = '1';
    profileImage.style.transform = 'scale(1)';
    profileImage.style.transition = 'all 0.5s ease';

    profileDescription.forEach((element) => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      element.style.transition = 'all 0.5s ease';
    });
  }, 500);
}

// Función para agregar animación a los enlaces del footer en la página index.html
function animateFooterLinks() {
  const footerLinks = document.querySelectorAll('.info-item a');

  footerLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateX(-20px)';

    setTimeout(() => {
      link.style.opacity = '1';
      link.style.transform = 'translateX(0)';
      link.style.transition = 'all 0.5s ease';
    }, index * 100);
  });
}

// Función para agregar animación a los elementos de la página de proyectos
function animateProjectPage() {
  const projectHeader = document.querySelector('.project-header');
  const projectMainImage = document.querySelector('.project-main-image');
  const projectDescription = document.querySelector('.project-description-main');
  const projectGallery = document.querySelectorAll('.gallery-item');

  // Animación del encabezado del proyecto
  projectHeader.style.opacity = '0';
  projectHeader.style.transform = 'translateY(-50px)';

  // Animación de la imagen principal del proyecto
  projectMainImage.style.opacity = '0';
  projectMainImage.style.transform = 'scale(0.9)';

  // Animación de la descripción del proyecto
  projectDescription.style.opacity = '0';
  projectDescription.style.transform = 'translateY(30px)';

  // Animación de la galería de imágenes
  projectGallery.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
  });

  // Aplicar las animaciones después de un retraso
  setTimeout(() => {
    projectHeader.style.opacity = '1';
    projectHeader.style.transform = 'translateY(0)';
    projectHeader.style.transition = 'all 0.5s ease';

    projectMainImage.style.opacity = '1';
    projectMainImage.style.transform = 'scale(1)';
    projectMainImage.style.transition = 'all 0.5s ease';

    projectDescription.style.opacity = '1';
    projectDescription.style.transform = 'translateY(0)';
    projectDescription.style.transition = 'all 0.5s ease';

    projectGallery.forEach((item, index) => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
      item.style.transition = `all 0.5s ease ${index * 0.2}s`;
    });
  }, 300);
}

// Función para agregar animación a los elementos de la página de lista de proyectos
function animateProjectListPage() {
  const projectListItems = document.querySelectorAll('.project-list-item');

  projectListItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
      item.style.transition = 'all 0.5s ease';
    }, index * 200);
  });
}

// Ejecutar las funciones de animación y interacción según la página actual
if (window.location.pathname.includes('index.html')) {
  showClock();
  animateProjects();
  animateProfile();
  animateFooterLinks();
} else if (window.location.pathname.includes('formulari.html')) {
  showClock();
} else if (window.location.pathname.includes('projecte.html')) {
  showClock();
  animateProjectPage();
} else if (window.location.pathname.includes('llistat.html')) {
  showClock();
  animateProjectListPage();
}

function animateProfile() {
  const profileImage = document.querySelector('.profile-image img');
  const profileTitle = document.querySelector('.personal-description h2');
  const profileDescription = document.querySelector('.personal-description p');

  // Reset initial state
  profileImage.style.opacity = '0';
  profileImage.style.transform = 'scale(0.7) rotate(-15deg)';

  profileTitle.style.opacity = '0';
  profileTitle.style.transform = 'translateY(30px)';

  profileDescription.style.opacity = '0';
  profileDescription.style.transform = 'translateY(40px)';

  // Animate with staggered effect
  setTimeout(() => {
    profileImage.style.opacity = '1';
    profileImage.style.transform = 'scale(1) rotate(0deg)';
    profileImage.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    setTimeout(() => {
      profileTitle.style.opacity = '1';
      profileTitle.style.transform = 'translateY(0)';
      profileTitle.style.transition = 'all 0.6s ease';

      setTimeout(() => {
        profileDescription.style.opacity = '1';
        profileDescription.style.transform = 'translateY(0)';
        profileDescription.style.transition = 'all 0.6s ease';
      }, 200);
    }, 300);
  }, 300);
}
