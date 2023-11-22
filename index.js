// Add your code here
function submitData(username, useremail) {
    let submissionData = {
        name: username,
        email: useremail,
    };
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(submissionData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then((response) => response.json())
        .then((responseData) => {
            const newId = responseData.id;
            console.log(`New ID: ${newId}`);

            // Create the element with the ID 'new-id' inside the then() callback
            const idElement = document.createElement('div');
            idElement.id = 'new-id';
            document.body.appendChild(idElement);

            // Append the new ID to the element inside the then() callback
            idElement.textContent = newId;
        })
        .catch(function (error) {
            const errorElement = document.createElement('div');
            errorElement.id = 'error-id';
            document.body.appendChild(errorElement);
            errorElement.textContent = error.message;
        });
}
