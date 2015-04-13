/* global describe, it */

(function () { 'use strict';

	//mocha test example
	describe('Foobar', function() {  
		describe('#sayHello()', function() {
			it('should return some text', function() {
				var foobar = {
					sayHello: function() {
						return 'Hello World!';
					}
				};

				assert(foobar.sayHello() === 'funky chicken', 'Was expecting "Hello World!"');
			});
		});
	});


})();




