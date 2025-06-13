type ChildProps = {
    children: React.ReactNode;
}

function PassingChildAsProps(props: ChildProps) {
    return (
        <>
            <p style={{ fontSize: "20px", color: "blue" }}>
                {props.children}
            </p>
            <hr />
        </>
    )
}

export default PassingChildAsProps;
