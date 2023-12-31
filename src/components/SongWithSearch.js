import React, { useState } from 'react'
const SongWithSearch = ({onAddSongClick, music,  backgroundSong }) => {
    const handleAddIconClick = () => {
        onAddSongClick();   
    };
  return (
        <div className={`bg-[${backgroundSong}] text-white rounded-lg hover:bg-gray-900 cursor-pointer my-2`} onClick={handleAddIconClick} >
         <div className='flex flex-row justify-between py-4 items-center px-2 '>
            <div className='flex flex-row items-center gap-2 '>
              <img src={music.imgUrl} alt="SongImg" className='w-16 h-16 object-cover rounded'  />
              <div className='w-[75%]'>
                <p className='font-bold trmusicuncate'>{music.musicName}</p>
                <p className='text-gray-500 text-[13px] truncate'>{music.author}</p>
              </div>
            </div>
            <i
                className={`ri-${'add-circle-fill' } md:text-3xl cursor-poinmd:scale-125 text-center`}>
            </i>
         </div>
    </div>
  )
}
export default SongWithSearch
