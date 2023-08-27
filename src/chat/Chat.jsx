import React from 'react';

const Chat = () => {
  return (
    <div className='chat p-3'>
      <div className="chat-title flex justify-between my-2">
          <h1 className='text-lg md:text-xl'>All Chats</h1>
        <div className=''>
          <button className="new-chat hover:bg-blue-700 text-white font-bold py-2 text-xs md:text-sm px-4 border border-blue-700 rounded">
            New Chat
          </button>
        </div>
      </div>

      <div className="search-chat-user md:w-1/4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Filter by chat name" />
      </div>

      <div className="chat-user-list my-3">
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left">
             <thead className="text-xs  uppercase bg-gray-50">
               <tr>
                 <th scope="col" className="px-6 py-3">
                   Status
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Name
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Chats
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Voice
                 </th>
                 <th scope="col" className="px-6 py-3">
                   URLs Indexed
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Documents Indexed
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Date Created
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Chat Type
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Display Name
                 </th>
                 <th scope="col" className="px-6 py-3">
                   View Chart Log
                 </th>
               </tr>
             </thead>
             <tbody>
               <tr className="bg-white border-b toggle-button">
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="" className="sr-only peer" />
                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                   </label>
                 </th>
                 <td className="px-6 py-4">
                   Jack Test
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   18 hours ago
                 </td>
                 <td className="px-6 py-4">
                   Sales person
                 </td>
                 <td className="px-6 py-4">
                   popver
                 </td>
                 <td className="px-6 py-4">
                   <button className="button-show-chart bg-transparent text-blue-800 font-bold py-2 text-xs px-4 rounded">
                   View Chart Log
                   </button>
                 </td>
               </tr>
               <tr className="bg-white border-b toggle-button">
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="" className="sr-only peer" />
                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                   </label>
                 </th>
                 <td className="px-6 py-4">
                   Jack Test
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   18 hours ago
                 </td>
                 <td className="px-6 py-4">
                   Sales person
                 </td>
                 <td className="px-6 py-4">
                   popver
                 </td>
                 <td className="px-6 py-4">
                   <button className="button-show-chart bg-transparent text-blue-800 font-bold py-2 text-xs px-4 rounded">
                   View Chart Log
                   </button>
                 </td>
               </tr>
               <tr className="bg-white border-b toggle-button">
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="" className="sr-only peer" />
                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                   </label>
                 </th>
                 <td className="px-6 py-4">
                   Jack Test2
                 </td>
                 <td className="px-6 py-4">
                   42
                 </td>
                 <td className="px-6 py-4">
                   Jack
                 </td>
                 <td className="px-6 py-4">
                   42
                 </td>
                 <td className="px-6 py-4">
                   42
                 </td>
                 <td className="px-6 py-4">
                   4 days ago
                 </td>
                 <td className="px-6 py-4">
                   Customer support
                 </td>
                 <td className="px-6 py-4">
                   popver
                 </td>
                 <td className="px-6 py-4">
                   <button className="button-show-chart bg-transparent text-blue-800 font-bold py-2 text-xs px-4 rounded">
                   View Chart Log
                   </button>
                 </td>
               </tr>
               <tr className="bg-white border-b toggle-button">
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="" className="sr-only peer" />
                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                   </label>
                 </th>
                 <td className="px-6 py-4">
                   Jack Test
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   18 hours ago
                 </td>
                 <td className="px-6 py-4">
                   Sales person
                 </td>
                 <td className="px-6 py-4">
                   popver
                 </td>
                 <td className="px-6 py-4">
                   <button className="button-show-chart bg-transparent text-blue-800 font-bold py-2 text-xs px-4 rounded">
                   View Chart Log
                   </button>
                 </td>
               </tr>
               <tr className="bg-white border-b toggle-button">
                 <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" value="" className="sr-only peer" />
                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                   </label>
                 </th>
                 <td className="px-6 py-4">
                   Jack Test
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   None
                 </td>
                 <td className="px-6 py-4">
                   18 hours ago
                 </td>
                 <td className="px-6 py-4">
                   Sales person
                 </td>
                 <td className="px-6 py-4">
                   popver
                 </td>
                 <td className="px-6 py-4">
                   <button className="button-show-chart bg-transparent text-blue-800 font-bold py-2 text-xs px-4 rounded">
                   View Chart Log
                   </button>
                 </td>
               </tr>
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chat;
