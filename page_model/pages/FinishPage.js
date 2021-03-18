import {Selector} from 'testcafe';

class FinishPage{
    constructor(){
        this.subHeader = Selector('.subheader');

    }

}

export default new FinishPage();