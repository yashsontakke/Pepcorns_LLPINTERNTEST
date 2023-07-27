import React from 'react'
import './Figure.css'

const Figure = () => {
  return (
   <div className="ng-binding">
    <figure className="fig-img">
      <img className="img" src="https://ucarecdn.com/587800c6-340f-4330-a186-23fef8798de7/WemakeSkincareIntelligent101.png" alt="" />
      <figcaption className="fig-cap"></figcaption>
    </figure>
    <figure className="fig-img">
      <img className="img" src="https://ucarecdn.com/16964edd-e771-4538-a964-fdc840d88882/WemakeSkincareIntelligent102.png" alt="" />
      <figcaption className="fig-cap"></figcaption>
    </figure>
    <figure className="fig-img">
      <img className="img" src="https://ucarecdn.com/6b3443bf-ac22-41d4-b3ac-92639075c6df/WemakeSkincareIntelligent103.png" alt="" />
      <figcaption className="fig-cap"></figcaption>
    </figure>
    {/* Add other figures here */}
  </div>
  )
}

export default Figure