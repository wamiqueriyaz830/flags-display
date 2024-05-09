import React from 'react'

const SingleFlags = ({name,flags}) => {
    console.log(name,flags);
  return (
    <div className="single-box">
        <img src={flags.png} alt={flags.alt}></img>
        <p>{name.common}</p>
    </div>
  )
}

export default SingleFlags