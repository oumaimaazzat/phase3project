document.addEventListener("DOMContentLoaded", () => {
    getWizard()
})

function getWizard(){
    fetch("http://localhost:3000/wizards")
    .then(res => res.json())
    .then(wizards => wizards.forEach(wizard => renderWizard(wizard)))
}

function renderWizard(wizard){
    document.getElementById("wizard-container").innerHTML += 
    `<img src=${wizard.image} class="card-img-top" alt="...">
                    <h5 class="card-title">${wizard.name}</h5>
                    <p class="card-text"><small class="text-muted">Age: ${wizard.age}</small></p>
                    <p class="card-text"><small class="text-muted">Blood: ${wizard.blood}</small></p>
    `

        
}