import Values_As_Props from './Components/Passing_Props/Values_As_Props/Values_As_Props';
import Object_As_Prop from './Components/Passing_Props/Object_As_Prop/Object_As_Prop';
import Array_As_Props from './Components/Passing_Props/Array_As_Props/Array_As_Props';
import Advanced_Props from './Components/Passing_Props/Advanced_Props/Advanced_Props';


function App() {

  return (
    <>
      {/* Passing Props */}
      <div>
       <Values_As_Props />
       <Object_As_Prop />
       <Array_As_Props />
       <Advanced_Props />
      </div>
    </>
  )
}

export default App;
