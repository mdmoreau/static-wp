var os = require('os');
var path = require('path');
var package = require('../package.json');

// browserify transforms
var requireGlobify = require('require-globify');

// postcss plugins

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
    target: 'dist'
  },
  fonts: {
    src: 'src/fonts/**/*',
    dist: 'dist/fonts'
  },
  ghPages: {
    src: 'dist/**/*',
    cname: '',
    opts: {
      cacheDir: path.join(os.tmpdir(), package.name)
    }
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
  nunjucks: {
    src: 'src/nunjucks/**/[^_]*.html',
    dist: 'dist',
    watch: 'src/nunjucks/**/*.html',
    opts: {
      searchPaths: 'src/nunjucks'
    },
    htmlmin: {
      collapseWhitespace: true
    }
  },
  sass: {
    src: 'src/sass/**/*.scss',
    dist: 'dist/css',
    postcss: [],
    cssnano: {
      safe: true,
      autoprefixer: {
        add: true
      }
    }
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
  }
};
