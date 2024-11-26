document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for 'Watch Video' buttons
    const watchButtons = document.querySelectorAll('.watch-video');
    watchButtons.forEach(button => {
      button.addEventListener('click', function() {
        const topic = this.getAttribute('data-topic');
        openModal(topic); // Open video modal for the selected topic
      });
    });
  });
  
  function openModal(topic) {
    document.getElementById('videoModal').style.display = 'flex';
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';
  
    let videos = [];
    let title = '';
  
  
    // Define video content based on the selected topic
    if (topic === 'intro') {
      title = 'Introduction to Machine Learning';
      videos = [
          '<iframe src="https://www.youtube.com/embed/h0e2HAPTGF4?si=bEP_v90P5LBoqVdZ" allowfullscreen></iframe>',
          '<iframe src="https://www.youtube.com/embed/h0e2HAPTGF4?si=bEP_v90P5LBoqVdZ" allowfullscreen></iframe>'
      ];
  } else if (topic === 'supervised') {
      title = 'Supervised Learning';
      videos = [
          '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>',
          '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>'
      ];
  } else if (topic === 'deep') {
      title = 'Deep Learning';
      videos = [
          '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>',
          '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>'
      ];
  }
    document.getElementById('modalTitle').innerText = title;
    videoGrid.innerHTML = videos.join('');
  }
  
  function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
  }