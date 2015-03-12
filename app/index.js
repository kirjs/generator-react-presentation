'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the exceptional ' + chalk.red('ReactPresentation') + ' generator!'
    ));

    var prompts = [{
      type: 'string',
      name: 'title',
      message: 'Presentation title',
      default: 'Awesome presentation'
    }];

    this.prompt(prompts, function (props) {
      console.log( '______')
      console.log( props)
      this.title = props.title;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {

      [
        'package.json',
        'start.js',
        'webpack.config.hot.js'

      ].map(function (item) {
          this.fs.copy(
            this.templatePath('_' + item),
            this.destinationPath(item)
          );
        }, this);

      [
        'index.html',
        'index.jsx'
      ].map(function (item) {

          this.fs.copyTpl(
            this.templatePath('src/_' + item),
            this.destinationPath('src/' + item),
            { title: this.title}
          );
        }, this);

      this.fs.copy(
        this.templatePath('src/css/_style.css'),
        this.destinationPath('src/css/style.css')
      );

    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
