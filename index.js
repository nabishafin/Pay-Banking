document.getElementById('btn').addEventListener('click', function (event) {
    event.preventDefault()
    const numberInput = document.getElementById('number').value;
    const pinInput = document.getElementById('password').value;
    // const number = parseInt(numberInput);
    // const pin = parseInt(pinInput);
    if (numberInput.length < 11 && pinInput.length == 4) {
        console.log('ok')
    }
    else {
        console.log('plz try again')
    }






})