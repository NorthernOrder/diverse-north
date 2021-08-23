// Mod priorities
/*global["unifypriorities"] = [
    "emendatusenigmatica",
    "mekanism",
    "thermal"
]*/

// Add oredictionary tags here to unify (or use javascript to generate it!)
var tags = [
    "forge:silicon"
]

// Easier way to add multiple tags (feel free to add empty extra tags, this will ignore them)
var tagGen = [
    "iron=gears,plates",
    "gold=gears,plates",
    "diamond=gears,plates",
    "copper=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "tin=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "aluminum=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "lead=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "silver=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "nickel=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "bronze=storage_blocks,ingots,nuggets,dusts,ores,gears,plates",
    "steel=storage_blocks,ingots,nuggets,dusts",
    "platinum=storage_blocks,ingots,nuggets,dusts,ores",
    "uranium=storage_blocks,ingots,nuggets,dusts,ores",
    "iridium=storage_blocks,ingots,nuggets,dusts,ores",
    "zinc=storage_blocks,ingots,nuggets,dusts,ores",
    "osmium=ingots,ores",
    "sulfur=dusts,ores",
    "silicon=gems"
]

for (let line of tagGen) {
    let data = line.split("=")
    for (let type of data[1].split(",")) {
        tags.push("forge:" + type + "/" + data[0])
    }
}

function tryTag(tag) {
    try {
        return Ingredient.of("#"+tag)
    } catch (err) {
        return null
    }
}

function unifyTag(tag) {
    let ingr = tryTag(tag)
    if (ingr) {
        let stacks = ingr.getStacks().toArray()
        //for (let mod of global["unifypriorities"]) {
            for (let stack of stacks) {
                if (stack.getMod() == "emendatusenigmatica") {
                    global["tagitems"][tag] = stack.getId()
                    return
                }
            }
        //}
        if (stacks.length > 0) global["tagitems"][tag] = stacks[0].getId()
    }
}

// Replace input and output of recipes (and iterate over tags!)
onEvent("recipes", event => {
    // Iterate over tags (they should be loaded)
    global["tagitems"] = {}
    for (let tag of tags) {
        unifyTag(tag)
    }

    // Update tags
    global["unifytags"] = tags
    
    // Unify the rest
      for (let tag of global["unifytags"]) {
          let ingr = tryTag(tag)
          if (ingr) {
              let stacks = ingr.getStacks().toArray()
              let oItem = global["tagitems"][tag]
              for (let tItem of stacks) {
                  event.replaceInput({}, tItem.getId(), "#"+tag)
                  event.replaceOutput({}, tItem.getId(), oItem)
              }
          }
      }
})