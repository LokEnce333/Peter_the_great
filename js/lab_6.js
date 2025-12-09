// Задание 1
let header = document.querySelector('h1').textContent;
console.log(header);

// Задание 2
let date = document.querySelector(".time");
date.addEventListener("click", () => {
    let dateATime = new Date();
    alert("Текущая дата и время:\n " + dateATime.getDay() + '.' + dateATime.getMonth() + '.' + dateATime.getFullYear() + '\n' + dateATime.getHours() + ':' + dateATime.getMinutes() + ':' + dateATime.getSeconds());
})

// Задание 3
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const reviewTextarea = document.getElementById('review-text');
  const greeting = document.getElementById('greeting');
  const successMessage = document.getElementById('success-message');

  const savedName = localStorage.getItem('contact_name');
  const savedReview = localStorage.getItem('contact_review');

  if (savedName) {
    greeting.textContent = 'Добрый день, ' + savedName;
    greeting.style.display = 'block';
  }

  if (savedReview && reviewTextarea) {
    reviewTextarea.value = savedReview;
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let userName = savedName;
      if (!userName) {
        userName = prompt('Введите, пожалуйста, ваше имя:') || '';
      }
      const reviewValue = reviewTextarea ? reviewTextarea.value.trim() : '';
      localStorage.setItem('contact_name', userName);
      localStorage.setItem('contact_review', reviewValue);

      form.style.display = 'none';

      if (successMessage) {
        successMessage.style.display = 'block';
      }

      if (userName) {
        greeting.textContent = 'Добрый день, ' + userName;
        greeting.style.display = 'block';
      }
    });
  }
});
