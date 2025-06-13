import PassingValuesAsProp from "./PassingValuesAsProp"

function InfoInValue() {
    return (
        <>
            <h2>Passing props as Values :</h2>
            <PassingValuesAsProp name="John Doe" age={20} isLoggedIn={false} />
        </>
    )
}

export default InfoInValue;