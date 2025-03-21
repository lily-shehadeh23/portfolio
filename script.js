function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const menuIcon = document.querySelector(".bx-menu");
    const closeIcon = document.querySelector(".bx-x");
  
    menu.classList.toggle("open");
  
    if (menu.classList.contains("open")) {
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  }


  function showContent(section) {
    const contentSections = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.bt'); // Select all buttons

    // Hide all sections
    contentSections.forEach(content => {
        content.style.display = 'none';
        content.style.opacity = 0;
    });

    // Show the selected section
    const selectedSection = document.getElementById(section);
    selectedSection.style.display = 'block';

    setTimeout(() => {
        selectedSection.style.opacity = 1;
    }, 50);

    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    document.querySelector(`[onclick="showContent('${section}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('project').style.display = 'block';
    document.getElementById('project').style.opacity = 1;

    document.getElementById('certificates').style.display = 'none';
    document.getElementById('tech-stack').style.display = 'none';

    document.querySelector(`[onclick="showContent('project')"]`).classList.add('active');
});

function toggleVideo() {
    let videoContainer = document.getElementById("video-container");
    videoContainer.style.display = videoContainer.style.display === "none" ? "block" : "none";
}