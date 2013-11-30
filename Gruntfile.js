module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                files: {
                    'lib/<%= pkg.name %>.css': 'lib/<%= pkg.name %>.less'
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
            },
            build: {
                files: {
                    'dist/<%= pkg.name %>.min.css': 'lib/<%= pkg.name %>.css'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
            },
            build: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['lib/<%= pkg.name %>.js']
                }
            }
        },
        jshint: {
            options: {

            },
            files: ['Gruntfile.js', 'lib/*.js']
        },
        watch: {
            files: 'lib/*',
            tasks: ['jshint', 'less']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['less', 'cssmin', 'uglify']);
    grunt.registerTask('test', ['jshint']);
};
