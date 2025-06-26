// when REVERSE button is clicked
document.getElementById('reverseBtn').addEventListener('click', () => {
    const input = document.getElementById('inputString').value;

    fetch('/reverse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
    })
        .then((response) => {
            if (!response.ok) throw new Error('Network error');
            return response.json();
        })
        .then((data) => {
            document.getElementById('result').textContent =
                'Reversed String: ' + data.reversed;
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById('result').textContent =
                'Error: Could not fetch reversed string';
        });
});
