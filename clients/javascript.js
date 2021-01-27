

document.addEventListener("DOMContentLoaded", () => {
    getWizard()
    addWizard()
    popup()
})

function getWizard(){
    fetch("http://localhost:3000/wizards")
    .then(res => res.json())
    .then(wizards => wizards.forEach(wizard => renderWizard(wizard)))
}

function renderWizard(wizard){
    let container = document.getElementById("wizard-container")

    let div1 = document.createElement('div')
    div1.classList.add("card", "p-2", "m-2")
    div1.style = "width: 18rem;";

    let div2 = document.createElement('div')
    div2.className = "card"

    let img = document.createElement('img')
    img.src = wizard.image
    img.className = 'card-img-top'

    let div3 = document.createElement('div')
    div3.className = "card-body"

    let h5 = document.createElement('h5')
    h5.className = "card-title"
    h5.id = `name-${wizard.id}`
    h5.innerText = wizard.name

    let p1 = document.createElement('p')
    p1.className = 'card-text'
    p1.id = `age-${wizard.id}`
    p1.innerText = `Age: ${wizard.age}`

    let p2 = document.createElement('p')
    p2.className = 'card-text'
    p2.id = `blood-${wizard.id}`
    p2.innerText = `Blood: ${wizard.blood}`

    let button = document.createElement('button')
    button.innerText = "Sort me"
    button.classList.add("btn", "btn-primary")
    button.addEventListener('click', () => getHouse(wizard))


    let a = document.createElement('a')
    a.classList.add("btn", "btn-primary")
    a.href=`#edit-wizard-${wizard.id}`
    a.innerText = "Update Wizard!"
   
    
    let edit_form = document.createElement('form')
    edit_form.id = `edit-wizard-${wizard.id}`
    edit_form.classList.add("collapse", "multi-collapse")
    edit_form.innerHTML = `<div class="form-group">
                <label for="Name">Name</label>
                <input type="text" value = "${wizard.name}" class="form-control" id="name" aria-describedby="nameInput">
                <label for="Age">Age</label>
                <input type="text" value = "${wizard.age}" class="form-control" id="age" aria-describedby="nameInput">
                <label for="Blood">Blood</label>
                <input type="text" value = "${wizard.blood}" class="form-control" id="blood" aria-describedby="nameInput">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>`
    edit_form.addEventListener('submit', (event) => {
        event.preventDefault();
        updateWizard(event, wizard);
    })

    container.append(div1)
    div1.appendChild(div2)
    div2.append(img, div3)
    div3.append(h5, p1, p2, button, a, edit_form)

    $(".btn").attr("data-toggle", "collapse");
    $(".btn").attr("role", "button");
    $(".btn").attr("aria-expanded", "false");
    $(".btn").attr("aria-controls", "collapseFormButton");

}


function addWizard(){
    document.querySelector(".ui").addEventListener('submit', (event) => {
        event.preventDefault() 
        newWizard = {
            name: event.target.name.value, 
            age: event.target.age.value,
            blood: event.target.blood.value,
            image: event.target.photo.value
        }
        reqPackage = {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newWizard)
        }
        fetch("http://localhost:3000/wizards", reqPackage)
        .then(res => res.json())
        .then(renderWizard)

    })

}

const updateWizard = (event, wizard) => {
    editWizard = {
        name: event.target.name.value,
        age: event.target.age.value,
        blood: event.target.blood.value
    }

    fetch(`http://localhost:3000/wizards/${wizard.id}`, {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(editWizard)
    })
    .then(res => res.json())
    .then(wizard => {
        document.getElementById(`name-${wizard.id}`).innerText = wizard.name
        document.getElementById(`age-${wizard.id}`).innerText = wizard.age
        document.getElementById(`blood-${wizard.id}`).innerText = wizard.blood
    })
     document.getElementById(`edit-wizard-${wizard.id}`).classList.remove("show");

}



function getHouse(wizard) {
    newWizHouse = {
        wizard_id: wizard.id
    }
    // debugger
    fetch("http://localhost:3000/wiz_houses", {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newWizHouse)
    })
    .then(res => res.json())
    .then(wizHouse => {
        console.log(wizHouse)
    })
}







const popup = () => {
    let modal = document.getElementById("myModal");
    let btn = document.querySelector(".header");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }
}

