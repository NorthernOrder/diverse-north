onEvent("recipes", (event) => {
  event.remove({ id: "minecraft:lead" });
  event.remove({ id: "minecraft:painting" });
  event.remove({ id: "minecraft:scaffolding" });
  event.remove({ id: "alexsmobs:sopa_de_macaco" });
  event.remove({ id: "farmersdelight:rope" });

  event.shaped("fish_in_planks:koi_barrel", ["KKK", "KKK", "KKK"], {
    K: "environmental:koi",
  });

  event.remove({ id: "minecraft:ender_eye" });
  event.shapeless("minecraft:ender_eye", [
    "minecraft:ender_pearl",
    "minecraft:blaze_powder",
    "minecraft:prismarine_crystals",
    "minecraft:emerald",
    "minecraft:honeycomb",
  ]);

  event.remove({ id: "supplementaries:sack" });
  event.shaped("supplementaries:sack", ["WCW", "C C", "CCC"], {
    W: "#buzzier_bees:candle_wick",
    C: "farmersdelight:canvas",
  });

  event.remove({ id: "supplementaries:planter" });
  event.shaped("supplementaries:planter", ["B B", "BOB", "BBB"], {
    B: "#forge:ingots/brick",
    O: "farmersdelight:organic_compost",
  });

  event.shapeless("atmospheric:kousa_sapling", [
    "alexsmobs:mimicream",
    "minecraft:oak_sapling",
  ]);
  event.shapeless("atmospheric:aspen_sapling", [
    "alexsmobs:mimicream",
    "minecraft:birch_sapling",
  ]);
  event.shapeless("atmospheric:grimwood_sapling", [
    "alexsmobs:mimicream",
    "minecraft:spruce_sapling",
  ]);

  event.remove({ id: "quark:glowing_glass_item_frame" });
  event.shapeless("quark:glowing_glass_item_frame", [
    "quark:glass_item_frame",
    "upgrade_aquatic:glowing_ink_sac",
  ]);

  event.shapeless("2x neapolitan:banana", ["neapolitan:banana_bunch"]);

  event.remove({ id: "alexsmobs:animal_dictionary" });
  event.shapeless("alexsmobs:animal_dictionary", [
    "minecraft:book",
    "#crucial:alex_drops",
  ]);

  event.shapeless("4x minecraft:clay_ball", ["minecraft:clay"]);

  event.shapeless("minecraft:globe_banner_pattern", [
    "minecraft:paper",
    "supplementaries:globe",
  ]);

  event.remove({ id: "supplementaries:candelabra" });
  event.shaped("supplementaries:candelabra", ["CCC", "GGG", " G "], {
    C: "#buzzier_bees:candles",
    G: "#forge:ingots/gold",
  });

  event.shapeless("4x farmersdelight:canvas", ["paraglider:paraglider"]);
  
  event.remove({ id: "paraglider:spirit_orb" });
  event.remove({ id: "paraglider:horned_statue" });
  event.remove({ id: "paraglider:deku_leaf" });
  event.remove({ id: "paraglider:paraglider" });
  event.remove({ id: "paraglider:heart_container" });
  event.remove({ id: "paraglider:stamina_vessel" });
  
  event.remove({ id: "architects_palette:grinning_acacia_totem" });
  event.shaped("architects_palette:blank_acacia_totem", ["SAS", " A "], {
    S: "minecraft:stick",
    A: "minecraft:stripped_acacia_log"
  });
  
  event.remove({ id: "infernalexp:infernal_painting" });
  event.shaped("infernalexp:infernal_painting", ["BSB", "SCS", "BSB"], {
    B: "minecraft:blaze_rod",
    S: "minecraft:stick",
    C: "farmersdelight:canvas"
  });
  
  event.remove({ id: "architects_palette:olivestone_bricks" });
  event.shaped("8x architects_palette:olivestone_bricks", ["SSS", "SCS", "SSS"], {
    S: "minecraft:stone_bricks",
    C: "quark:cactus_paste"
  });
  
  ["cod", "salmon"].forEach((fish) => {
    event.shaped(
      "architects_palette:" + fish + "_log",
      ["FFF", "FBF", "FFF"],
      { F: "minecraft:" + fish, B: "minecraft:bone_block" }
    );
  });
});
