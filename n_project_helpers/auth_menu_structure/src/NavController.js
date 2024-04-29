class NavController {

    constructor(siteMenu){
        this.siteMenu = document.getElementById(siteMenu);
        this.navbar = document.createElement("ul");
        this.navItems = [
            {title:"Home", url: "./index.html"}, 
            {title:"About", url: "#"}, 
            {title:"In-Stock", url: "#"}, 
            {title:"Contact", url: "#"},
            {title:"Register", url: "./register.html"},
            {title:"Login", url: "./login.html"},
            {title:"Logout", url: "#"}
        ];
    }

    displayNav(){

        this.navbar.className = "navbar-nav ms-auto mb-lg-0";
        this.siteMenu.appendChild(this.navbar);

        // Retrieve user token from local storage
        const token = window.localStorage.getItem("token")

        // Populate the navbar, and done conditionally for Login or Logout
        this.navItems.forEach((item) => {

            if(token == null && item.title == "Logout") return;
            if(token != null && item.title == "Login") return;
            if(token != null && item.title == "Register") return;
            
            const navItem = document.createElement("li");
            navItem.className = "nav-item";
            this.navbar.appendChild(navItem);
            
            const navLink = document.createElement("a");
            navLink.className = "nav-link";
            navLink.textContent = item.title;
            navLink.href = item.url;
            navItem.appendChild(navLink);

            if(item.title == "Logout"){
                navLink.addEventListener("click", () => {
                    window.localStorage.removeItem("token");
                    window.localStorage.removeItem("refreshToken");
                    window.location.href = "./index.html";
                })
            }

            return;
        });

        // TODO: Refactor the following code use the relevent token information to populate the navbar
        // TODO: e.g. if token has expired, then the user is not signed in

        // If user is signed in
        if(token != null) {
            
            // Split, parse and decode (atob) the result's token for signed-in email
            const arrToken = token.split(".");
            const decodedToken = JSON.parse(window.atob(arrToken[1]));
            const user = decodedToken.sub;

            const navItem = document.createElement("li");
            navItem.className = "nav-item";
            this.navbar.appendChild(navItem);

            const navLink = document.createElement("a");
            navLink.className = "nav-link fw-bolder text-decoration-underline";
            navLink.textContent = user;
            navLink.href = "#";
            navItem.appendChild(navLink);
        }
    }
}