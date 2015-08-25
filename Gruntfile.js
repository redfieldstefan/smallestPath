module.exports = function(grunt) {
  'use strict';
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

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

  });

  grunt.registerTask('default', ['jshint']);

};
