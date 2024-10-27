module.exports = (temp, product) => {
  let output = temp;

  Object.entries(product).forEach(([key, value]) => {
    output = output.replace(new RegExp(`{%${key.toUpperCase()}%}`, 'g'), value);
  });

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  }
  
  return output;
};
