onEvent("recipes", (event) => {
  // remove angel ring recipe for now
  event.remove({ output: "doomangelring:itemdoomangelring" });
  event.remove({ id: "mysticalagriculture:augment/flight" })
  
  event.replaceInput({ output: "mekanism:module_gravitational_modulating_unit" }, "#forge:nether_stars", "doomangelring:itemdoomangelring");
  event.custom({
    "type": "mysticalagriculture:infusion",
    "conditions": [
      {
        "type": "mysticalagriculture:augment_enabled",
        "augment": "mysticalagriculture:flight"
      }
    ],
    "input": {
      "item": "mysticalagriculture:unattuned_augment"
    },
    "ingredients": [
      {
        "item": "doomangelring:itemdoomangelring"
      },
      {
        "item": "mysticalagriculture:supremium_essence"
      },
      {
        "item": "minecraft:nether_star"
      },
      {
        "item": "mysticalagriculture:supremium_essence"
      },
      {
        "item": "minecraft:nether_star"
      },
      {
        "item": "mysticalagriculture:supremium_essence"
      },
      {
        "item": "minecraft:nether_star"
      },
      {
        "item": "mysticalagriculture:supremium_essence"
      }
    ],
    "result": {
      "item": "mysticalagriculture:flight_augment"
    }
  });
});
