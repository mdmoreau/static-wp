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
  sass: {
    src: 'src/sass/**/*.scss',
    dist: 'dist/css'
  },
  svgstore: {
    src: 'src/svgstore/**/*.svg',
    dist: 'dist/img',
    template: 'src/svgstore/util/_template.mustache',
    sass: '_svgstore.scss',
    out: 'src/sass/util',
    opts: {
      inlineSvg: true
    }
  },
  swig: {
    src: 'src/swig/**/[^_]*.html',
    dist: 'dist',
    watch: 'src/swig/**/*',
    opts: {
      defaults: {
        cache: false
      }
    }
  }
};