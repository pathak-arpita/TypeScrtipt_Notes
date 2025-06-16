import PassingArrayAsProp from "./PassingArrayAsProp"

function Array_As_Props() {
    const listOfNames = [
        {
            firstName: "John",
            lastName: "Doe"
        },
        {
            firstName: "Jane",
            lastName: "Smith"
        },
        {
            firstName: "Alice",
            lastName: "Johnson"
        },
        {
            firstName: "Bob",
            lastName: "Brown"
        },
        {
            firstName: "Charlie",
            lastName: "Davis"
        }
    ]
    return (
        <>
            <h2>Passing props as Array:</h2>
            <PassingArrayAsProp listOfNames={listOfNames} />
        </>
    )
}

export default Array_As_Props
