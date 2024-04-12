import React from "react"
import PropTypes from 'prop-types';


const Card = (props) => {


  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          <div className='rate'>
            <button className='btn_shadow '>{props.rate}</button>
          </div>
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  )
}


Card.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};



export default Card;