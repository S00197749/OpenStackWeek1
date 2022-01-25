import {getCurrencies} from './getCurrencies';

describe('Luke Sweeney,S00197749, GetCurrencies', () =>{
    it('Should contain USD', () =>{
        expect(getCurrencies()).toContain('USD');
    });
    it('Should contain GDP', () =>{
        expect(getCurrencies()).toContain('GDP');
    });
    it('Should contain EUR', () =>{
        expect(getCurrencies()).toContain('EUR');
    });
    it('Should contain CAD', () =>{
        expect(getCurrencies()).toContain('CAD'); //should fail
    });
});