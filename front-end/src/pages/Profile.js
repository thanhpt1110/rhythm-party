import React from 'react'
import Header from '../components/Header'
import Player from '../components/Player'
import Playlist from '../components/Playlist'

const Profile = () => {
  return (
    <div className=''>
      <Header/>
      <div className='py-16 bg-black opacity-90'>
        <div className=''>
          <div className="relative bg-slate-400">
            <div className=" h-72 w-full bg-cover bg-center bg-gradient-to-b from-transparent to-[#181818]">
            </div>
            <div className="absolute top-1/2 ml-32 transform -translate-y-1/2 items-center flex flex-row ">
              <img className="h-44 w-44 rounded-full" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="profile"/>
              <div className=' absolute  ml-56  w-40  py-2 text-white'>
                <p>Profile</p>
                <p className='font-bold text-3xl'>UserName</p>
              </div>
            </div>
          </div>
          <div className='max-w-screen-xl mx-auto p-4 h-screen'>
              <div className='flex items-baseline mt-4 justify-between'>
                 <p className='text-white font-bold text-2xl '>Recent Playlists</p>
                 <span className='text-white font-semibold text-[12px] hover:underline cursor-pointer'>Show All</span>
              </div>

              <div className='text-white mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 '>
                <Playlist urlImg='https://i.pinimg.com/564x/17/d8/ff/17d8ff4be178c4cddb05630000420910.jpg' playlistName="Taylor Swift" author='LuongLe' />
                <Playlist urlImg='https://i1.sndcdn.com/artworks-W86AP4p4wNY1zuR5-tog6CQ-t500x500.jpg' playlistName='Ngot' author='QuocDung'/>
                <Playlist urlImg='https://avatar-ex-swe.nixcdn.com/playlist/2023/05/25/5/3/5/f/1684996435586_500.jpg' playlistName='Yên' author='Hunter'/>
                <Playlist urlImg='https://i1.sndcdn.com/artworks-uzmx8xPhbzlA3kjl-5oDvYA-t500x500.jpg' playlistName='Từng Quen' author='Wren Evans'/>
                <Playlist urlImg='https://i.scdn.co/image/ab67616d00001e02e50594eb6a3b518dcb78bf59' playlistName='Cá Hồi Hoang'
                author='PhuongAnh'/>
                <Playlist urlImg='https://upload.wikimedia.org/wikipedia/vi/5/5f/Blackpink-_The_Album.png' playlistName='BlackPink' author='BlinkVN'/>

              </div>
          </div>
        </div>

      </div>

      <Player/>
    </div>
  )
}

export default Profile
