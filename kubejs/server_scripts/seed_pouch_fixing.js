onEvent("item.tags", (event) => {
  const tag = event.get("quark:seed_pouch_holdable");

  tag.remove("minecraft:sweet_berries");

  tag.add("abundance:flowering_redbud_sapling");
  tag.add("abundance:lavender");
  tag.add("atmospheric:aloe_kernels");
  tag.add("autumnity:foul_berry_pips");
  tag.add("bayou_blues:cypress_branch");
  tag.add("berry_good:sweet_berry_pips");
  tag.add("environmental:cattail_seeds");
  tag.add("farmersdelight:onion");
  tag.add("neapolitan:adzuki_beans");
  tag.add("neapolitan:mint_sprout");
  tag.add("neapolitan:strawberry_pips");
  tag.add("neapolitan:vanilla_pods");
  tag.add("upgrade_aquatic:mulberry");
  tag.add("upgrade_aquatic:ochre_kelp");
  tag.add("upgrade_aquatic:polar_kelp");
  tag.add("upgrade_aquatic:thorny_kelp");
  tag.add("upgrade_aquatic:tongue_kelp");
});
