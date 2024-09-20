document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dobInput = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptedTerms').checked;

    const dob = new Date(dobInput);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 18 || age > 55) {
        alert('You must be between 18 and 55 years old.');
    } else {
        // Add entry to the table
        const table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.insertCell(0).textContent = name;
        newRow.insertCell(1).textContent = email;
        newRow.insertCell(2).textContent = password;
        newRow.insertCell(3).textContent = dob.toISOString().split('T')[0]; // Format date
        newRow.insertCell(4).textContent = acceptedTerms ? 'Yes' : 'No';

        // Reset form
        document.getElementById('registrationForm').reset();
    }
});
