document.addEventListener('DOMContentLoaded', function () {
    // Initialize the Async Function
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the Data Container Element
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch Data Using try-catch
            const response = await fetch(apiUrl);

            // Check if the response is okay (status code in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const users = await response.json();

            // Clear the Loading Message
            dataContainer.innerHTML = '';

            // Create and Append User List
            const userList = document.createElement('ul');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);

        } catch (error) {
            // Error Handling
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // Invoke fetchUserData on DOMContentLoaded
    fetchUserData();
});
