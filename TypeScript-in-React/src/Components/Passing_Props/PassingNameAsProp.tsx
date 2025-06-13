type NameProp = {
    name: string;
    age: number;
}

function PassingNameAsProp(nameProp: NameProp) {
    return (
        <h1>
            My name is {nameProp.name}.
            I am {nameProp.age} years old.
        </h1>
    )
}

export default PassingNameAsProp;


//-------------------------------------------------------------------------------------//

//& OR you can write it like this:
// function PassingNameAsProp({ name, age }: Props) {
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

