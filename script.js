async function fetchUsers() {
    const userList = document.getElementById("userList");
    const errorMessage = document.getElementById("errorMessage");
  
    userList.innerHTML = ""; // Clear previous data
    errorMessage.textContent = "";
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const users = await response.json();
  
      users.forEach(user => {
        const div = document.createElement("div");
        div.className = "user";
        div.innerHTML = `
          <strong>${user.name}</strong><br>
          Email: ${user.email}<br>
          Address: ${user.address.street}, ${user.address.city}
        `;
        userList.appendChild(div);
      });
    } catch (error) {
      console.error("Fetch error:", error);
      errorMessage.textContent = "❌ Failed to load user data. Please check your connection and try again.";
      errorMessage.className = "error";
    }
  }
  
  // Fetch users on first load
  window.onload = fetchUsers;
  