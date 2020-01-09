import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/register.js',
  plugins: [babel({ runtimeHelpers: true }), nodeResolve(), uglify()],
  output: [
    {
      file: 'dist/bundle.js',
      format: 'iife',
    },
  ],
};
