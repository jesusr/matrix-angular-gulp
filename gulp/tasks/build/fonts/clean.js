var plugins = require('gulp-load-plugins')({lazy: true});
var del = require('del');

var args = require('yargs').argv;

var utils = require(global.GULP_DIR + '/utils');
var config = require(global.GULP_DIR + '/gulp.config');

/**
 * This task clean the fonts directory
 * Dependency: null
 * @param {}
 */
module.exports = {
  dep: [],
  fn: function (gulp, done) {

    utils.log('*** Cleaning dist fonts directory  ***');
    del(config.paths.dist + config.paths.fonts, done);
  }
};