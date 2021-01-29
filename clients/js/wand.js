



const getWands = async(wizard) => {
    const res = await fetch(`${URL}/wands`)
    const dataWands = await res.json()
    dataWands.forEach(wand => renderWand(wand, wizard))
}

const renderWand = (wand, wizard) => {
    let container = document.getElementById("wands-container")

    let div1 = document.createElement('div')
    div1.classList.add("card", "p-2", "m-2")
    div1.style = "width: 15rem;";
    // div1.style = "height: 1rem;";

    let div2 = document.createElement('div')
    div2.className = "card"

    let img = document.createElement('img')
    img.src = wand.image
    img.className = 'card-img-top'
    img.id = 'wand-image'

    let div3 = document.createElement('div')
    div3.className = "card-body"
    div3.id = `body-${wand.id}`

    let h5 = document.createElement('h5')
    h5.className = "card-title"
    h5.id = `name-${wand.id}`
    h5.innerText = wand.name

    let p1 = document.createElement('p')
    p1.className = 'card-text'
    p1.id = `age-${wand.id}`
    p1.innerText = `Wood: ${wand.wood}`

    let p2 = document.createElement('p')
    p2.className = 'card-text'
    p2.id = `blood-${wand.id}`
    p2.innerText = `Length: ${wand.length}`

    let button = document.createElement('button')
    button.classList.add("btn", "btn-primary", "btn-sm")
    button

    
    if (wizard.wand) {
      if (wizard.wand.id == wand.id) {
        button.innerText = "Your wand"
      } else {
        button.innerText = "You already have one"
      }
    } else {
      button.innerText = "Buy it"
      button.addEventListener('click', () => {
      if (button.innerText == "BUY IT") {
        buyWand(wand)
        button.innerText = "Bought"
          }
      })
    } 


    container.append(div1)
    div1.appendChild(div2)
    div2.append(img, div3)
    div3.append(h5, p1, p2, button)
}


const buyWand = (wand) => {
  newWizWand = {
    wizard_id: SESSION_ID,
    wand_id: wand.id
  }

  fetch(`${URL}/wizwands`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newWizWand)
  })
  .then(res => res.json())
  .then(wizWand => {
    
    console.log(wizWand)
  })
}