// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wMoney = JSON.parse(localStorage.getItem('amount'))
document.getElementById('wallet'). textContent = wMoney


function searchMovie(){
    let movieName = document.getElementById("search").value
    const key = 'c04ee9f4'
    const url = `http://www.omdbapi.com/?apikey=${key}&s=${movieName}`


    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        let data = res.Search
        console.log(data)
        appendMyData(data)
    })
    .catch(function(err){
        console.log('Error: ', err)
    })
}

function appendMyData(data){
    let movieDiv = document.getElementById('movies')

    
    data.forEach(element => {
        // mainbox
    let box = document.createElement('div')
    // image box
    let imgBox = document.createElement('div')

    let img = document.createElement('img')
    img.src = element.Poster
    img.style.width = '100%'

    let title = document.createElement('p')
    title.textContent = element.Title

    let btn = document.createElement('button')
    btn.textContent = 'Book Now'
    btn.setAttribute('class', 'book_now')
    btn.addEventListener('click', function(){
        nextPage()
        localStorage.setItem('movie', JSON.stringify(data))
    })

    imgBox.append(img)
    movieDiv.append(imgBox, title, btn)
    });
}

function nextPage(){
    window.location.href = 'checkout.html'
}
