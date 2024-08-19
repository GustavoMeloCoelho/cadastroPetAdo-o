
function submitPet(event) {
    console.log("entrei funcao");
    event.preventDefault();

    const tutorName = document.getElementById("tutor-name").value;
    const tutorCell = document.getElementById("tutor-cell").value;
    const tutorEmail = document.getElementById("tutor-email").value;
    const animalCategory = document.getElementById("animal-categories").value;
    const animalName = document.getElementById("animal-name").value;
    const animalBreed = document.getElementById("animal-breed").value;
    const animalAge = document.getElementById("animal-age").value;
    const uploadPhoto = document.getElementById("upload-photo").value;


        /* ======= VALIDACAO DO FORMULARIO  ======= */

    if (tutorName === "") {
        document.getElementById('tutor-name').style.borderColor = "red"
        document.getElementById('tutor-name').style.borderWidth = "2px"
        document.getElementById('tutor-name-error').innerText = "O nome do tutor é obrigatório"
    } else {
        document.getElementById('tutor-name').style.borderColor = ""
        document.getElementById('tutor-name').style.borderWidth = ""
        document.getElementById('tutor-name-error').innerText = ""
    }

    if (tutorCell === "") {
        document.getElementById('tutor-cell').style.borderColor = "red"
        document.getElementById('tutor-cell').style.borderWidth = "2px"
        document.getElementById('tutor-cell-error').innerText = "Celular do tutor é obrigatório"
    } else {
        document.getElementById('tutor-cell').style.borderColor = ""
        document.getElementById('tutor-cell').style.borderWidth = ""
        document.getElementById('tutor-cell-error').innerText = ""
    }

    if (animalName === "") {
        document.getElementById('animal-name').style.borderColor = "red"
        document.getElementById('animal-name').style.borderWidth = "2px"
        document.getElementById('animal-name-error').innerText = "Nome do animal é obrigatório"
    } else {
        document.getElementById('animal-name').style.borderColor = ""
        document.getElementById('animal-name').style.borderWidth = ""
        document.getElementById('animal-name-error').innerText = ""
    }

    if (animalCategory === "") {
        document.getElementById('animal-categories').style.borderColor = "red"
        document.getElementById('animal-categories').style.borderWidth = "2px"
        document.getElementById('animal-categories-error').innerText = "A categoria do animal é obrigatória"
    } else {
        document.getElementById('animal-categories').style.borderColor = ""
        document.getElementById('animal-categories').style.borderWidth = ""
        document.getElementById('animal-categories-error').innerText = ""
    }

    if(tutorName && tutorCell && animalName && animalCategory) {
        const pet = {
            id: crypto.randomUUID(),  
            tutorName: tutorName,
            tutorCell: tutorCell,
            tutorEmail: tutorEmail,
            animalCategory: animalCategory,
            animalName: animalName,
            animalBreed: animalBreed,
            animalAge: animalAge,
            uploadPhoto: uploadPhoto  
        }

        let localStoragePetList = JSON.parse(localStorage.getItem("pets")); // vai no local storage e pega a lista 

        if (localStoragePetList === null) localStoragePetList = [];
        localStoragePetList.push(pet);
        
        localStorage.setItem("pets", JSON.stringify(localStoragePetList));
        console.log(localStoragePetList);

        document.getElementById("form-register-pet").reset();

    }
}



document.getElementById("form-register-pet").addEventListener("submit", submitPet);