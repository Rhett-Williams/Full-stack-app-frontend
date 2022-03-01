export const LocalLogin = async details => {
window.addEventListener('load', (event) => {
    automaticallyLogUser()
});

  async function automaticallyLogUser() {
      console.log("hi")
    if (localStorage.getItem("authToken") !== null) {
        try {
            const request = await fetch(`https://api.thebigbusiness.xyz/api/admin/profile`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("authToken")
                }
            });
            const response = await request.json();
            if (response.error) {
                console.log(response.errorMessage)
                // Render error message with response.errorMessage (delete the console log once this is added)
            }
            if (response.isAdmin === true) {
                window.location.href = "/admindashboard"
                return;
            } else {
                localStorage.clear();
            }
        } catch (err) {
            console.error(err.message)
        }
    }
  }
}