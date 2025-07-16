function navigateTo(sectionId) {
  // Ocultar todas las secciones
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  // Mostrar la sección deseada
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    
    // Desplazamiento suave hacia el inicio de la sección
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // Marcar botón activo (opcional)
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(btn => btn.classList.remove('active-button'));

  const clickedButton = [...buttons].find(btn =>
    btn.getAttribute('onclick')?.includes(sectionId)
  );

  if (clickedButton) {
    clickedButton.classList.add('active-button');
  }
}
