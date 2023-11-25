function notify() {
  const emailInput = document.getElementById('email');
  const notificationType = document.getElementById('notificationType');
  const subscriptionStatus = document.getElementById('subscriptionStatus');

  const isSuccess = true;

  if (isSuccess) {
    subscriptionStatus.textContent = `Subscription successful! You will receive ${notificationType.value} notifications at ${emailInput.value}.`;
    subscriptionStatus.style.backgroundColor = '#2ecc71';
  } else {
    subscriptionStatus.textContent = 'Failed to subscribe. Please try again.';
    subscriptionStatus.style.backgroundColor = '#e74c3c';
  }
}
