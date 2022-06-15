function compute()
{
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById('rate').value
    const years = document.getElementById('years').value
    const result = document.getElementById('result')
    if (principal <= 0) {
        alert('Enter a positive number')
    } else {
        let interest = (principal * years * rate) / 100
        let year = new Date().getFullYear() + parseInt(years)
        let sentence = `If you deposit <span class='yellow'> ${principal}, </span> <br> at an interest of <span class='yellow'> ${rate}%, </span> <br> You will receive an amount of <span class='yellow'> ${interest},</span> <br> in the year <span class='yellow'> ${year} </span> <br>`
        result.innerHTML = sentence
    }
     
}


//update slider value function
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}




        