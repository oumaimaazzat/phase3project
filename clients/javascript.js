document.addEventListener("DOMContentLoaded", () => {
    getWizard()
})

function getWizard(){
    fetch("http://localhost:3000/wizards")
    .then(res => res.json())
    .then(wizards => wizards.forEach(wizard => renderWizard(wizard)))
}

function renderWizard(wizard){
    let container = document.getElementById("wizard-container")

    let div1 = document.createElement('div')
    div1.classList.add("col-sm", "m-2")

    let div2 = document.createElement('div')
    div2.className = "card"

    let img = document.createElement('img')
    img.src = wizard.image
    img.className = 'card-img-top'

    let div3 = document.createElement('div')
    div3.className = "card-body"

    let h5 = document.createElement('h5')
    h5.className = "card-title"
    h5.innerText = wizard.name

    let p1 = document.createElement('p')
    p1.className = 'card-text'
    p1.innerText = wizard.age

    let p2 = document.createElement('p')
    p2.className = 'card-text'
    p2.innerText = wizard.blood


    container.append(div1)
    div1.appendChild(div2)
    div2.append(img, div3)
    div3.append(h5, p1, p2)

}




    // `<div class="col-sm m-2">
            // <div class="card">
                // <img src=${cat.image} class="card-img-top" alt="...">
        //         <div class="card-body">
        //                 // <h5 class="card-title">${cat.name}</h5>
        //                 // <p class="card-text"><small class="text-muted">Breed: ${cat.breed}</small></p>
        //         </div>
        //     </div>
        // </div>`

