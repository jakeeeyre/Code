function fadeInPage() {
    if (!window.AnimationEvent) { return; }

    const fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

fadeInPage()