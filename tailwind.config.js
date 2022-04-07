const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    extend: {
    //   fontFamily: { sans: ['Nunito', ...defaultTheme.fontFamily.sans] },
      colors: { primary: '#8FA9BF' },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
