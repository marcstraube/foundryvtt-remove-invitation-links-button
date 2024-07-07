Hooks.on("renderSidebarTab", function (application, html) {
    if (typeof game.modules.get("tidy-ui_game-settings") !== "undefined"
        && game.modules.get("tidy-ui_game-settings").active) {
        $(html).find("div#settings-access button[data-action='logout']").addClass("tidyui-fix");
    }
});
