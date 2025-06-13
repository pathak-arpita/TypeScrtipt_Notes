type PassingObjectAsPropProps = {
    myInfo: {
        name: string;
        description: string;
        version: string;
        author: string;
    }
}
function PassingObjectAsProp({ myInfo }: PassingObjectAsPropProps) {
    return (
        <>
            <p style={{ fontSize: "20px", color: "blue" }}>
               This {myInfo.name} is a TypeScript-based React application. {myInfo.description}. It is currently at version {myInfo.version} and was developed by {myInfo.author}.
            </p>
            <hr />
        </>
    )
}

export default PassingObjectAsProp;
