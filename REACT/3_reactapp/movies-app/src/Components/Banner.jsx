import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover flex items-end' style={{backgroundImage:`url(https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)`}}>
        <div className='text-white w-full text-center text-2xl'>PlaceHolder movies</div>
    </div>
  )
}

export default Banner