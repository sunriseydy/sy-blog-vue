module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'prismjs', {
      'languages': 'all',
      'plugins': ['line-numbers'],
      'css': false,
    }],
  ],
};
