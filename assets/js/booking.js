// Interactive Booking Form

document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('bookingForm');
  const formMessage = document.getElementById('formMessage');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Hide any previous messages
      formMessage.style.display = 'none';
      
      // Get form data
      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());
      
      try {
        // Send data to server endpoint
        const response = await fetch('/api/book', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok && result.ok) {
          // Show success message
          formMessage.textContent = 'Thank you! Your request has been sent. Our team will contact you within 15 minutes.';
          formMessage.className = 'form-message success';
          formMessage.style.display = 'block';
          
          // Reset form
          bookingForm.reset();
        } else {
          // Show error message
          const errorMessage = result.errors ? result.errors.join(', ') : 'An error occurred. Please try again.';
          formMessage.textContent = errorMessage;
          formMessage.className = 'form-message error';
          formMessage.style.display = 'block';
        }
      } catch (error) {
        // Show error message
        formMessage.textContent = 'Network error. Please check your connection and try again.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
        console.error('Booking error:', error);
      }
    });
  }
});