fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('article-list');
    data.forEach(article => {
      const block = document.createElement('div');
      block.className = 'article-preview';
      block.innerHTML = `
        <h2><a href="${article.url}">${article.title}</a></h2>
        <p class="byline">${article.date}</p>
        <p>${article.excerpt}</p>
      `;
      container.appendChild(block);
    });
  })
  .catch(error => {
    console.error("Error loading articles:", error);
  });
