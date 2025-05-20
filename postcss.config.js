export default {
  plugins: [
    process.env.NODE_ENV === 'production' ?
    await import('postcss-purgecss').then(m => m.default({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      safelist: [
        'time-slipped', // src/components/time-flies.jsx で動的に使用
        /^modal-/,     // src/components/TimeSlipModal.jsx で動的に使用
        /^fade/,       // src/components/TimeSlipModal.jsx で動的に使用
        /^show/,       // src/components/TimeSlipModal.jsx で動的に使用
        /^flip-/,      // public/css/stylish-portfolio.css でアニメーションに使用
      ],
    })) :
    undefined,
  ].filter(Boolean),
};
