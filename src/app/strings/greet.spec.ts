import {greet} from './greet';

describe('Luke Sweeney,S00197749, Greet', () =>{
    it('Should include name in the message', () =>{
        expect(greet('Frank')).toContain('Frank');
    });
    it('Should include Hello in the message', () =>{
        expect(greet('Frank')).toContain('Hello'); //should fail
    });
});