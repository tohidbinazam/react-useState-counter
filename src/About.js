import { useState } from "react";


const About = () => {

  const counterStyle = {
    fontSize : 150,
    color : 'DeepPink'
  }

  const [ count, setcount] = useState(0);

  const handleIncriment = () => {
    setcount(count + 1)
  }
  
  const handleDrecriment = () => {
    if( count > 0 ){
      setcount(count - 1)
    }
  }

  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <button onClick={ handleIncriment } className="btn btn-success btn-lg" > ++ </button> &nbsp;
            <button onClick={ handleDrecriment } className="btn btn-danger btn-lg" > -- </button>
            <hr></hr>
            <h1 style={counterStyle} className="fw-bold">{ count }</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About