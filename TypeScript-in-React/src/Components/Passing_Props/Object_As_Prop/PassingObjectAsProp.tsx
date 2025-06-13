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
        <h1>
          This is a {myInfo.name}. And it is a {myInfo.description} project. The version is {myInfo.version} and the author is {myInfo.author}.
        </h1>
    )
}

export default PassingObjectAsProp
