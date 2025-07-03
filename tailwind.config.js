module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html", // إذا كان لديك ملفات HTML في المجلد الرئيسي
    "./**/*.html" // ليشمل جميع المجلدات الفرعية
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}