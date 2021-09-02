onEvent("recipes", (event) => {
  // remove angel ring recipe for now
  event.remove({ output: "doomangelring:itemdoomangelring" });
  
  event.replaceInput({ output: "mekanism:module_gravitational_modulating_unit" }, "#forge:nether_stars", "doomangelring:itemdoomangelring");
  event.replaceInput({ output: "mysticalagriculture:flight_augment" }, "mysticalagriculture:unattuned_augment", "doomangelring:itemdoomangelring");
});
