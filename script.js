//wybór elementów
//określenie wymogów w formie arrays
//stworzenie funkcji
//sprawdzanie każdego warunku 
const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");

const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
	//console.log(pass.value.length);
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = "Super hasło!";
		p.style.color = "lime";
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = "Dobre hasło";
		p.style.color = "gold";
	} else {
		p.textContent = "Słabe hasło";
		p.style.color = "red";
	}
};

const checkPassword = () => {
	if (pass.value !== "") {
		showMsg();
	} else {
		p.textContent = "Nie podałeś hasła";
		p.style.color = "";
	}
};

/^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2.3}$/i;

pass.addEventListener("keyup", showMsg);
