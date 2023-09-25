function integ(event, ans) {
  event.preventDefault();
  if (ans == '69'){
    window.alert("Passed!");
  }
  else {
    window.alert("IDIOT, try again!");
  }
}

function handleLogin(event) {
  event.preventDefault();
  document.getElementById('verify').style.display = 'block';
}
