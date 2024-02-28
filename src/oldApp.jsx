import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
import Hello from "./assets/Hello";

function App(){
  const helloData = [
    {name: 'chisanucha', message: 'hi there'},
    {name: 'tom', message: 'Hello'}
  ];
  return(
    <div className='App'>
      < Counter />
      {helloData.map((data, index)=>
      <Hello key={index} neme={data.name} message={data.message}/>
      )}

      <Contact email='chisanucha@gmail.com' phone='666666666'/>
    </div>
  );
}
export default App