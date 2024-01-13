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

// ... (previous code remains the same)

function filterProjects(category) {
    debugger;
    const projectItems = document.querySelectorAll('.project-item');
  
    projectItems.forEach(item => {
      const projectCategory = item.querySelector('.caption p').textContent.trim();
      const projectTitle = item.querySelector('.caption h4').textContent.trim();
  
      if (category === 'all') {
        item.style.display = 'flex';
      } else if (category === 'des-dev' &&
         (projectTitle === 'Salt N Peppa' ||
          projectTitle === 'Urban Crust' ||
          projectTitle === 'Employee CRUD')) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
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


