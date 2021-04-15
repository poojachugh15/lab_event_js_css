document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector ('#new-item-form');
  form.addEventListener("submit", handleFormSave);
})

const handleFormSave = function(event){
  event.preventDefault();

  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const readingList = document.querySelector('#reading-list');
 const listItem = document.createElement('li');
 readingList.appendChild(listItem);
 
  const titleElement = document.createElement('h1');
  titleElement.textContent = title;
  listItem.appendChild(titleElement);
  
  const authorElement = document.createElement('h2');
  authorElement.textContent = author;
  listItem.appendChild(authorElement);

  
  const categoryElement = document.createElement('h3');
  categoryElement.textContent = category;
   listItem.appendChild(categoryElement);
  listItem.classList.add("reading-list");
  
  
  event.target.reset();
}