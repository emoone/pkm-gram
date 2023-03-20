module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'postcss-flexbugs-fixes': {},
    autoprefixer: {},
    tailwindcss: {},
    'postcss-preset-env': {
      // 프로젝트에서 사용 시 비활성화 및 `tailwindcss/nesting` 대신 처리
      features: { 'nesting-rules': true },
    },
  },
};
