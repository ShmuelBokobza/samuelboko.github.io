module.exports = function(grunt) {
var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


/**********
NETOIES DIST
***********/
    clean: ["dist"],

/**********
CSS minifié 
***********/
    cssmin: {
      add_banner: {
      options: {
      banner: '/* CSS minifié et cest beau ! */'
      },minify: {
        expand: true,
        cwd: 'dist/css/',
        src: ['public/assets/css/*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      }
    }
  },


/**********
HTML minifié 
***********/
  htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        minifyJS: true
      },
      files: {
        'dist/index.html': 'index.html',
        'dist/contact.html': 'public/assets/html/contact.html'
      }
    }
  },


/**********
IMAGES minifié 
***********/
  imagemin: {
    static: {
      options: {
        optimizationLevel: 3,
        use: [mozjpeg()]
      },
      files: {
        'dist/assets/images/img.png': 'public/assets/images/img.png',
        'dist/assets/images/img.jpg': 'public/assets/images/img.jpg',
        'dist/assets/images/img.gif': 'public/assets/images/img.gif'
      }
    }
  },


/**********
CONCATENATION 
***********/
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public/assets/js/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },


/**********
JS minifié 
***********/
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },


/**********
TEST 
***********/
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'public/assets/js/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },


/**********
WATCH 127.0.0.1 
***********/
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }

});

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('serve', ['jshint', 'watch']);

  grunt.registerTask('default', ['clean','htmlmin', 'cssmin', 'imagemin', 'jshint', 'qunit', 'concat', 'uglify']);

};