import React from 'react'

const Contact = () => {
  return (
    <div>
      
       <br/>
        <div class="px-6 py-6 bg-cyan-400 dark:bg-gray-800 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div class="xl:w-0 xl:flex-1">
            <h2 class="text-2xl leading-8 font-extrabold tracking-tight text-black sm:text-3xl sm:leading-9">
              Get in touch
            </h2>
            <p class="mt-3 max-w-3xl text-lg leading-6 text-amber-600">
              You can reach us with any questions and we will respond to all inquiries within 48 hrs.
            </p>
          </div>
          <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            {/* <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-500 hover:bg-purple-400 focus:outline-none focus:bg-purple-400 transition duration-150 ease-in-out">
                Notify me
              </button>
            </div> */}
            <p class="mt-3 text-sm leading-5 text-amber-600">
              Available every Monday - Friday (0900hrs-1700hrs)EAT
   
            </p>
            <p class="text-sm leading-5 text-amber-600">
              We will use slack as our main channel of communication in addtion to Emails
            </p>
          </div>
        </div>



    </div>
  )
}

export default Contact