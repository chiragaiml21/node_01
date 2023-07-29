document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    fetch('/get-data')
    .then((response) => response.json())
    .then((data) => {
        const displayDiv = document.getElementById('displayData');
        displayDiv.innerHTML = '';

        if (data.length === 0) {
            displayDiv.innerHTML = '<p>No data available.</p>';
        } else {
            data.forEach((entry) => {
                const item = document.createElement('div');
                item.innerHTML = `
                    <div class=author_quotes>
                    <p class='quote'>${entry.quote}</p>
                    <p class='author'><strong>-${entry.name}<strong></p>
                    </div>
                  
                `;
                displayDiv.appendChild(item);
            });
        }
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}