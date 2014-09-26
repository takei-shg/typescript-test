module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        main: {
            files: {
                'out/main_<%= pkg.version %>.min.js': ['out/main.js']
            }
        }
    },
    typescript: {
        main: {
            src: ['src/**/*.ts'],
            dest: 'out/main.js',
            options: {
                comments: true,
                noImplicitAny: true,
                module: 'commonjs',
                target: 'es5'
            }
        },
        test: {
            src: ['test/**/*.ts'],
            dest: 'out/',
            options: {
                comments: true,
                noImplicitAny: true,
                module: 'commonjs',
                target: 'es5'
            }
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-typescript');

grunt.registerTask('build', ['typescript', 'uglify']);

};
