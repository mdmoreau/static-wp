// browserify transforms
var requireGlobify = require('require-globify');

// postcss plugins
var autoprefixer = require('autoprefixer');

// configuration for gulp tasks
module.exports = {
  browserSync: {
    opts: {
      proxy: 'wp.dev',
      open: 'ui'
    }
  },
  browserify: {
    src: 'src/js/script.js',
    bundle: 'script.js',
    dist: 'dist/js',
    watch: 'src/js',
    resave: 'src/js/script.js',
    opts: {
      cache: {},
      packageCache: {},
      debug: true,
      transform: [requireGlobify]
    }
  },
  clean: {
    target: ['dist/**/*', '!dist', '!dist/acf-json', '!dist/acf-json/**/*']
  },
  fonts: {
    src: 'src/fonts/**/*',
    dist: 'dist/fonts'
  },
  images: {
    src: 'src/img/**/*',
    dist: 'dist/img'
  },
  lint: {
    format: ['*', 'gulpfile.js/**/*', 'src/**/*', '!src/svgstore/**/*'],
    js: ['gulpfile.js/**/*.js', 'src/js/**/*.js'],
    sass: 'src/sass/**/*.scss'
  },
  sass: {
    src: 'src/sass/**/*.scss',
    dist: 'dist/css',
    postcss: [autoprefixer({browsers: ['> 0.1%']})]
  },
  svgstore: {
    src: 'src/svgstore/**/*.svg',
    dist: 'dist/img',
    template: 'src/svgstore/util/_template.mustache',
    sass: '_svgstore.scss',
    out: 'src/sass/util',
    opts: {
      inlineSvg: true
    },
    imagemin: {
      svgoPlugins: [
        {removeTitle: true}
      ]
    }
  },
  theme: {
    src: 'src/theme/**/*',
    dist: 'dist'
  }
};
