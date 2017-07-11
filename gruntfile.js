module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'dist/css/styles.css': 'sass/styles.scss'

        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/scripts.min.js': ['js/vendor/jquery-2.1.3.min.js', 
                                'js/vendor/jquery-migrate-1.2.1.min.js', 
                                'js/vendor/jquery.inview.min.js', 
                                'js/vendor/jquery.waypoints.min.js', 
                                'js/vendor/jquery.smoothwheel.js',
                                'js/scrolltopcontrol.js',
                                'js/vendor/jquery.circliful.min.js',
                                'js/core.js',
                                'js/ga.js']
        }
      }
    },
    bake: {
        your_target: {
            options: {
                // Task-specific options go here.
            },

            files: {
                "dist/index.php": "app/index.php",
                "dist/about.php": "app/about.php",
                "dist/contact.php": "app/contact.php",
                "dist/services.php": "app/services.php",
                "dist/classes/class.phpmailer.php": "app/classes/class.phpmailer.php",
                "dist/classes/class.smtp.php": "app/classes/class.smtp.php",
                "dist/classes/sendmail.php": "app/classes/sendmail.php"
            }
        },
    },
    copy: {
      main: {
        expand: true,
        cwd: 'assets',
        src: '**',
        dest: 'dist/',
      },
      hidden: {
        expand: true,
        src: 'assets/.htaccess',
        dest: 'dist/',
        flatten: true,
        filter: 'isFile',
      }
    },
    clean: ['dist']
  });
  grunt.registerTask('default', ['sass:dist', 'watch']);
  grunt.registerTask('dist', ['clean', 'copy:main', 'copy:hidden', 'bake', 'sass', 'uglify']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bake');
}; 