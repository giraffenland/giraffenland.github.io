class CommonNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="nav-links">
                <a href="index.html"><img src="home.png" alt="Logo"></a>
                <a href="https://discord.gg/Tkn83H6uQ5" target="_blank"><img src="dc.webp" alt="Discord"></a>
                <a href="https://www.instagram.com/giraffenland.offical" target="_blank"><img src="insta.png" alt="Instagram"></a>
                <a href="https://www.tiktok.com/@giraffenteam" target="_blank"><img src="tiktok.png" alt="TikTok"></a>
                <a href="https://www.youtube.com/@giraffenlanddc" target="_blank"><img src="yt.png" alt="YouTube"></a>
                <a href="about.html"><img src="about.webp" alt="Über Uns"></a>
            </div>
            <span class="navbar-text">© 2026 TeamGiraw | Mattis</span>
        </nav>
        `;
    }
}

customElements.define('common-navbar', CommonNavbar);