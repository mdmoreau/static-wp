var os = require('os');
var path = require('path');
var package = require('../package.json');

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
    opts: {
      cache: {},
      packageCache: {},
      debug: true
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
  nunjucks: {
    src: 'src/nunjucks/**/[^_]*.html',
    dist: 'dist',
    watch: 'src/nunjucks/**/*.html',
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
    out: 'src/sass/util',
    opts: {
      inlineSvg: true
    }
  }
};
