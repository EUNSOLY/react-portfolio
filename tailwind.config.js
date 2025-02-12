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
        // 커스텀 브레이크포인트 이상
        sm: '523px', //모바일
        md: '769px', //아이패드 새로
        lg: '1025px', // 아이패드 가로
        xl: '1280px', // 데스크탑

        // 커스텀 브레이크포인트 이하
        'max-sx': { max: '300px' },
        'max-sm': { max: '524px' },
        'max-md': { max: '768px' },
        'max-lg': { max: '1024px' },
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer'), require('tailwind-scrollbar-hide')],
};
