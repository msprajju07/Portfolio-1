window.addEventListener('DOMContentLoaded',()=>{
    filterProjects('all');
})


const filterButtons = document.querySelectorAll('.btn-outline-primary');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;
        filterProjects(selectedCategory);
    });
});

function filterProjects(category) {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        const projectCategory = item.querySelector('.caption p').textContent.trim(); // Get project category from the <p> element
        if (category === 'all' || projectCategory.includes(category)) {
            item.style.display = 'flex'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}


var form = document.getElementById("contact-form");
var toast = new bootstrap.Toast(document.querySelector('#toaster .toast'));

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contact-form-status");
  var data = new FormData(event.target);

  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      toast.show();
      form.reset();
    } else {
      const responseData = await response.json();
      if (Object.hasOwnProperty(responseData, 'errors')) {
        status.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
      } else {
        status.innerHTML = "Oops! There was a problem submitting your form";
      }
    }
  } catch (error) {
    console.error('Form submission error:', error);
    status.innerHTML = "Oops! There was a problem submitting your form";
  }
}

// function showToast() {
//   toast.show();
// }

form.addEventListener("submit", handleSubmit);


