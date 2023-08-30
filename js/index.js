


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
         console.log(phone)
   const phoneDiv = document.createElement('div');
   phoneDiv.classList = `card card-compact bg-gray-100 border pt-2`;
   phoneDiv.innerHTML =`
   <figure><img src="${phone.image}" alt="Shoes" /></figure>
   <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
     <p>${phone.slug}</p>
     <div class="card-actions justify-end">
       <button class="btn btn-secondary">Show Details</button>
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

 loadPhone();