console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(data => {
            data.message.forEach(item => {
                const img = document.createElement('img')
                img.src = item
                document.querySelector('#dog-image-container').appendChild(img)
            });
        })
})

let dogObj;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            dogObj = data.message
            for (let item in dogObj){
                if(item[0] === document.querySelector('#breed-dropdown').value){
                    const li = createLi(item)
                    document.querySelector('#dog-breeds').appendChild(li)
                }
            }
        })
})

document.querySelector('#breed-dropdown').addEventListener('change', function(event){
    document.querySelector('#dog-breeds').innerHTML = ''
    for(let item in dogObj){
        if(item[0] === event.target.value){
            const li = createLi(item)
            document.querySelector('#dog-breeds').appendChild(li)
        }
    }
})

function createLi(item){
    const li = document.createElement('li')
    li.textContent = item
    li.addEventListener('click', function(){
        this.style.color = 'red'
    })
    return li
}