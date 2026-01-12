import Cards from "./components/cards";
import Head from "./components/Head";
import Data from './data.js'
export default function App(){
  const cardElements =Data.map(d=>
    <Cards
    key={d.id}
    {...d}
    />
  )
  return (
    <>
      <Head />
      {cardElements}
    </>
  );
}