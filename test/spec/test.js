/* global describe, it */

(function () { 'use strict';

	//mocha string test to match expression
	describe('Foobar', function() {
		describe('#sayHello()', function() {
			it('should return some text', function() {
				var foobar = {
					sayHello: function() {
						return 'Hello World!';
					}
				};

				assert(foobar.sayHello() === 'Hello World!', 'Was expecting "Hello World!"');
			});

		});

	});

	// calc test to match result
	describe('#sumCalc()', function() {
		it('should return the calc z = x + y', function() {
			var foobar = {
				sumCalc: function() {
					var x = 5, y = 2, z = x + y;
					return z;
				}
			};

			assert(foobar.sumCalc() === 7, 'Was expecting 7');
		});
	});

})();




