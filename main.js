const form = document.querySelector('form');
const gunIcon = document.querySelector('.gun-icon');

form.addEventListener('submit', e => {
	e.preventDefault();
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;
	// TODO: handle login logic here
});

gunIcon.addEventListener('click', () => {
	// TODO: handle gun icon click event here
});
