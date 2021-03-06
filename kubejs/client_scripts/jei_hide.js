onEvent("jei.hide.items", (event) => {
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
  
  let items = [];
  
  items = items.concat(sizes.map(size => `extrastorage:storagepart_${size}`));
  items = items.concat(sizes.map(size => `extrastorage:disk_${size}`));
  items = items.concat(sizes.map(size => `extrastorage:block_${size}`));
  
  items.forEach((item) => event.hide(item));
});