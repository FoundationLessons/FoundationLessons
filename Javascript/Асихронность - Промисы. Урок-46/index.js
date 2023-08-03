const postsContainer = document.getElementById('posts-container');

fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
 
.then(posts => {
    // Проходимся по массиву и создаем HTML для каждой статьи
    const postsHTML = posts.map(post => `
      <div>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `).join('');

    // Вставляем HTML в контейнер
    postsContainer.innerHTML = postsHTML;
  })
.catch(error => console.error('Ошибка:', error));
