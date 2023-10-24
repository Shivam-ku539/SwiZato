import React from 'react'

const RestCards = (props) => {
  return (
        <div className='res-card'>
          <img className='res-logo' alt='res-logo' src='https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg'/>
            <h3>{props.resname}</h3>
            <h4>Biryani,North Indian,Chinese</h4>
            <h4>4.4 Stars</h4>
        </div>
  )
}

export default RestCards