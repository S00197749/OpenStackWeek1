import {compute} from './compute';

describe('Luke Sweeney,S00197749, Compute', () =>{
    it('Should return 0 if the input is negative', () =>{
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('Should return 2 if the input is positive', () =>{
        const result = compute(1);
        expect(result).toBe(2);
    });
    it('Should be greater than 2', () =>{
        const result = compute(5);
        expect(result).toBeGreaterThan(2);
    });
})