import babel from 'rollup-plugin-babel';

export default ({
  input: 'src/register.js',
  plugins: [babel()],
  output: [{
    file: 'dist/bundle.js',
    format: 'iife'
  }]
});
