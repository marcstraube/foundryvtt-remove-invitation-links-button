Hooks.once('libChangelogsReady', function () {
    libChangelogs.register(
        "remove-invitation-links-button",
        "<ul>" +
        "<li>Fix deprecated field warning.</li>" +
        "<li>Fix issue that does not remove button Remove invitation links button via stylesheet instead of script to fix timing issue.</li>" +
        "<li>Compatibility fix for TidyUI.</li>" +
        "</ul>",
        "minor"
    );
});

Hooks.on("renderSidebarTab", function (application, html) {
    if (typeof game.modules.get("tidy-ui_game-settings") !== "undefined"
        && game.modules.get("tidy-ui_game-settings").active) {
        $(html).find("div#settings-access button[data-action='logout']").addClass("tidyui-fix");
    }
});
