onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = ["minecraft:coal_ore", "minecraft:iron_ore", "minecraft:gold_ore", "minecraft:diamond_ore", "minecraft:redstone_ore", "minecraft:emerald_ore", "minecraft:lapis_ore"]
  });
});
