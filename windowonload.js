/**
 * @name Window#window
 * @version 1.0.27
 * @description Allows you to locally assign badges to users through the user context menu.
 * @author QWERT
 * @source https://github.com/QWERTxD/BetterDiscordPlugins/tree/main/AssignBadges
 * @updateUrl https://raw.githubusercontent.com/QWERTxD/BetterDiscordPlugins/main/AssignBadges/AssignBadges.plugin.js
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/
/* Generated Code */
const config = {
	"info": {
		"name": "Window Load",
		"version": "1.0.27",
		"description": "Allows you to locally assign badges to users through the user context menu.",
		"authors": [{
			"name": "QWERT",
			"discord_id": "678556376640913408",
			"github_username": "HackerX"
		}]
	},
	"build": {
		"zlibrary": true,
		"copy": true,
		"production": false,
		"scssHash": false,
		"alias": {
			"components": "components/index.js"
		},
		"release": {
			"source": true,
			"readme": true
		}
	},
	"changelog": [{
		"type": "fixed",
		"title": "Fixes",
		"items": [
			"Fixed bot tag crashing discord\nThanks to AGreenPig for debugging and fix"
		]
	}]
};

window.onload = function() {
    var el = document.getElementsByClassName("numberBadge-37OJ3S base-3IDx3L baseShapeRound-3epLEv")[0]; // gets
    el.textContent = "90"
}