class CommonNavbar extends HTMLElement {
		connectedCallback() {
			this.innerHTML = `
			<div class="navbar">
				<a href="index.html">Giraw</a>
				<div class="dropdown">
					<button class="dropbtn">Events</button>
						<div class="dropdown-content">
							<a href="civilization.html">Civilization</a>
							<a href="archiv.html">Archiv</a>
						</div>
					</div> 
				<a href="social.html">Social Media</a>
				<a href="about.html">Über Uns</a>
				<a href="kontakt.html">Kontakt</a>
			</div>
			`
		}
	}
	
class CommonFooter extends HTMLElement {
		connectedCallback() {
			this.innerHTML = `
			<center>© 2025 Giraw</center>
			`
		}
	}

class CommonHead extends HTMLElement {
		connectedCallback() {
			this.innerHTML = `
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta name="description" content="Giraffenland, Giraw, Minecraft, Roleplay, PvP">
			<html lang="de">
			<link rel="shortcut icon" type="image/x-icon" href="icon.webp">
			<link rel="stylesheet" href="style.css">	
			`
		}
	}

customElements.define('common-navbar', CommonNavbar)
customElements.define('common-footer', CommonFooter)
customElements.define('common-head', CommonHead)