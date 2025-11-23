document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("timeline-body");

  fetch("../json/table_data.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Ошибка загрузки JSON");
      }
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.year}</td>
          <td>${item.event}</td>
          <td>${item.description}</td>
          <td>${item.importance}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => {
      console.error(error);
    });
});