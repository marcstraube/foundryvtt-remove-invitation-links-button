Hooks.once("ready", () => {
    ui.sidebar.element[0].querySelector("button[data-action='invitations']").style.display = "none";
});

Hooks.once('libChangelogsReady', function () {
    libChangelogs.register(
        "remove-invitation-links-button",
        "<ul>" +
        "<li>Initial release of <strong>Remove Invitation Links Button</strong> module.</li>" +
        "</ul>",
        "major"
    );
});
