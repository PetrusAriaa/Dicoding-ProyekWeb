const dataArray = [
  {
  name: "A Mongoose",
  comment: "Interesting..."
  },
  {
  name: "Annonym Moose",
  comment: "Easy to understand, I need to learn more"
  },
];

function renderArray() {
  const arrayContainer = document.getElementById('comment-section');
  arrayContainer.innerHTML = '';

  dataArray.forEach(item => {
    const container = document.createElement('div');
    const name = document.createElement('h2');
    const comment = document.createElement('p');
    const image = document.createElement('img');
    image.src = 'public/icons/no-profile.png';
    image.height = 35
    const container2 = document.createElement('div');
    container2.style.display = 'flex';
    container2.style.alignItems = 'center';
    container2.style.gap = '8px';
    name.textContent = item.name;
    name.className = 'font-base-300'
    container2.appendChild(image);
    container2.appendChild(name);

    comment.textContent = item.comment;
    comment.className = 'font-base'
    container.appendChild(container2);
    container.appendChild(comment);
    arrayContainer.appendChild(container);
  });
}

renderArray();

document.getElementById('comment-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name-input').value;
  const comment = document.getElementById('text-field').value;

  if (name === '') {
    alert('Please enter name');
    return;
  }

  dataArray.push({name, comment});

  renderArray();

  document.getElementById('textInput').value = '';
});