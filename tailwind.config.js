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
        dark: '#333',
        boardBg: '#EAEAEA70',
      },
      screens: {
        xs: '365px', // 커스텀 브레이크포인트: 365px 이상일 때 적용
        sm: '460px',
        md: '640px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'max-xs': { max: '300px' }, // 커스텀 브레이크포인트: 350px 이하일 때 적용
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
