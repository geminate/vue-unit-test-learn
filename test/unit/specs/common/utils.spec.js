import {add} from '@/common/utils';

describe('#utils.js', () => {

    describe('#add()', () => {

        it("1加1应该等于2", function () {
            expect(add(1, 1)).to.equal(2);
        });

    });

});