const ExpectHelper = async () => {
  const module = await import('./index.js');
  return module.default;
};

module.exports = ExpectHelper;
