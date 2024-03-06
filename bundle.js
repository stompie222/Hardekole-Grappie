const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const responseElement = document.getElementById('response');

noButton.addEventListener('click', () => {
	yesButton.style.transform = 'scale(1.1)';
	setTimeout(() => {
		yesButton.style.transform = 'scale(1)';
	}, 100);
});

yesButton.addEventListener('click', () => {
	responseElement.style.fontWeight = 'bold';
	responseElement.style.fontSize = '1.2em';
	responseElement.innerText = 'Yes? , You are officially Marco's Valentine!!';
});
