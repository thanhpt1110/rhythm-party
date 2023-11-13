import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'

const Account = () => {
  return (
    <div>
      <Header/>
      <div className='py-16 bg-black opacity-90 text-white '>
          <div className='max-w-screen-xl mx-auto pt-16 pl-56 h-full'>
              <div>
                <i class="ri-account-pin-box-line text-3xl mb-4"></i>
              </div>
              <h2 className='font-bold text-4xl'>Account Setting</h2>
              <div className='mt-12 flex flex-col gap-4'>
                <p>UserName :</p>
                <input type="text" value='UserName_Google' className='w-2/3 bg-black border border-slate-800 rounded h-12 px-2' />
                <p>Email :</p>
                <input type="text" value='Email of User' className='w-2/3 bg-black border border-slate-800 rounded h-12
                px-2' />
                <p>Gender :</p>
                <select name="genderUser" id="genderUser" className='w-2/3 bg-black border border-slate-800 rounded h-12
                px-2'>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
                <p>Password :</p>
                <input type="password" value='123456' className='w-2/3 bg-black border border-slate-800 rounded h-12
                px-2 ' />
                <div className='flex flex-row gap-2 items-center'>
                  <input type="checkbox" id="myCheckbox" className='h-4'/>
                  <label for="myCheckbox" className='text-xs text-gray-500 px-2'>Share my registration data with Rhythm Party content providers for marketing purposes.</label>
                </div>
                <div className='flex flex-row justify-end gap-8 w-2/3 items-center'>
                  <a href='/' className='hover:scale-110 duration-300'>Cancel</a>
                  <button className='px-8 py-2 rounded bg-blue-700 hover:scale-105 duration-300'>Save</button>
                </div>
              </div>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Account
