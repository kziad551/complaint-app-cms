module.exports = ({ init }) => {
  init('translations', async ({ translations }) => {
    // Add Arabic translations
    translations.add('ar', require('../custom/ar.json'));

    // Add English translations
    translations.add('en', require('../custom/en.json'));
  });
};
