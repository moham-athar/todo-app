import React from 'react'
import { useState } from 'react'
const TodoInput = () => {
 
    const [text , setText] = useState("")
    const [list, setList] = useState([])

    const  handleClick = () => {
      text != "" && setList((list) => {
            const updatedList = [...list, text];
            console.log(updatedList)
            setText('');
            return updatedList;
       })
    }
    
    const handleRemove = (i) => {
      const updatedData = list.filter((elem , id) => {
        return i != id;
      })
      setList(updatedData);
    }

  return (
    <>
    <div className='pl-56 pt-5 flex justify-center'>
        <input 
            className='border-solid border-2 rounded p-2 w-3/5 '
            type='text'
            placeholder='Enter your todos'
            value = {text}
            onChange={(e) => setText(e.target.value)}
        />
        <button 
        onClick={() => handleClick()}
        className=' pr-5 pl-5 ml-2 pt-2 pb-2 rounded text-gray-500 border-solid border'>Add</button>
    </div>
    <div>
      {list!=[]  && list.map((data, i) => {
        return (
          <div 
          className=' w-3/6 pt-3 ml-[450px] mt-3 pb-2 pl-4 rounded border-solid border'
          key = {i}>
            <div className='flex justify-between p-2'>
            <p className=''>{data}</p>
            <button onClick={()=> handleRemove(i)}>❌</button>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default TodoInput