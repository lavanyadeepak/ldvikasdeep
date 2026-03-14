document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('business-grid');

  fetch('./assets/data/businesses.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Group providers by category
      const groupedCategories = data.reduce((acc, curr) => {
        acc[curr.category] = [...(acc[curr.category] || []), curr];
        return acc;
      }, {});

      // Iterate through the grouped categories
      Object.entries(groupedCategories).forEach(([categoryName, categories]) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('biz-card');

        let content = `<span class="biz-icon">${categories[0].icon}</span><p>`;
          // Create a dropdown
          content += `<select onchange="window.location.href = this.value;">
                      <option value="">Select ${categoryName}</option>`;
          categories.forEach(providerGroup => {
            providerGroup.providers.forEach(provider => {
              content += `<option value="${provider.url}">${provider.name}</option>`;
            });
          });
          content += `</select>`;
        content += `</p>`;
        cardDiv.innerHTML = content;
        gridContainer.appendChild(cardDiv);
      });
    })
    .catch(error => console.error('Error loading businesses:', error));
});