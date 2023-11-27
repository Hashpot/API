const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const displayPerson = (person) => {
  const resultsContainer = document.querySelector('[results-container]');

  if (person) {
      const avatarUrl = `https://i.pravatar.cc/300`;
    let html = `
      <div class="person-details">
        <img src="${avatarUrl}" alt="Avatar" class="avatar">
        <div class="person-info">
        <p class="name">${person.name}</p>
        <p class="email">${person.email}</p>
        <p class="phone">${person.phone}</p>
        </div>
    </div>
    `;
    resultsContainer.innerHTML = html;
  } else {
    resultsContainer.innerHTML = '<p>No user found.</p>';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('[search-button]');
  const idInput = document.querySelector('#id-input');

  const fetchPerson = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`);
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
   
      return response.json();

    } catch (error) {
      console.log(error);
      return null;
    }
  };

  searchBtn.addEventListener('click', async () => {  
    const id = idInput.value;
    
    const person = await fetchPerson(id);
    displayPerson(person);
  });
});