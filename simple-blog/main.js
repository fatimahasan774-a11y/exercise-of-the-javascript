let posts = [];
let editingId = null;

const titleInput = document.getElementById('title-input');
const imageInput = document.getElementById('image-input');
const descInput = document.getElementById('desc-input');
const addBtn = document.getElementById('add-btn');
const postList = document.getElementById('post-list');
const emptyMsg = document.getElementById('empty-msg');

function saveToStorage() {
  localStorage.setItem('blogPosts', JSON.stringify(posts));
}

function loadFromStorage() {
  const saved = localStorage.getItem('blogPosts');
  if (saved) {
    posts = JSON.parse(saved);
  }
}

addBtn.addEventListener('click', function () {
  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const desc = descInput.value.trim();

  if (title === '' || desc === '') {
    alert("please fill this page");
    return;
  }

  if (editingId !== null) {
    const post = posts.find(p => p.id === editingId);
    post.title = title;
    post.image = image;
    post.desc = desc;
    editingId = null;
    addBtn.textContent = 'Add post';
  } else {
    const newPost = {
      id: Date.now(),
      title: title,
      image: image,
      desc: desc
    };
    posts.unshift(newPost);
  }

  saveToStorage();

  titleInput.value = '';
  imageInput.value = '';
  descInput.value = '';

  renderPosts();
});

function renderPosts() {
  postList.innerHTML = '';

  if (posts.length === 0) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';

  posts.forEach(function (post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    postDiv.innerHTML = `
      ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
      <div class="post-body">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-desc">${post.desc}</p>
        <div class="post-actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;

    postList.appendChild(postDiv);
    attachEventListeners(postDiv, post);
  });
}

function attachEventListeners(postDiv, post) {
  const editBtn = postDiv.querySelector('.edit-btn');
  const deleteBtn = postDiv.querySelector('.delete-btn');

  editBtn.addEventListener('click', function () {
    handleEdit(post.id);
  });

  deleteBtn.addEventListener('click', function () {
    handleDelete(post.id);
  });
}

function handleEdit(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;

  titleInput.value = post.title;
  imageInput.value = post.image;
  descInput.value = post.desc;

  editingId = id;
  addBtn.textContent = 'Update post';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleDelete(id) {
  const confirmDelete = confirm('Ma hubtaa inaad tirtirto post-kan?');
  if (!confirmDelete) return;

  posts = posts.filter(p => p.id !== id);
  saveToStorage();
  renderPosts();
}

loadFromStorage();
renderPosts();