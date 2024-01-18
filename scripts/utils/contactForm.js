function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.getElementById("first").focus()
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