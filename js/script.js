function welcomeUser() {
    const userName = prompt("Enter your name");
    const welcomeMessage = `Hi ${userName}, welcome to our portfolio page!`;
    document.getElementById('welcome-message').textContent = welcomeMessage;
};


// welcomeUser()

function sendMessage() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.querySelector('input[name=gender]:checked');
    const notes = document.getElementById('notes').value;

    if(!name || !date || !gender || !notes) {
        alert("Please fill in all fields.");
        return;
    }

    const timestamp = new Date().toLocaleString();
    
    const result = `
        <p><strong>Current time: </strong> ${timestamp}</p>
        <br>
        <p><strong>Nama: </strong> ${name}</p>
        <p><strong>Tanggal Lahir: </strong> ${date}</p>
        <p><strong>Jenis Kelamin: </strong> ${gender.value}</p>
        <p><strong>Pesan: </strong> ${notes}</p>
        `
    document.getElementById('result').innerHTML = result;
    
}