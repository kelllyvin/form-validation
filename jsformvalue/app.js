const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const captcha = document.querySelector("#captcha");

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

console.log(passwordRegex.test("Password01$"));


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkinputs();
});

function checkinputs() {
  const usernameValue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const password2value = password.value.trim();
  const captchvalue = captcha.value.trim();

  if (usernameValue === "") {
    setError(username, "username is required");
  } else if (usernameValue.length < 5) {
    setError(username, "minimum username length is 5");
  } else {
    setSuccess(username);
  }

  if (emailvalue === "") {
    setError(email, "email is required");
  
  } else if (!emailvalue.text(emailvalue)) {
    setError(email, "invalid email");
  } else {
    setSuccess(email);
  }

  if (passwordvalue === "") {
    setError(password, "password required");
  } else if (!passwordRegex.test(passwordvalue)) {
    setError(password, " uppercase,lowercase and special characters with min length of 8 ");
  } else {
    setSuccess(password);
  }

  if(password2value ===""){
    setError(password2," confirmed password ")
  } else if(password2value !== password){
    setError(password2,"password does not match")
  } else{
    setSuccess(password2)
  }

  if(captchvalue ===""){
    setError(captcha, "Authentication failed")
  }else{
    setSuccess(captcha)
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error"
  const small = formControl.querySelector("small");
  small.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
 formControl.className = "form-control success";
}
// captcha value

captcha.addEventListener("input", (e) =>{
    const  img = document.querySelector("img")
    const text = e.target.value;
    const blurvalue = 20 - text.length
    img.style.filter = `blur(${blurvalue}px)`
    if(blurvalue <=0){
        setSuccess(captcha)
    } else {
        setError(captcha,"text is not long enough")
    }
})

// regex checks for string composition
// 
// show and hide for button on the input filed on password

const showbtn = document.querySelector(".showbtn")
showbtn.addEventListener("click",()=>{
    const inputType =password.type;
    if(inputType ==="password"){
        password.type = "text"
        showbtn.textContent = "HIDE"

    } else{
        password.type ="password"
        showbtn.textContent ="SHOW"
    }

    
    
})
const showbtn2 = document.querySelector(".showbtn2")
showbtn2.addEventListener("click",()=>{
    const inputType =password2.type;
    if(inputType ==="password"){
        password2.type = "text"
        showbtn2.textContent = "HIDE"

    } else{
        password2.type ="password"
        showbtn2.textContent ="SHOW"
    }
})
