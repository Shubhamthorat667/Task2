
//password validation
const passwordInput = document.getElementById('pwd');
const passwordSuggestion = document.getElementById('password-suggestion');

passwordInput.addEventListener('input', function () {
  const enteredPassword = passwordInput.value;

  if (enteredPassword.length > 16) {
    passwordInput.value = enteredPassword.slice(0, 16);
  }

  updatePasswordSuggestion(); 
});

passwordInput.addEventListener('keydown', function (e) {
  // Allow backspace key
  if (e.key === 'Backspace') {
    passwordSuggestion.textContent = "Please enter the password"; 
    return;
  }

  // Prevent any keyboard input after the initial 16 characters
  if (passwordInput.value.length >= 16) {
    e.preventDefault();
  }
});

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('pwd');
  const viewBtn = document.getElementById('viewBtn');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    viewBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    viewBtn.textContent = 'View';
  }
}


function updatePasswordSuggestion() {
  const password = passwordInput.value;

  if (!password) {
    passwordSuggestion.textContent = "Suggestions: Enter the password.";
    passwordSuggestion.style.color = 'red';
    return false;
  } else if (password.length < 8 || password.length > 16) {
    passwordSuggestion.textContent = "Suggestions: Password must be 8-16 characters long.";
    passwordSuggestion.style.color = 'red';
    return false;
  } else if (passwordInput.validity.patternMismatch) {
    passwordSuggestion.textContent = "Suggestions: At least one lowercase, one uppercase, one digit, one special character.";
    passwordSuggestion.style.color = 'red';
    passwordSuggestion.style.width = '400px';
    return false;
  } else if (/\s/.test(password)) {
    passwordSuggestion.textContent = "Suggestions: Password should not contain white spaces.";
    passwordSuggestion.style.color = 'red';
    return false;
  } else {
    passwordSuggestion.textContent = "Valid Password";
    passwordSuggestion.style.color = 'green';
    return true;
  }
}

function validatePassword() {
  // Check if password is entered before submitting
  if (!passwordInput.value.trim()) {
    // Password not entered, show a message
    passwordSuggestion.textContent = "Enter the password.";
    passwordSuggestion.style.color = 'red';
    return false;
  } else if (!updatePasswordSuggestion()) {
    // Password validation failed, return false
    return false;
  }
  return true;
}

  
  //email validation
  const emailInput = document.getElementById('exampleInputEmail');
  const emailValidText = document.getElementById('emailValidText');

  emailInput.addEventListener('input', function () {
    const enteredEmail = emailInput.value;

    // Convert to lowercase while typing
    emailInput.value = enteredEmail.toLowerCase();

    validateEmail(); // Check email validation on input
  });

  emailInput.addEventListener('keydown', function (e) {
    // Allow backspace key
    if (e.key === 'Backspace') {
      emailValidText.textContent = "Please enter the email"; // Clear suggestion when backspacing
      return;
    }

    // Prevent any keyboard input after the initial 30 characters
    if (emailInput.value.length >= 30) {
      e.preventDefault();
    }
  });

  function validateEmail() {
    const email = emailInput.value;
  
    // Updated emailRegex
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+$/;
  
    if (!emailRegex.test(email)) {
      emailValidText.textContent = "Invalid Email";
      emailValidText.style.color = 'red';
      return false;
    } else if (email.length > 30) {
      emailValidText.textContent = "Email should be at most 30 characters long.";
      emailValidText.style.color = 'red';
      return false;
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      emailValidText.textContent = "Invalid Email format.";
      emailValidText.style.color = 'red';
      return false;
    } else {
      const comCount = (email.match(/\.com/g) || []).length;
      const inCount = (email.match(/\.in/g) || []).length;
  
      if ((comCount === 1 && inCount === 0) || (comCount === 0 && inCount === 1)) {
        emailValidText.textContent = "Valid Email";
        emailValidText.style.color = 'green';
        return true;
      } else if (comCount > 1) {
        emailValidText.textContent = "Invalid Email. Only one occurrence of .com is allowed.";
        emailValidText.style.color = 'red';
        return false;
      } else if (inCount > 1) {
        emailValidText.textContent = "Invalid Email. Only one occurrence of .in is allowed.";
        emailValidText.style.color = 'red';
        return false;
      } else if (comCount >= 1 && inCount >= 1) {
        emailValidText.textContent = "Invalid Email. .com and .in should not occur together.";
        emailValidText.style.color = 'red';
        return false;
      }
    }
  }
  
  
  
  
  
  
  //alphatext validation
  const alphatextInput = document.getElementById('alphatext');
  const alphatextValidText = document.getElementById('alphatextValidatetext');

  alphatextInput.addEventListener('input', function () {
    const enteredAlphatext = alphatextInput.value;

    // Ensure first character is capitalized
    alphatextInput.value = enteredAlphatext.charAt(0).toUpperCase() + enteredAlphatext.slice(1);

    validateAlphatext(); // Check alphatext validation on input
  });

  alphatextInput.addEventListener('keydown', function (e) {
    // Allow backspace key
    if (e.key === 'Backspace') {
      alphatextValidText.textContent = "Please enter the backspace"; // Clear suggestion when backspacing
      return;
    }

    // Prevent any keyboard input after the initial 50 characters
    if (alphatextInput.value.length >= 50) {
      e.preventDefault();
    }
  });

  function validateAlphatext() {
    const alphatext = alphatextInput.value;

    if (!/^[a-zA-Z]+$/.test(alphatext)) {
      alphatextValidText.textContent = "Text must contain only alphabetic characters.";
      alphatextValidText.style.color = 'red';
      return false;
    } else if (alphatext.length < 3) {
      alphatextValidText.textContent = "Alphatext should be at least 3 characters long.";
      alphatextValidText.style.color = 'red';
      return false;
    } else {
      alphatextValidText.textContent = "Valid Text";
      alphatextValidText.style.color = 'Green'; // Clear previous error messages
      // Additional validation logic can be added as needed
      return true;
    }
  }
  
  
  //phone no validation
  const phoneNumberInput = document.getElementById('phoneNumber');
  const phoneNumberValidText = document.getElementById('phoneNumberValidatetext');
  
  phoneNumberInput.addEventListener('input', function () {
    const enteredNumber = phoneNumberInput.value;
    
    if (enteredNumber.length > 10) {
      phoneNumberInput.value = enteredNumber.slice(0, 10);
    }
  
    // Check if the number does not start with 6, 7, 8, or 9
    if (!/^[7-9]/.test(enteredNumber)) {
      phoneNumberValidText.textContent = "Mobile number should start with 7, 8, or 9.";
      phoneNumberValidText.style.color = 'orange';
    } else {
      phoneNumberValidText.textContent = "";
     // Clear suggestion
    }
  });
  
  phoneNumberInput.addEventListener('keydown', function (e) {
    // Allow backspace key
    if (e.key === 'Backspace') {
      phoneNumberValidText.textContent = ""; // Clear suggestion when backspacing
      return;
    }
  
    // Prevent any keyboard input after the initial 10 digits
    if (phoneNumberInput.value.length >= 10) {
      e.preventDefault();
    }
  });
  
  function validatePhoneNumber() {
    const phoneNumber = phoneNumberInput.value;
  
    if (!/^\d{10}$/.test(phoneNumber)) {
      phoneNumberValidText.textContent = "Phone number must be exactly 10 digits.";
      phoneNumberValidText.style.color = 'red';
      return false;
    } else if (!/^[6-9]/.test(phoneNumber)) {
      phoneNumberValidText.textContent = "Mobile number should start with 6, 7, 8, or 9.";
      phoneNumberValidText.style.color = 'purple'; // Change color to purple
      return false;
    } else {
      phoneNumberValidText.textContent = "Valid phone number";
      phoneNumberValidText.style.color = 'green';
      return true;
    }
  }
  
  
  function validateNumericInput(input) {
    // Remove non-numeric characters from the input
    input.value = input.value.replace(/\D/g, '');
  }
  
  //Gender validation
  function validateGender() {
    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');
    const genderValidText = document.getElementById('genderValidatetext');
  
    // Your validation logic here
    if (!maleRadio.checked && !femaleRadio.checked) {
      genderValidText.textContent = "Please select a gender.";
      genderValidText.style.color = 'red';
      return false;
  
    } else {
      genderValidText.textContent = "Selection Valid"; // Clear previous error messages
      // Additional validation logic can be added as needed
      genderValidText.style.color = 'green';
      return true;
  
    }
  }
  
  
  //date valdation
  function validateBirthdate() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdateValidText = document.getElementById("birthdateValidText");
    const birthdate = new Date(birthdateInput.value); // Convert input value to a Date object
  
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the minimum allowed date (January 1, 1924)
    const minDate = new Date(1924, 0, 1);
  
    // Check if the birthdate is a valid date, is in the past, and is within the specified range
    if (!isNaN(birthdate.getTime()) && birthdate < currentDate && birthdate >= minDate) {
      // Birthdate is valid and in the past, and within the specified range
      birthdateValidText.innerText = "Birthdate is valid";
      birthdateValidText.style.color = "green";
      return true;
    } else {
      // Birthdate is invalid, in the future, or outside the specified range
      birthdateValidText.innerText = "Please enter a valid birthdate between 1/1/1924 upto today's date.";
      birthdateValidText.style.color = "red";
      return false;
    }
  }
  
  
  
  //URL Validation
  function validateURL() {
    const urlInput = document.getElementById('url');
    const urlValidText = document.getElementById('urlValidatetext');
  
    // Your validation logic here
    const enteredURL = urlInput.value;
  
    if (!isValidURL(enteredURL)) {
      urlValidText.textContent = "Please enter a valid URL ending with .com or .in then submit.";
      urlValidText.style.color = 'red';
      return false;
    } else {
      urlValidText.textContent = "valid url";
      urlValidText.style.color = 'Green';
      // Additional validation logic can be added as needed
      return true;
    }
  }
  
  function isValidURL(url) {
    // A simple check for a valid URL format
    // You may want to use a more robust library for URL validation
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+\.([a-zA-Z]{2,3})(\/[^\s]*)?$/;

    return urlPattern.test(url);
  }
  
  
  //curreny input
  const currencyInput = document.getElementById('currencyInput');
  const currencyValidText = document.getElementById('currencyValidatetext');
  
  currencyInput.addEventListener('input', function () {
    if (currencyInput.value.length >= 12) {
      currencyInput.value = currencyInput.value.slice(0, 12);
      currencyInput.disabled = false; // Enable the input after 3 digits
    }
  });
  
  currencyInput.addEventListener('keydown', function (e) {
    // Allow backspace key
    if (e.key === 'Backspace') {
      return;
    }
  
    // Prevent any keyboard input after the initial 3 digits
    if (currencyInput.value.length >= 12) {
      e.preventDefault();
    }
  
    // If exactly 3 digits, enable the input to allow modification
    if (currencyInput.value.length === 12) {
      currencyInput.disabled = false;
    }
  });
  
  function validateCurrencyField() {
    const enteredAmount = currencyInput.value;
  
    if (isNaN(enteredAmount) || enteredAmount <= 0) {
      currencyValidText.textContent = "Please enter a valid positive amount upto 12 digit then submit.";
      currencyValidText.style.color = 'red';
      return false;
    } else {
      currencyValidText.textContent = "Amount valid"; 
      currencyValidText.style.color = 'green'; 
      // Additional validation logic can be added as needed
      return true;
    }
  }
  
  
  //text validation
  const textArea = document.getElementById('textArea');
  const textareaValidText = document.getElementById('textareaValidatetext');

  textArea.addEventListener('input', function () {
    const enteredText = textArea.value;

    if (enteredText.length > 100) {
      textArea.value = enteredText.slice(0, 100);
    }

    validateTextarea(); // Check text area validation on input
  });

  textArea.addEventListener('keydown', function (e) {
    // Allow backspace key
    if (e.key === 'Backspace') {
      textareaValidText.textContent = ""; // Clear suggestion when backspacing
      return;
    }

    // Prevent any keyboard input after the initial 100 characters
    if (textArea.value.length >= 100) {
      e.preventDefault();
    }
  });

  function validateTextarea() {
    const enteredText = textArea.value.trim();
    const textLength = enteredText.length;

    if (textLength === 0) {
      textareaValidText.textContent = "Text area cannot be empty.";
      textareaValidText.style.color = 'red';
      return false;
    } else if (textLength < 10 || textLength > 100) {
      textareaValidText.textContent = "Description should be between 10 to 100 characters.";
      textareaValidText.style.color = 'red';
      return false;
    } else {
      textareaValidText.textContent = "Text valid"; // Clear previous error messages
      textareaValidText.style.color = 'green';
      // Additional validation logic can be added as needed
      return true;
    }
  }
  
  
  //checkbox validation
 function validateCheckboxes() {
    const checkbox1 = document.getElementById('vehicle1');
    const checkbox2 = document.getElementById('vehicle2');
    const checkbox3 = document.getElementById('vehicle3');
    const checkbox4 = document.getElementById('vehicle4');
    const checkboxValidText = document.getElementById('checkboxValidatetext');

    // Count the number of checked checkboxes
    const checkedCount = [checkbox1, checkbox2, checkbox3, checkbox4].filter(checkbox => checkbox.checked).length;

    // Your validation logic here
    if (checkedCount < 2) {
      checkboxValidText.textContent = "Please select at least two checkboxes.";
      checkboxValidText.style.color = 'red';
      return false;
    } else {
      checkboxValidText.textContent = "Selection valid"; // Clear previous error messages
      checkboxValidText.style.color = 'green';
      // Additional validation logic can be added as needed
      return true;
    }
  }
  
  //image upload
  function previewImage() {
    const input = document.getElementById('imageInput');
    const preview = document.getElementById('imagePreview');
  
    // Check if a file is selected
    if (input.files && input.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        // Display the selected image in the preview
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '100px';
        img.style.maxHeight = '100px';
        preview.innerHTML = ''; // Clear previous preview
        preview.appendChild(img);
      };
  
      reader.readAsDataURL(input.files[0]);
    } else {
      preview.innerHTML = ''; // Clear the preview if no file is selected
    }
  }
  
  function uploadImage() {
    const input = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
  
    if (input.files && input.files[0]) {
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; 
      const fileName = input.files[0].name;
      const fileExtension = fileName.slice((fileName.lastIndexOf(".") + 1));
  
      if (allowedExtensions.includes('.' + fileExtension.toLowerCase())) {
        imagePreview.textContent = 'Image uploaded';
        imagePreview.style.color = 'green';
      } else {
        imagePreview.textContent = 'Please check file type. Only images are allowed.';
        imagePreview.style.color = 'red';
        input.value = '';
      }
    } else {
      imagePreview.textContent = 'Please upload an image.';
      imagePreview.style.color = 'red';
    }
  }
  
  
  // Check the initial color after page load


  
  // function submit() {
  //   validateAlphatext()
  //   validateEmail()
  //   updatePasswordSuggestion()
  //   validateForm();
  //   validatePhoneNumber()
  //   uploadImage()
  //   validateCheckboxes()
  //   validateTextarea()
  //   validateCurrencyField()
  //   validateGender()
  //   validateBirthdate()
  //   validateURL()
   
  
  //   if(validateAlphatext() && validateEmail() ) {
  //     window.alert("Form submitted");
  //   }
  //   else{
  //   window.alert("please fill the form ");
  //   }
  
  // }  

  function submit() {
    const emailValid = validateEmail();
    const alphaValid = validateAlphatext();
    const urlValid = validateURL();
    const textareaValid = validateTextarea();
    const imageValid = uploadImage();
    const passwordValid = updatePasswordSuggestion();
    const phoneNumberValid = validatePhoneNumber();
    const birthdateValid = validateBirthdate();
    const currencyValid = validateCurrencyField();
    const checkboxValid = validateCheckboxes();
    const genderValid = validateGender();

    let errorMessage = "";

    // Check each validation and build error message
    if (!emailValid) errorMessage += "Email is not valid.\n";
    if (!alphaValid) errorMessage += "Alphatext is not valid.\n";
    if (!urlValid) errorMessage += "URL is not valid.\n";
    if (!textareaValid) errorMessage += "Textarea is not valid.\n";
    if (!passwordValid) errorMessage += "Password is not valid.\n";
    if (!phoneNumberValid) errorMessage += "Phone number is not valid.\n";
    if (!birthdateValid) errorMessage += "Birthdate is not valid.\n";
    if (!currencyValid) errorMessage += "Currency is not valid.\n";
    if (!checkboxValid) errorMessage += "Checkboxes are not valid.\n";
    if (!genderValid) errorMessage += "Gender is not valid.\n";

    // Display messages for each field
    if (errorMessage === "") {
        window.alert("Form submitted successfully!");
    } else {
        window.alert("Please correct the following errors:\n" + errorMessage);
    }
}
    







