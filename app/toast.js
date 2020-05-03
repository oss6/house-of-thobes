export function successToast(message) {
  toast(message, 'success');
}

export function errorToast(message) {
  toast(message, 'error');
}

function toast(message, type) {
  const toast = document.createElement('div');

  toast.textContent = message;
  toast.className = `toast toast--${type}`;
  toast.addEventListener('click', () => {
    toast.remove();
  });

  setTimeout(() => {
    if (toast) {
      toast.remove();
    }
  }, 3500);

  document.body.appendChild(toast);
}
