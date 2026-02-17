const users = [
  {
    id: 1,
    name: "Ave Sharma",
    description: "Frontend developer who loves clean UI and animations.",
    image: "https://images.unsplash.com/photo-1769097137026-c482044ca0fb?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Priya Verma",
    description: "UI/UX designer with a passion for minimal layouts.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Rani Mehta",
    description: "Full-stack developer building scalable web apps.",
    image: "https://images.unsplash.com/photo-1506795660198-e95c77602129?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Neha Kapoor",
    description: "Creative content writer and brand strategist.",
    image: "https://images.unsplash.com/photo-1540875716262-8c2b2c4c00ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Vina Singh",
    description: "Tech enthusiast exploring JavaScript and UI effects.",
    image: "https://images.unsplash.com/photo-1594176778260-461a4a3ae9cb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

function createCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = user.image;
  img.alt = user.name;

  const cardOverlay = document.createElement("div");
  cardOverlay.className = "card-overlay";

  const userName = document.createElement("h3");
  userName.className = "user-name";
  userName.textContent = user.name;

  const userDescription = document.createElement("p");
  userDescription.className = "user-description";
  userDescription.textContent = user.description;

  cardOverlay.appendChild(userName);
  cardOverlay.appendChild(userDescription);
  card.appendChild(img);
  card.appendChild(cardOverlay);

  return card;
}

function showUsers(list) {
  cardsContainer.innerHTML = "";
  list.forEach((user) => {
    cardsContainer.appendChild(createCard(user));
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(query) ||
      user.description.toLowerCase().includes(query)
    );
  });

  showUsers(filteredUsers);
});

showUsers(users);
