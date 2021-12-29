(function(){
    function it(d, f){
        try {
            f();
            console.log(d + ' Passed!');
        } catch (error) {
            console.log(d + ' ERROR!');
            console.log(error);
        }    
    };

    function assert(isTrue) {
        if (!isTrue) {
            throw new Error();
        }
    }

    function sum(x, y) {
        return x + y;
    }

    it('Case 1', function(){
        assert(1 === 1);
    })

    it('case 2', function(){
        assert(1 !== 1);
    })

    it('Sum', function(){
        let a = 1;
        let b = 2;
        sum(a, b);
    })

})();