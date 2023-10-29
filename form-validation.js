function validationForm() {
  let x = document.forms["myform"]["fullName"].value;
  if (x === "") {
    console.log("field must be filled out");
    return false;
  }
}
