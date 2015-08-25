module.exports = function(grunt) {
  'use strict';
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  var srcFiles = [ './smallestPath.js', 'Gruntfile.js', './test/*.js' ];

  grunt.initConfig({
    jshint: {
      files: srcFiles,

      options: {
        jshintrc: true
      }
    },

    watch: {
      files: srcFiles,
      tasks: [
        'jshint'
      ]
    },

    simplemocha:{
      dev:{
        src:['./test/**/*test.js']
      }
    }

  });

  grunt.registerTask('test', ['jshint', 'simplemocha:dev']);

};
