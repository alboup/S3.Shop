function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fPhone = document.getElementById("fPhone");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorPhone = document.getElementById("errorPhone");
	var errorPassword = document.getElementById("errorPassword");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	
	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value.length < 3 || fEmail.value.length < 3 || 
		fPhone.value.length < 3 || fPassword.value.length < 3 || 
		fAddress.value.length < 3 || fLastN.value.length < 3) {

		error++;
		// fName.classList.add("is-invalid");
		// fEmail.classList.add("is-invalid");
		// fPhone.classList.add("is-invalid");
		// fPassword.classList.add("is-invalid");
		// fAddress.classList.add("is-invalid");
		// fLastN.classList.add("is-invalid");
	}

	if (fName.value.length < 3 || fName.value.match(/^[a-zA-Z]+$/) == null) { 
		error++;
		fName.classList.add("is-invalid");
	}
	if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fEmail.value) || fEmail.value.length < 3) {
		error++;
		fEmail.classList.add("is-invalid");
	}
	if (fPhone.value.match(/^[0-9]+$/) == null || fPhone.value.length < 3) {
		error++;
		fPhone.classList.add("is-invalid");
	}

	
	if (fPassword.value.length < 3 || !/[a-zA-Z]/.test(fPassword.value) 
		|| !/[0-9]/.test(fPassword.value)) {
		error++;
		// fPassword.classList.add("is-invalid");
	}
	
	
	 console.log(error);
	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}
