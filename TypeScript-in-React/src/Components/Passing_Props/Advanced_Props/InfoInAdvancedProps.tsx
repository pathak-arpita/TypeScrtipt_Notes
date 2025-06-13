//& NOTE ---------------> You can only pass specific status values, even though they are in string format.

import PassingAdvanceProp from "./PassingAdvanceProp";
import PassingChildAsProps from "./PassingChildAsProps";
import PassingChildProp from "./PassingChildProp";

function InfoInAdvancedProps() {
    return (
        <>
            <h2>Advance Prop Passing:</h2>
            <PassingAdvanceProp status = "loading"/>
            <PassingChildProp>This is child prop.</PassingChildProp>
            <PassingChildAsProps>
                <PassingChildProp>Here I am trying to passing child as prop using react node.</PassingChildProp>
            </PassingChildAsProps>
        </>
    )
}

export default InfoInAdvancedProps;
