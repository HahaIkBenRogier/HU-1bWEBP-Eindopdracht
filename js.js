// Login Scherm
	function Login() {
		// Variables
		var user_array = "Rogier";
		var pw_array = "1234";
		var img_array = "Rogier.png";

		// Prompt
		var user_input = document.getElementById('username').value;
		var pw_input = document.getElementById('password').value;

		// Validation
		if (!user_input.trim() && !pw_input.trim()) {
			document.getElementById('username-empty').style.display = "block";
			document.getElementById('username').style.border = "thick solid red";
			document.getElementById('password-empty').style.display = "block";
			document.getElementById('password').style.border = "thick solid red";
		}
		else if (!user_input.trim()){
			document.getElementById('username-empty').style.display = "block";
			document.getElementById('username').style.border = "thick solid red";
		} else {
			if (user_input == user_array) {
				// Meteen aanpassen wanneer je uit dit veld gaat
				document.getElementById('profileImg').style.backgroundImage= "url(" + img_array + ")";
				if (!pw_input.trim()){
					document.getElementById('password-empty').style.display = "block";
					document.getElementById('password').style.border = "thick solid red";
				} else {
					if (pw_input == pw_array) {
						window.location.href = "http://stackoverflow.com";
					}
					else {
						document.getElementById('password-error').style.display = "block";
						document.getElementById('password').style.border = "thick solid red";
					}
				}
			}
			else {
				document.getElementById('username-error').style.display = "block";
				document.getElementById('username').style.border = "thick solid red";
			}
		}
	}

	function RegistrationPanel (argument){
		if (argument == 1){ // Show
			document.getElementsByClassName("re-panel")[0].style.display = "block";
			document.getElementsByClassName("c-panel")[0].style.width = "calc(100% - 860px)";
			// Kleuren grijs maken en zorgen dat het duidelijk wordt dat hier niet geklikt kan worden
			document.getElementsByClassName("Login")[1].disabled = "disabled";
			document.getElementsByClassName("Login")[2].disabled = "disabled";
			document.getElementsByClassName("Login")[3].disabled = "disabled";
			document.getElementsByClassName("Login")[4].disabled = "disabled";
		}

// Registratie scherm
		if (argument == 0) { // Hide
			document.getElementsByClassName("re-panel")[0].removeAttribute("style");
			document.getElementsByClassName("c-panel")[0].removeAttribute("style");
			document.getElementsByClassName("Login")[1].removeAttribute("disabled");
			document.getElementsByClassName("Login")[2].removeAttribute("disabled");
			document.getElementsByClassName("Login")[3].removeAttribute("disabled");
			document.getElementsByClassName("Login")[4].removeAttribute("disabled");
		}
	}

	function Register () {
		// INPUT
		var picture_input = document.getElementById("profilepic").value;
		var surname_input = document.getElementById("surname").value;
		var lastname_input = document.getElementById("lastname").value;
		var username_input = document.getElementById("username").value;

	}