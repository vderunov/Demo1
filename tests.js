import test1 from './src/test/task1/test1.js';
import test3 from './src/test/task3/test3.js';
import test4 from './src/test/task4/test4.js';
import test5 from './src/test/task5/test5.js';
import test6 from './src/test/task6/test6.js';
import test7 from './src/test/task7/test7.js';

mocha.setup('bdd');
const { assert } = chai;
test1(assert);
test3(assert);
test4(assert);
test5(assert);
test6(assert);
test7(assert);
mocha.run();
