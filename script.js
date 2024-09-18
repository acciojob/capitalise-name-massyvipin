const InputField = document.getElementById('fname');
InputField.addEventListener('blur',()=>{
InputField.value = InputField.value.toUpperCase();
});
