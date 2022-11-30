import throttle from 'lodash.throttle';

const FEEDBACKFORMDATA_KEY = "feedback-form-state";

const feedbackFormEl = document.querySelector('.feedback-form');
feedbackFormEl.addEventListener('input' , throttle(onFormInput, 500));
feedbackFormEl.addEventListener('submit' , onFormSubmit);

const textareaEl = document.querySelector('.feedback-form textarea')
const emailEl = document.querySelector('.feedback-form input')

const data = {};

initForm();



function onFormInput(event) {
data[event.target.name] = event.target.value;

localStorage.setItem(FEEDBACKFORMDATA_KEY, JSON.stringify(data));
}

function onFormSubmit (event) {

event.preventDefault();
event.currentTarget.reset();
console.log(JSON.parse(localStorage.getItem(FEEDBACKFORMDATA_KEY)));
localStorage.removeItem(FEEDBACKFORMDATA_KEY);
}

function initForm() {
const storagedData = JSON.parse(localStorage.getItem(FEEDBACKFORMDATA_KEY));
if (storagedData) {

emailEl.value = storagedData.email;
textareaEl.value = storagedData.message;
}
}
