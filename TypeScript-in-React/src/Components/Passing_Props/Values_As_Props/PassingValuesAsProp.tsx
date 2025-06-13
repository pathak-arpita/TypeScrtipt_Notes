type NameProp = {
    name: string;
    age: number;
    isLoggedIn: boolean;
}

function PassingValuesAsProp(nameProp: NameProp) {
    return (
        <>
            <p style={{ fontSize: "25px", color: "blue" }}>
                {nameProp.isLoggedIn ? `My name is ${nameProp.name}.
            I am ${nameProp.age} years old.` : "welcome Guest!"}
            </p>
            <hr />
        </>
    )
}

export default PassingValuesAsProp;


//-------------------------------------------------------------------------------------//

//& OR you can write it like this:
// function PassingValuesAsProp({ name, age }: Props) {
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

