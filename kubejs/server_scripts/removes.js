onEvent("recipes", (event) => {
  // remove rs duplicates
  const sizes = [
    '256k',
    '1024k',
    '4096k',
    '16384k',
    '16384k_fluid',
    '65536k_fluid',
    '262144k_fluid',
    '1048576k_fluid'
  ];
  
  const items = [
    ...sizes.map(size => `extrastorage:storagepart_${size}`),
    ...sizes.map(size => `extrastorage:disk_${size}`),
    ...sizes.map(size => `extrastorage:block_${size}`)
  ];
  
  items.forEach((item) => event.remove({ output: item }));
  
  
  // remove angel ring recipe for now
  event.remove({ output: "doomangelring:itemdoomangelring" });
});
