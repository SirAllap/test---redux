import React from 'react'

const OnePieceCharacters = ({ data }) => {
  return (
    <>
      <div className='presentacion'>
        <div className='usuario'>
          <div className='character-pic'>
            <img
              src={`https://robohash.org/${data.french_name.toLowerCase()}.png?bgset=bg1`}
              alt='OnePieceRandomizeeRobotProfilePic'
            />
          </div>
          <div className='datos'>
            <div className='nombre'>Name: {data.french_name}.</div>
            <div>Size: {data.size}</div>
            <div>Age: {data.age}</div>
            <div>Bounty: {data.bounty}</div>
            <div>Status: {data.status}</div>
            <div>Job: {data.job}</div>
          </div>
          <div className='botones'>
            <button onClick={() => seeLore()} className='blue'>
              LORE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnePieceCharacters
