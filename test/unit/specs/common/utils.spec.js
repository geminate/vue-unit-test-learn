import assert from 'assert';
import {add} from '@/common/utils';

describe('#utils.js', () => {

    describe('#add()', () => {

        it("1加1应该等于2", function () {
            assert.strictEqual(add(1, 1), 2);
        });

    });

});