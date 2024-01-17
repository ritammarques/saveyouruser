function plugin(){
    console.log("click plugin");
    document.getElementById("plugin_tab").classList.add("active");
    document.getElementById("game_tab").classList.remove("active");
    document.getElementById("plugin").classList.add("active");
    document.getElementById("plugin").classList.remove("not-active")
    document.getElementById("game").classList.add("not-active");
    document.getElementById("game").classList.remove("active");
}
function game(){
    console.log("click game");
    document.getElementById("game_tab").classList.add("active");
    document.getElementById("plugin_tab").classList.remove("active");
    document.getElementById("game").classList.add("active");
    document.getElementById("game").classList.remove("not-active");
    document.getElementById("plugin").classList.add("not-active");
    document.getElementById("plugin").classList.remove("active");
}

document.getElementById("game_tab").addEventListener("click", game);
document.getElementById("plugin_tab").addEventListener("click", plugin);
document.getElementById("pluggin_button").addEventListener("click", plugin);
