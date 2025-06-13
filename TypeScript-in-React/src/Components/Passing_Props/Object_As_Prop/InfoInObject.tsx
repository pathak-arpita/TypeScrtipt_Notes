import PassingObjectAsProp from "./PassingObjectAsProp"

function Info() {
    const myInfo = {
        name : "Project",
        description : "This is a project to learn TypeScript in React",
        version : "1.0.0",
        author : "Arpita",
    }
  return (
    <>
      <PassingObjectAsProp myInfo = {myInfo}/>
    </>
  )
}

export default Info
