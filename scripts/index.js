// Store the wallet amount to your local storage with key "amount"
let wMoney = JSON.parse(localStorage.getItem('amount'))
function addMoney(){
    event.preventDefault()
    let money = document.getElementById('amount').value
    money = Number(money)
    let wallet = document.getElementById('wallet')

    wallet.textContent = money
    localStorage.setItem('amount', JSON.stringify(money))

    
}

function goToMovies(){
    window.location.href = 'movies.html'
}
