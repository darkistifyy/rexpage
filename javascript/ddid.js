var profile = document.getElementById("profile-picture")

profile.addEventListener("load", () => {
    log="Image Loaded Sucessfully";
 })

profile.addEventListener("error", () => {
    profile.remove();
 })

