const expCont = document.getElementById("exps")
const modalContainer = document.getElementById("modal-container");

fetch('./experiencia.json')
    .then((response) => response.json())
    .then((json) => { json.forEach((experiencia) => {
        let experienciaContent = document.createElement("div");
        experienciaContent.className = "exp";
        experienciaContent.innerHTML =`
            <h2>${experiencia.puesto}</h2>
            <p>(${experiencia.periodo})</p>
            <p>${experiencia.empresa}</p>
    `
    expCont.append(experienciaContent)

    let info = document.createElement("button");
    info.innerText = "Mas Info"
    info.className = "btn"

    experienciaContent.append(info);
    
    info.addEventListener("click", () =>{
        modalContainer.innerHTML =  "";
        modalContainer.style.display ="initial"
        const modalHeader = document.createElement("div");
        modalHeader.className="modal-header"
        modalHeader.innerHTML = `
        <h2 class="modal-header-title">${experiencia.puesto} (${experiencia.periodo})</h2>
        `;
        modalContainer.append(modalHeader);

        const modalButton = document.createElement("button");
        modalButton.innerText = "❌";
        modalButton.className = "modal-header-button";

        modalButton.addEventListener("click", ()=>{
            modalContainer.style.display = "none"
        })

        modalHeader.append(modalButton);

        const content = document.createElement("div");
        content.className = "informacion"
        content.innerHTML =`
        <h3>${experiencia.empresa}</h3>
        <p>${experiencia.descripcion}</p>
        <p>${experiencia.referencia}</p>
        `;
        modalContainer.append(content);
        modalContainer.style.width = "1100px"
        modalContainer.style.height = "250px"
    });
    
    });
})