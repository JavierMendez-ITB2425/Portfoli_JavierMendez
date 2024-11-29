// Función para validar el formulario
function validateForm(event) {
  // Prevenir el envío del formulario por defecto
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const phonePrefix = document.getElementById('phonePrefix').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const comment = document.getElementById('comment').value;

  // Validar los campos
  if (name.trim() === '' || surname.trim() === '' || phone.trim() === '' || email.trim() === '' || gender.trim() === '') {
    // Mostrar un mensaje de error si algún campo está vacío
    showFormMessage('Por favor, completa todos los campos.', false);
    return false;
  }

  // Si todo está válido, mostrar el mensaje de éxito y redirigir a la página index.html
  showFormMessage('¡Formulario enviado correctamente!', true);
  setTimeout(() => {
    window.location.href = '../index.html';
  }, 2000); // Esperar 2 segundos antes de redirigir

  return true;
}

// Función para mostrar el mensaje en el formulario
function showFormMessage(message, isSuccess) {
  const formMessage = document.getElementById('formMessage');
  formMessage.innerHTML = message;
  formMessage.classList.add(isSuccess ? 'form-message-success' : 'form-message-error');
  formMessage.style.display = 'block';

  setTimeout(() => {
    formMessage.style.display = 'none';
    formMessage.classList.remove('form-message-success', 'form-message-error');
  }, 3000); // Ocultar el mensaje después de 3 segundos
}

// Función para agregar animación a los proyectos en la página index.html
function animateProjects() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.style.transition = 'all 0.5s ease';
    }, index * 200);
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

// Ejecutar las funciones de animación y interacción según la página actual
if (window.location.pathname.includes('index.html')) {
  animateProjects();
  animateProfile();
  animateFooterLinks();
} else if (window.location.pathname.includes('formulari.html')) {
  // No hay animaciones específicas para la página del formulario
} else if (window.location.pathname.includes('projecte.html')) {
  animateProjectPage();
}