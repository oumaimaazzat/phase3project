

document.addEventListener("DOMContentLoaded", () => {
    addWizard()
    proveWizard()
    // getWizard()
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
    div3.id = `body-${wizard.id}`

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
    
    button.classList.add("btn", "btn-primary", "btn-sm")
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (button.innerText == "SORT ME" ) {
            button.innerText = "LEAVE THE HOUSE"
            sortHouse(wizard)
        } else {
            button.innerText = "SORT ME"
            leaveHouse(event)
        }
    })
    
    let p3 = document.createElement('p')
    p3.className = 'card-text'
    p3.id = `house-${wizard.id}`
    p3.innerText = "House: Undefined"
    if (wizard.house) {
        p3.innerText = `House: ${wizard.house.name}`
        button.id = `sort-${wizard.wiz_house.id}`
        button.innerText = "Leave the house"
    }

    // Show house part
    // let div_sub = document.createElement('div')	
    // div_sub.id = "myModal";
    // div_sub.classList.add("modal", "popup-modal", "slider", "mfp-hide")

    // let div_sub_1 = document.createElement('div')
    // div_sub_1.className = "media"
    // let div_sub_img = document.createElement('img')
    // div_sub_img.src = "images/w.jpeg"
    
    // let div_sub_2 = document.createElement('div')
    // div_sub_2.className = "description-box"
    // let div_sub_h4 = document.createElement('h4')
    // div_sub_h4.innerText = "Gryffindor"
    
    // let div_sub_3 = document.createElement('div')
    // div_sub_3.className = "link-box"
    // let div_sub_a = document.createElement('a')
    // div_sub_a.className = `close-${wizard.id}`
    // div_sub_a.innerText = "Close"

    // div_sub.append(div_sub_1, div_sub_2, div_sub_3)
    // div_sub_3.appendChild(div_sub_a)
    // div_sub_2.appendChild(div_sub_h4)
    // div_sub_1.appendChild(div_sub_img)
    // End show house part
    

    let a = document.createElement('a')
    a.classList.add("btn", "btn-primary", "btn-sm")
    a.href=`#edit-wizard-${wizard.id}`
    a.innerText = "Update Wizard!"
   
    
    let edit_form = document.createElement('form')
    edit_form.id = `edit-wizard-${wizard.id}`
    edit_form.classList.add("collapse", "multi-collapse")

    let div4 = document.createElement('div')
    div4.className = "form-group"

    let arr = ["name", "age", "blood"];
    arr.forEach(ele => {
        let label = document.createElement('label')
        label.innerText = ele[0].toUpperCase() + ele.slice(1)

        let input = document.createElement('input')
        input.type = "text"
        input.className = "form-control"
        input.id = ele
        input.value = wizard[ele]

        div4.append(label, input)
        
    })
    
    let buttonUpdate = document.createElement('button')
    buttonUpdate.type = "submit"
    buttonUpdate.classList.add("btn", "btn-primary")
    buttonUpdate.innerText = "Submit"

    edit_form.addEventListener('submit', (event) => {
        event.preventDefault();
        updateWizard(event, wizard);
    })
    // p3.appendChild(div_sub)
    container.append(div1)
    div1.appendChild(div2)
    div2.append(img, div3)
    edit_form.append(div4, buttonUpdate)
    div3.append(h5, p1, p2, p3, button, a, edit_form)

    $(".btn").attr("data-toggle", "collapse");
    $(".btn").attr("role", "button");
    $(".btn").attr("aria-expanded", "false");
    $(".btn").attr("aria-controls", "collapseFormButton");

    // p3.addEventListener('click', () => {
    //     div_sub.style.display = "block";
    // })
    
    // div_sub_a.addEventListener('click', () => {
    //     div_sub.style.display = "none";
    // })


}


function addWizard(){
    document.querySelector(".ui1").addEventListener('submit', (event) => {
        event.preventDefault() 
        newWizard = {
            email: event.target.email.value, 
            password: event.target.password.value, 
            password_confirmation: event.target.password_confirmation.value, 
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
        document.querySelector('.ui1').reset()
    })
}


function proveWizard(){
     let form = document.querySelector(".ui2")
     form.addEventListener('submit', (event) => {
        event.preventDefault()
        if (Object.values(form.children).find((child) => child.id == "alert-wrong-pw")){
            Object.values(form.children).find((child) => child.id == "alert-wrong-pw").remove()
        }
        checkWizard = {
            email: event.target.email.value, 
            password: event.target.password.value
        }
        reqPackage = {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(checkWizard)
        }
        fetch("http://localhost:3000/login", reqPackage)
        .then(res => res.json())
        .then(wizard => {
            if (wizard.status) {
                let p = document.createElement('p')
                p.id = "alert-wrong-pw"
                p.innerText = "Wrong password"
                form.appendChild(p)
                
            } else {
                renderWizard(wizard)
            }
        })
        document.querySelector('.ui2').reset()
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
        document.getElementById(`age-${wizard.id}`).innerText = `Age: ${wizard.age}`
        document.getElementById(`blood-${wizard.id}`).innerText = `Blood: ${wizard.blood}`
    })
     document.getElementById(`edit-wizard-${wizard.id}`).classList.remove("show");

}



function sortHouse(wizard) {
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
        // debugger
        document.querySelector(`#house-${wizHouse.wizard_id}`).innerText = `House: ${wizHouse.house.name}`
        document.querySelector(`#body-${wizard.id}`).childNodes[4].id = `sort-${wizHouse.id}`
    })
}


function leaveHouse(event) {
    // debugger
    wiz_house_id = parseInt(event.target.id.split("-")[1])
    fetch(`http://localhost:3000/wiz_houses/${wiz_house_id}`, {
        method: "DELETE"
    })
    .then(event.target.parentNode.childNodes[3].innerText = "House: Undefined")
}



// const popup = () => {
//     let modal = document.getElementById("myModal");
//     let btn = document.querySelector(".header");
//     let span = document.getElementsByClassName("close-popup")[0];

//     btn.onclick = function() {
//     modal.style.display = "block";
//     }

//     span.onclick = function() {
//     modal.style.display = "none";
//     }
// }


   