
const searchForm = document.getElementById("searchForm");
const usernameInput = document.getElementById("username");
const profile = document.getElementById("profile");
const message = document.getElementById("message");

searchForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username === "") {
        message.textContent = "Masukkan username GitHub!";
        return;
    }

    profile.classList.add("hidden");
    message.style.color = "blue";
    message.textContent = "Sedang mencari profil...";

    try {

        const response = await fetch(
            "https://api.github.com/users/" + encodeURIComponent(username)
        );

        if (response.status === 404) {
            throw new Error("Username tidak ditemukan!");
        }

        if (!response.ok) {
            throw new Error("Terjadi kesalahan API: " + response.status);
        }

        const data = await response.json();

        document.getElementById("avatar").src = data.avatar_url;

        document.getElementById("name").textContent =
            data.name || data.login;

        document.getElementById("login").textContent =
            "@" + data.login;

        document.getElementById("bio").textContent =
            data.bio || "Tidak ada bio.";

        document.getElementById("repos").textContent =
            data.public_repos;

        document.getElementById("followers").textContent =
            data.followers;

        document.getElementById("following").textContent =
            data.following;

        document.getElementById("location").textContent =
            data.location || "Lokasi tidak tersedia";

        document.getElementById("profileLink").href =
            data.html_url;

        message.textContent = "";
        profile.classList.remove("hidden");

    } catch (error) {

        message.style.color = "red";
        message.textContent = error.message;

    }

});

