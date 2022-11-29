import throttle from 'lodash.throttle';

const FEEDBACKFORMDATA_KEY = "feedback-form-state";

const feedbackFormEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea')

let data = {};

initForm();

feedbackFormEl.addEventListener('input' , throttle(onFormInput, 500));
feedbackFormEl.addEventListener('submit' , onFormSubmit);

function onFormInput(event) {
data = JSON.parse(localStorage.getItem(FEEDBACKFORMDATA_KEY)) || {};
data[event.target.name] = event.target.value;

localStorage.setItem(FEEDBACKFORMDATA_KEY, JSON.stringify(data));
}

function onFormSubmit (event) {
event.preventDefault();
if (!event.target.email.value || !event.target.message.value) {
alert('Необхідно заповнити всі поля');
return;
}

event.currentTarget.reset();
console.log(data);
localStorage.removeItem(FEEDBACKFORMDATA_KEY);
}

function initForm() {
const storageData = localStorage.getItem(FEEDBACKFORMDATA_KEY);
if (storageData) {
const localData = JSON.parse(storageData);
feedbackFormEl.value = localData.email || '';
textareaEl.value = localData.message || '';
}
}
