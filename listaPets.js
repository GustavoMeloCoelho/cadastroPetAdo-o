function deletePet(petID){
    // 1 -  ir no local e busca o array de pets
     const petsOnMemory = JSON.parse(localStorage.getItem("pets"));
     const petsFiltered =  petsOnMemory.filter((pet) => pet.id !== petID);
  
     localStorage.setItem("pets", JSON.stringify(petsFiltered));
  
     document.getElementById('table-data').innerText = "";
     loadData();
  }




function loadData() {
    const pets = JSON.parse(localStorage.getItem("pets"))

    pets.forEach((pet) => {
        const tr = document.createElement('tr');

        const tutorNameTD= document.createElement('td');
        tutorNameTD.innerText = pet.tutorName;
        tr.append(tutorNameTD);

        const tutorCellTD = document.createElement('td');
        tutorCellTD.innerText = pet.tutorCell;
        tr.append(tutorCellTD);

        const tutorEmailTD = document.createElement('td');
        tutorEmailTD.innerText = pet.tutorEmail;
        tr.append(tutorEmailTD);

        const animalCategoryTD = document.createElement('td');
        if(pet.animalCategory === "cat"){
            animalCategoryTD.innerText = "Gato";    
        }
        if(pet.animalCategory === "dog"){
            animalCategoryTD.innerText = "Cachorro";    
        }
        tr.append(animalCategoryTD);

        const animalNameTD = document.createElement('td');
        animalNameTD.innerText = pet.animalName;
        tr.append(animalNameTD);

        const animalBreedTD = document.createElement('td');
        animalBreedTD.innerText = pet.animalBreed;
        tr.append(animalBreedTD);

        const animalAgeTD = document.createElement('td');
        animalAgeTD.innerText = pet.animalAge;
        tr.append(animalAgeTD);


    
        const uploadPhotoTD = document.createElement('td');
        const img = document.createElement('img');
        img.className = "pet-img";
        // img.setAttribute("width", "50px");
        // img.setAttribute("height", "50px");
        img.style.objectFit = "cover";
        img.setAttribute('src', pet.uploadPhoto);
        uploadPhotoTD.append(img);
        tr.append(uploadPhotoTD);

        const btnTD = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.onclick = () => deletePet(pet.id);
        deleteBtn.className =  "delete-btn";
        deleteBtn.innerText = "deletar";
        btnTD.append(deleteBtn);
        tr.append(btnTD);

        document.getElementById('table-data').append(tr);

    });


    
}



document.addEventListener('DOMContentLoaded', loadData)