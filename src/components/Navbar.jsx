import { Help, ArrowDropDown, AddCircle, Person, } from "@mui/icons-material"
import { useState } from "react"
import boroLogo from '/boroLogo.svg'

const Navbar = () => {
  const duration = [
    { time: '30 Days' },
    { time: '90 Days' },
    { time: '6 Months' },
    { time: '12 Months' },
  ]

  const [focus, setFocus] = useState(0)

  const handleFocus = (index) => {
    setFocus(index)
  }

  return (
    <div className='absolute left-[20.37rem] top-[1.43rem] min-w-[64rem] w-[75%] px-10 py-1 '>
      <div id="userContainer" className="flex flex-row justify-between items-center">
        <div id="BoroLogo" className="h-[4rem] w-[16rem]  flex justify-start items-center gap-4 ">
          <div className="w-[3.25rem] h-[3.25rem] rounded-lg bg-[#f6f6fb] flex items-center justify-center ">
            <img src={boroLogo} alt="logo" className="w-[1.3rem] h-[1.3rem]" />
          </div>
          <h1 className="text-[20px] text-black font-[500]">Boro Team</h1>
          <div className="box-shadow cursor-pointer w-[1.5rem] h-[1.5rem] rounded-lg bg-[#f6f6fb] flex items-center justify-center ">
            <ArrowDropDown sx={{ color: '#000' }} className="w-[.75rem] h-[.75rem]" />
          </div>
          <AddCircle sx={{ color: '#7166F9' }} fontSize="large" className=" rounded-full cursor-pointer box-shadow" />
        </div>
        <div id="user" className="h-[4rem] w-[15rem] flex justify-end items-center gap-4 ">
          <div className="p-3 rounded-full box-shadow ">
            <Person sx={{ color: '#000' }} fontSize="large" />
          </div>
          <h1 className="text-[20px] text-black font-[500]">Zahra Hast..</h1>
          <div className="box-shadow cursor-pointer w-[1.5rem] h-[1.5rem] rounded-lg bg-[#f6f6fb] flex items-center justify-center ">
            <ArrowDropDown sx={{ color: '#000' }} className="w-[.75rem] h-[.75rem]" />
          </div>
        </div>
      </div>

      <div id="userDetails" className="flex flex-row justify-between items-center pt-4">
        <div id="statsHeading" className="h-[4rem] w-[25rem]  flex justify-start items-center gap-4 ">
          <h1 className="text-[36px] text-[#575353] font-[400] font-Alatsi">Projects Statistics</h1>
          <Help
            fontSize="medium"
            sx={{ color: '#7166F9' }}
            className="p-0 rounded-full cursor-pointer box-shadow "
          />
        </div>
        <div id="user" className="h-[4rem] w-[30rem] flex justify-end items-center gap-4  ">
          {duration.map((e, index) => {
            return (
              <div key={index} className={` h-[3rem] w-[6rem] transition-all hover:bg-slate-200 ${focus === index ? 'bg-[#7166f9]' : 'bg-[#f6f6fb] '} cursor-pointer rounded-full flex justify-center items-center `} onClick={() => handleFocus(index)}>
                <span className={`text-[14px] font-Neuton ${focus === index ? 'text-[#fff]' : 'text-[#000]'}`} >{e.time}</span>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Navbar
