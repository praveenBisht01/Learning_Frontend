import React, { useState } from 'react'



const App = () => {

  const [title, settitle] = useState('');

  const submithandler = (e) => {
    e.preventDefault();
    console.log("form seccessfully submitted by ", title);

    settitle("")
}
   return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="bg-white p-8 rounded-xl shadow-lg w-96">
         <h1 className="text-3xl font-bold text-center mb-6">Login Form</h1>

         <form
           
           onSubmit={(e) => {
             submithandler(e);
           }}
           
           className="space-y-4">
           <input
             value={title}
             onChange={(dets) => {
               settitle(dets.target.value)
             }}

             type="text"
             placeholder="Enter Name"
             className="w-full border p-2 rounded-lg"
           />

           <br />
           <br />

           <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
             Submit
           </button>
         </form>
       </div>
     </div>
   );
}

export default App
