type NameProp = {
    name: string;
    age: number;
    isLoggedIn: boolean;
}

function PassingValuesAsProp(nameProp: NameProp) {
    return (
        <h1>
            {nameProp.isLoggedIn ? `My name is ${nameProp.name}.
            I am ${nameProp.age} years old.` : "welcome Guest!"}
        </h1>
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

