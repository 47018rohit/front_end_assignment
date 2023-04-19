import { useState } from 'react'
import { summary } from './summaryData'
import { SvgIcon } from '@mui/material'

const Summary = () => {
  const [focus, setFocus] = useState(0)

  const handleFocus = (index) => {
    setFocus(index)
  }

  return (
    <div className='min-w-[32rem] flex flex-1 h-[25.5rem] '>
      <div className='w-full gridTemp gap-4 h-full'>
        {summary.map((e, index) => {
          return (
            <div
              key={index}
              onClick={() => handleFocus(index)}
              className={`bg-[#f6f6fb] transition-all cursor-pointer ${focus === index ? 'gradientRec z-30' : ''} flex flex-col items-center justify-center gap-2 hover:bg-slate-200 rounded-[2rem]`}
            >
              <div className='w-full h-[40%] flex justify-center items-center gap-8 '>
                <SvgIcon component={e.icon} fontSize='large' sx={focus === index ? { color: '#f6f6fb' } : { color: '#7166F9' }}  className='h-full flex flex-1'/>
                <div className='h-full flex justify-center items-center gap-[.5rem] flex-1 '>
                  <SvgIcon component={e.arrow} sx={e.status==='up'?{color:'#14ED44'}:{color:'#FD2E00'}} fontSize='medium' />
                  <p className={`text-[12px] ${focus===index?'':'text-black'} `} >{e.arrowNum}</p>
                </div>
              </div >
              <div className='w-full h-[50%] flex justify-center items-center gap-5 '>
                <div className={` flex flex-col flex-1 justify-center items-center gap-1 ${focus===index?'':'text-black'}`}>
                  <h1 className='text-[32px] px-2 font-[500]'>{e.propNum}</h1>
                  <p className='text-[14px]'>{e.property}</p>
                </div>
                <SvgIcon component={e.help} sx={focus===index?{color:'#f6f6fb'}:{color:'#7166f9'}} className='flex flex-1' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Summary
