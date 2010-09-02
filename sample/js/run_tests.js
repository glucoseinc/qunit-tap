load("./lib/math.js");
load("./lib/incr.js");

load("../../vendor/qunit/qunit/qunit.js");
load("../../lib/qunit-tap.js");

QUnit.init();
QUnit.config.blocking = false;
QUnit.config.autorun = true;
QUnit.config.updateRate = 0;

print("1..13");
load("./test/math_test.js");
load("./test/incr_test.js");
