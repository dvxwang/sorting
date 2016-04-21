


describe('Bubble Sort', function(){

  beforeEach(function(){
    spyOn(window,"getCount").and.callThrough();
  })    
    
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
        expect (bubbleSort).toHaveBeenCalled();
    });

    it('handles an array with one item', function(){
        expect( bubbleSort([2]) ).toEqual( [2] );
        expect (bubbleSort).toHaveBeenCalled();
    });

    it('handles an array with multiple cases', function(){
        expect( bubbleSort([1, 7, 4, 234, 6]) ).toEqual( [1, 4, 6, 7, 234] );
        console.log(getCount.calls.count());
    });

});