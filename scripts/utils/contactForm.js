function displayModal() {
    const modal = document.getElementById("contact_modal");
	  modal.style.display = "block";
    document.getElementById("firstName").focus()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

const modal = document.querySelector('#contact_modal');
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const focusableContent = modal.querySelectorAll(focusableElements);
const firstFocusableElement = focusableContent[0];
const lastFocusableElement = focusableContent[focusableContent.length - 1];

document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement || document.activeElement === modal) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    }
  }
});

function SubmitForm (e) {
  e.preventDefault()
  console.log(document.getElementById("firstName").value)
  console.log(document.getElementById("lastName").value)
  console.log(document.getElementById("email").value)
  console.log(document.getElementById("message").value)
  document.getElementById("firstName").value = ""
  document.getElementById("lastName").value = ""
  document.getElementById("email").value = ""
  document.getElementById("message").value = ""
  closeModal()
}

document.querySelector("form").addEventListener("submit", SubmitForm)