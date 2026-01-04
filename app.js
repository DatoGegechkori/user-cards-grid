const btn = document.getElementById("userBtn");
const list = document.getElementById("userList");

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        
        list.innerHTML = '';

        users.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("userClass");

            userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong></p>
            <div class="address">
            <p>Street: ${user.address.street}</p>
            <p>Suite: ${user.address.suite}</p>
            <p>City: ${user.address.city}</p>
            <p>Zipcode: ${user.address.zipcode}</p>
            <p>Geo:</p>
            <div class="geo">
                <p>Lat: ${user.address.geo.lat}</p>
                <p>Lng: ${user.address.geo.lng}</p>
            </div>
            </div>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p>#${user.id}</p>
            `;

            list.appendChild(userDiv);
        });

    } catch (error) {
        list.innerHTML = 'მომხმარებლების წამოღება ვერ მოხერხდა';
        console.error(error);
    }
}

btn.addEventListener('click', fetchUsers);
