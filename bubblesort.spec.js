


describe('Bubble Sort', function(){

   beforeEach(function(){
     spyOn(window, "swap").and.callThrough();
   })    
    
    it('handles an empty array', function(){
        expect(bubbleSort([])).toEqual( [] );
    });

    it('handles an array with one item', function(){
        expect(bubbleSort([2])).toEqual( [2] );
    });

    it('handles an array with multiple cases', function(){
        expect(bubbleSort([1, 7, 4, 234, 6])).toEqual( [1, 4, 6, 7, 234] );
        console.log(swap.calls.count());
    });

});