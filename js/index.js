


const loadPhone = async (searchValue = 'm') =>{
      const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
      const data = await res.json();
      const phones = data.data;
      showPhones(phones);
}

function showPhones(phones){
    const section = document.getElementById('section');
    section.innerHTML = '';
    const showAll = document.getElementById('showAll');
     phones.forEach(phone => {
        //  console.log(phone)
   const phoneDiv = document.createElement('div');
   phoneDiv.classList = `card card-compact bg-gray-100 border pt-2`;
   phoneDiv.innerHTML =`
   <figure><img src="${phone.image}" alt="Shoes" /></figure>
   <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
     <p>${phone.slug}</p>
     <div class="card-actions justify-end">
       <button onclick="handleDetailsModal('${phone.slug}')" class="btn btn-secondary">Show Details</button>
     </div>
   </div>
   `
     section.appendChild(phoneDiv)
     });
     showSpinner(false);
} 


 function searchPhone (){
      showSpinner(true);
      const search = document.getElementById('input');
      let searchValue = search.value;
      searchValue = searchValue.toLowerCase();
      loadPhone(searchValue);
 }

 const showSpinner = (isLoading) =>{
    const spinner = document.getElementById('spinner');
    if (isLoading) {
      spinner.classList.remove('hidden');
    }
    else{
      spinner.classList.add('hidden');
    }
 }

 const handleDetailsModal = async (id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const details = data.data;
  showDetailsModal(details)
  console.log(data.data);
  //    console.log(id);
 }

const showDetailsModal = (details) =>{
  const modal = document.getElementById('modal');
  modal.innerHTML = `
  <dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
  <div class="flex flex-col justify-center items-center">
  <div class="mt-2">
  <img src ="${details.image}">
  </div> 
  <h3 class="font-bold text-lg py-2">${details.name}</h3>
   <div class="space-y-1">
   <p>ChipSet: ${details.mainFeatures?.chipSet || 'not available'}</p>
   <p>Display: ${details.mainFeatures?.displaySize || 'not available'}</p>
   <p>Memory: ${details.mainFeatures?.memory || 'not available'}</p>
   <p>Sensors: ${details.mainFeatures?.sensors || 'not available'}</p>
   <p>Storage: ${details.mainFeatures?.storage || 'not available'}</p>
   <p>GPS: ${details.others?.GPS || 'not available'}</p>
   <p>Release Date: ${details?.releaseDate || 'not available'}</p>
   </div>
  </div>
  <div class="modal-action">
  <!-- if there is a button in form, it will close the modal -->
  <button class="btn btn-secondary">Close</button>
</div>
  </form>
</dialog>
  `
  my_modal_1.showModal();
}

 loadPhone();