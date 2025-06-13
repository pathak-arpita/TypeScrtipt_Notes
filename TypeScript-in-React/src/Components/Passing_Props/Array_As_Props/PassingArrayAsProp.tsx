type PassingArrayAsProp = {
    listOfNames: {
        firstName: string;
        lastName: string;
    }[];
}

function PassingArrayAsProp({ listOfNames }: PassingArrayAsProp) {
    return (
        <>
            <div>
                {listOfNames.map((name, index) => {
                    return (
                        <p key={index} style={{ fontSize: "20px", color: "blue" }}>
                           {index+1}. My name is {name.firstName} {name.lastName}.
                        </p>
                    );
                })}
            </div>
            <hr />
        </>
    )
}

export default PassingArrayAsProp;
