'use client';
import React, { useState } from 'react'

const todo = () => {

      const [taskList, setTaskList] = useState([
        { text : 'learn html' , completed : false},
        { text : 'learn css' , completed : false},
        { text : 'learn javascript' , completed : false}
      ]);

        const addTask = (e) => {
          if (e.code === 'Enter') {
            console.log(e.target.value);

            const task = {text : e.target.value, completed : false};
            setTaskList([ task, ...taskList]);

            e.target.value = '';
          }
        }

  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-4xl text-center font-bold mb-5'>TODO LIST</h1>


    <div className='border rounded-lg shadow-md p-5'>
      <div>
        <input
        onKeyDown={addTask}
        type="text" 
        className='border-2 border-blue-300 p-3 w-full rounded-md'
        placeholder='Add your task here.....'/>
      </div>

      <div>
      
        
        {
          taskList.map( ( task, index ) => { 
            return (

              <div key = {index} className='flex justify-between p-3 border-2 rounded-lg mb-4'>

              <div>
                    <p className='text-2xl'>{task.text}</p>
              </div>
              <button className='bg-red-500 rounded-full shadow text-white px-4 py-1'>Delete</button>
              
              </div>

            ) })
        }
        
      
      </div>
     

    </div>

    </div>
  )
}

export default todo
