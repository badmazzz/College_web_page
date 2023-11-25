document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('bookingForm');
  const bookingResult = document.getElementById('bookingResult');

  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(bookingForm);

    fetch('book_resource.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      bookingResult.innerHTML = data.message;
    })
    .catch(error => {
      console.error('Error:', error);
      bookingResult.innerHTML = 'An error occurred. Please try again.';
    });
  });
});
