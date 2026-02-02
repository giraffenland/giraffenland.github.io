class CommonNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="nav-links">
                <a href="index.html"><img src="icon.webp" alt="Home"></a>
                <a href="https://www.instagram.com/giraffenland.offical" target="_blank"><img src="insta.webp" alt="Instagram"></a>
                <a href="https://www.tiktok.com/@giraffenteam" target="_blank"><img src="tiktok.webp" alt="TikTok"></a>
                <a href="https://www.youtube.com/@giraffenlanddc" target="_blank"><img src="yt.webp" alt="YouTube"></a>
                <a href="about.html"><img src="team.webp" alt="Über Uns"></a>
				<a href="https://discord.gg/Tkn83H6uQ5" target="_blank" class="discord-link"><img src="dc.webp" alt="Discord"></a>
            </div>
            <span class="navbar-text">© 2026 TeamGiraw | Mattis</span>
        </nav>
        `;
    }
}

customElements.define('common-navbar', CommonNavbar);