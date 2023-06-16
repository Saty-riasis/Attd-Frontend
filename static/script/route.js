window.addEventListener('DOMContentLoaded', function() {
  // Get the current URL path
  const currentPath = window.location.pathname;
  console.log(currentPath);

  // Define the content mapping based on routes
  const contentMapping = {
    '/Attd-Frontend/': 'home.html',
  };

  // Get the corresponding content filename based on the current path
  const contentFilename = contentMapping[currentPath];

  if (contentFilename) {
    // Fetch and inject the corresponding content HTML file
    fetch(contentFilename)
      .then(response => response.text())
      .then(html => {
        const contentElement = document.querySelector('#content');
        contentElement.innerHTML = html;
      })
      .catch(error => console.error('Error:', error));
  }
});
