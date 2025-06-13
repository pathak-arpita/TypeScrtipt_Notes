type ChildrenProps = {
    children:string
}
function PassingChildProp(props: ChildrenProps) {
  return (
    <p style={{ fontSize: "20px", color: "blue" }}>
      {props.children} 
    </p>
  )
}

export default PassingChildProp;
