import InfoInAdvancedProps from "./Components/Passing_Props/Advanced_Props/InfoInAdvancedProps";
import InfoInArray from "./Components/Passing_Props/Array_As_Props/InfoInArray";
import InfoInObject from "./Components/Passing_Props/Object_As_Prop/InfoInObject";
import InfoInValue from "./Components/Passing_Props/Values_As_Props/InfoInValue";

function App() {

  return (
    <>
      {/* Passing Props */}
      <div>
        <InfoInValue />
        <InfoInObject />
        <InfoInArray />
        <InfoInAdvancedProps />
      </div>
    </>
  )
}

export default App;
