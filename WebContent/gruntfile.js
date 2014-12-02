module.exports = function(grunt) {
	"use strict";

	// load what we need
	grunt.loadNpmTasks('grunt-contrib-uglify');

	var config = {
		uglify: {
			standalone: {
				files: {
					'js/crs.min.js': 'js/crs.js',
					'js/jquery.crs.min.js': 'js/jquery.crs.js'
				},
				options: {
					report: "min",
					compress: true
				}
			}
		}
	};

	grunt.initConfig(config);
	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('generate', ['uglify']);
};