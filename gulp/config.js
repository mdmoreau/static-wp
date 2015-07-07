// configuration for gulp tasks
module.exports = {
  browserSync: {
    opts: {
      server: 'dist',
      open: 'ui'
    }
  },
  browserify: {
    src: 'src/js/script.js',
    bundle: 'script.js',
    dist: 'dist/js'
  },
  images: {
    src: 'src/img/**/*',
    dist: 'dist/img'
  },
  modernizr: {
    src: ['src/js/**/*.js', '!src/js/**/_modernizr.js'],
    out: 'src/js/util',
    opts: {
      options: ['setClasses']
    }
  },
  nunjucks: {
    src: 'src/nunjucks/**/[^_]*.html',
    dist: 'dist',
    watch: 'src/nunjucks/**/*',
    opts: {
      searchPaths: 'src/nunjucks'
    }
  },
  sass: {
    src: 'src/sass/**/*.scss',
    dist: 'dist/css'
  },
  svgstore: {
    src: 'src/svgstore/**/*.svg',
    dist: 'dist/img',
    template: 'src/svgstore/util/_template.mustache',
    sass: '_svgstore.scss',
    out: 'src/sass/modules',
    opts: {
      inlineSvg: true
    }
  }
};