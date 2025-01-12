/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // src 하위 파일 중 확장자가 .js, .jsx, .ts, .tsx인 파일을 대상으로 적용한다.
  ],
  theme: {
    extend: {
      colors: {
        pointColor: '#00b2ff',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
