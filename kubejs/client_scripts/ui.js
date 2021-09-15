events.listen("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.tilingBackground("diversenorth:textures/bg.png", 256);

    let rightSide = (ui.width / 4) * 3;
    let buttonHeight = 20;
    let space = 2;

    // Pack Logo
    ui.image((img) => {
      img.height = 1024 * 0.2;
      img.width = 1024 * 0.2;
      img.x = ui.width / 4 - img.width / 2;
      img.y = ui.height / 2 - img.height / 2;
      img.texture = "diversenorth:textures/logo.png";
    });

    // Pack Name
    ui.image((img) => {
      img.height = 300 * 0.2;
      img.width = 800 * 0.2;
      img.x = rightSide - img.width / 2;
      img.y = ui.height / 2 - img.height * 1.4;
      img.texture = "diversenorth:textures/name.png";
    });

    // Singleplayer
    ui.button((btn) => {
      btn.name = text.translate("menu.singleplayer");
      btn.width = 150;
      btn.x = rightSide - btn.width / 2;
      btn.y = ui.height / 2;
      btn.action = "minecraft:singleplayer";
      btn.shadow = false;
    });

    // Multiplayer
    ui.button((btn) => {
      btn.name = text.translate("menu.multiplayer");
      btn.width = 150;
      btn.x = rightSide - btn.width / 2;
      btn.y = ui.height / 2 + space + buttonHeight;
      btn.action = "minecraft:multiplayer";
      btn.shadow = false;
    });

    // Mods
    ui.button((btn) => {
      btn.name = text.translate("fml.menu.mods");
      btn.width = 150;
      btn.x = rightSide - btn.width / 2;
      btn.y = ui.height / 2 + (space + buttonHeight) * 2;
      btn.action = "forge:mod_list";
      btn.shadow = false;
    });

    // Options
    ui.button((btn) => {
      btn.name = text.translate("menu.options");
      btn.width = 75;
      btn.x = rightSide - btn.width;
      btn.y = ui.height / 2 + (space + buttonHeight) * 3;
      btn.action = "minecraft:options";
      btn.shadow = false;
    });

    // Quit
    ui.button((btn) => {
      btn.name = text.of("Quit");
      btn.width = 75;
      btn.x = rightSide + 1;
      btn.y = ui.height / 2 + (space + buttonHeight) * 3;
      btn.action = "minecraft:quit";
      btn.shadow = false;
    });

    // Modpack Name
    ui.label((label) => {
      label.height = 10;
      label.name = "Diverse North";
      label.x = 2;
      label.y = ui.height - 21;
    });

    // Modpack Version
    ui.label((label) => {
      label.height = 10;
      label.name = "Version: 0.2.2";
      label.x = 2;
      label.y = ui.height - 11;
    });

    // Mods Loaded
    ui.label((label) => {
      label.height = 10;
      label.name = Platform.list.size() + " Mods Loaded";
      label.x = ui.width - label.width - 2;
      label.y = ui.height - 31;
    });

    // Forge Version
    ui.label((label) => {
      label.height = 10;
      label.name = "Forge Version: " + Platform.getInfo("forge").version;
      label.x = ui.width - label.width - 2;
      label.y = ui.height - 21;
    });

    // Mojang Copyright
    ui.label((label) => {
      label.height = 10;
      label.name = "Copyright Mojang AB";
      label.x = ui.width - label.width - 2;
      label.y = ui.height - 11;
    });
  });
});
