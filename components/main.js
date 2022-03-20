import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
    return (
        <main>
            <div className="relative w-full h-[640px] bg-no-repeat bg-cover bg-[url('../public/background.jpg')] bg-blend-darken flex justify-center overflow-hidden lg:overflow-visible">

                <div className="absolute top-10 text-white flex flex-col justify-between text-center lg:flex-row">
                    <div className='mt-3 lg:mr-20'>
                    <h4 className="uppercase text-base text-gray-400 font-semibold tracking-wider mb-8">Welcome to Vote</h4>
                    <h2 className=" text-3xl lg:text-5xl font-bold lg:leading-[65px]">Vote @PRO Vote @PR0246!<br/>
                          For a Revolutionary change.<br/>
                           Cast your vote Here.
                      </h2>
                      <Link href="/signup/instagram">
                          <a>
                      <button className="border-[3px] border-white p-1 w-60 rounded mt-8 lg:mt-20 hover:bg-white hover:text-black transition ease-in-out duration-500 font-medium">
                          <span className='flex justify-center items-center'>
                              
                              <Image
                          src="/insta.svg"
                          className=""
                          height={25}
                          width={30}
                          alt="second hero"/> 
                          <span className="mr-7"> Vote via instagram</span>
                          </span>
                        
                      </button>
                      </a>
                      </Link>
                      </div>

                      <div className='lg:ml-20 mt-8 lg:mt-1'>
                          <Image
                           src="/images/phone.png"
                           className=""
                           height={720}
                           width={430}
                           alt="second hero"/>
                      </div>
                </div>
            </div>
            <section className='pt-10'>
                <div className='flex flex-col lg:flex-row justify-center items-center '>
                    <div className='lg:mr-52 text-center flex flex-col items-center'>
                    <h2 className='font-bold text-4xl mb-5 flex lg:mr-5'>About Us</h2>
                    <div className='w-20 h-[2px] opacity-25 bg-gray-500'></div>
                    </div>
                    <p className='font-light break-words text-lg text-gray-700 md:w-[700px] text-center leading-loose lg:text-left mt-5 p-10'>Votepolli is a platform design to help people vote for who they 
                        like using their social handle, with ease. Votepolli have helped 
                        numerous contestant in accumulating votes through social media
                         with very little cost.</p>
                </div>
            </section>

            <section className='pt-10 p-5'>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <div className='text-center flex flex-col items-center justify-center'>
                    <h2 className='font-bold text-4xl mb-5'>How we Work?</h2>
                    <div className='w-20 h-[2px] opacity-25 bg-gray-500'></div>
                    </div>
                </div>

                <div className='grid justify-items-center lg:grid-cols-2 gap-4 gap-y-10'>
                    <div className='p-4 m-4 flex flex-col lg:flex-row justify-center items-center'>
                        <div className='h-14 w-14 p-5 rounded-full bg-green-600 text-white lg:mr-8 flex justify-center items-center mb-4'><span>1</span></div>
                        <div>
                            <h2 className='font-bold text-center lg:text-left text-2xl mb-5'> Sign-in</h2>

                            <div className='font-light leading-loose text-md text-gray-600 max-w-lg text-center lg:text-left'>To vote you must first signin via 
                            your social media account, before proceeding 
                                 to voting page.</div>
                        </div>
                    </div>

                    <div className='p-4 m-4 flex flex-col lg:flex-row justify-center items-center'>
                    <div className='h-14 w-14 p-5 rounded-full bg-green-600 text-white lg:mr-8 flex justify-center items-center mb-4'><span>2</span></div>
                        <div>
                        <h2 className='font-bold text-center lg:text-left text-2xl mb-5'> Select</h2>
                        <div className='font-light leading-loose text-md text-gray-600 max-w-lg text-center lg:text-left'>Select the name of the candidate you
                            intend voting for and place your vote.</div>
                        </div>
                        
                    </div>

                    <div className='p-4 m-4 flex flex-col lg:flex-row justify-center items-center'>
                    <div className='h-14 w-14 p-5 rounded-full bg-green-600 text-white lg:mr-8 flex justify-center items-center mb-4 self-center'><span>3</span></div>
                        <div className=''>
                        <h2 className='font-bold text-center lg:text-left text-2xl mb-5'> Create</h2>
                        <div className='font-light leading-loose text-md text-gray-600 max-w-lg text-center lg:text-left'>To get us to create a lead for your own 
                            campaign, leave a mail, and we will 
                            contact you.</div>
                        </div>
                        
                    </div>

                    <div className='p-4 m-4 flex flex-col lg:flex-row justify-center items-center'>
                    <div className='h-14 w-14 p-5 rounded-full bg-green-600 text-white lg:mr-8 flex justify-center items-center mb-4'><span>4</span></div>
                        <div className=''>
                        <h2 className='font-bold text-center lg:text-left text-2xl mb-5'> Publish</h2>
                        <div className='font-light leading-loose text-md text-gray-600 max-w-lg text-center lg:text-left'>After we are done verifying you and what 
                            you are campaigning for we will 
                            publish it on our platform. that simple.</div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>
         
        </main>
    )
}

export default Main