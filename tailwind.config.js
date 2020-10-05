module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts']
  },
  theme: {
    extend: {
      minHeight: {
        'screen-85': '85vh',
        'screen-90': '90vh'
      }
    }
  }
});
