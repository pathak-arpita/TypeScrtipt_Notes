import PassingValuesAsProp from "./PassingValuesAsProp"

function Info() {
    return (
        <>
            <PassingValuesAsProp name="John Doe" age={20} isLoggedIn={false}/>
        </>
    )
}

export default Info;