/* tslint:disable:no-unused-variable */

import { ReversePipe } from "./reverse.pipe";

describe('',()=>{

    it('should reverse the characters in string',()=>{
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('shivraj')).toEqual('jarvihs');
    })
});