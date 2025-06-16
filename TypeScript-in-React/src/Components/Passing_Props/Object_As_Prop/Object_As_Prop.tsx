import PassingObjectAsProp from "./PassingObjectAsProp"

function Object_As_Prop() {
  const myInfo = {
    name: "Project",
    description: "This is a project to learn TypeScript in React",
    version: "1.0.0",
    author: "Arpita",
  }
  return (
    <>
      <h2>Passing props as Object:</h2>
      <PassingObjectAsProp myInfo={myInfo} />
    </>
  )
}

export default Object_As_Prop;
