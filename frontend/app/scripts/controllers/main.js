'use strict';

/**
 * @ngdoc function
 * @name snippetsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the snippetsApp
 */
angular.module('snippetsApp')
  .controller('MainCtrl', function ($scope, cfpLoadingBar) {

    $scope.topSnippets = [
      {
      	name: 'Sample snippet',
      	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, minima.',
      	image: 'sample.png',
      	source: 'jQuery.acceptData = function( owner ) {\n  // Accepts only:\n  //  - Node\n  //    - Node.ELEMENT_NODE\n  //    - Node.DOCUMENT_NODE\n  //  - Object\n  //    - Any\n  /* jshint -W018 */\n  return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );\n};'
      },
      {
      	name: 'Other Sample snippet',
      	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, minima.',
      	image: 'sample.png',
      	source: '"jQuery.fn.extend({\n\thover: function( fnOver, fnOut ) {\n\t\treturn this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );\n\t},\n\n\tbind: function( types, data, fn ) {\n\t\treturn this.on( types, null, data, fn );\n\t},\n\tunbind: function( types, fn ) {\n\t\treturn this.off( types, null, fn );\n\t},\n\n\tdelegate: function( selector, types, data, fn ) {\n\t\treturn this.on( types, selector, data, fn );\n\t},\n\tundelegate: function( selector, types, fn ) {\n\t\t// ( namespace ) or ( selector, types [, fn] )\n\t\treturn arguments.length === 1 ? this.off( selector, \"**\" ) : this.off( types, selector || \"**\", fn );\n\t}\n});"'
      }
    ];

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.start = function() {
      cfpLoadingBar.start();
    };
  });
