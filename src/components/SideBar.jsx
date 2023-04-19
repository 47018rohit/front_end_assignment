import { Bookmark, DockOutlined, Fireplace, Home, Man, Search, Settings, Logout, Help } from "@mui/icons-material"
import { } from "@mui/icons-material"
import { SvgIcon } from "@mui/material"
import { useState } from "react"

const SideBar = () => {
  const [focus, setFocus] = useState(0)
  const [serviceFocus, setServiceFocus] = useState(null)
  const [toggle, setToggle] = useState(false)

  const list = [
    { name: "Overview", icon: Home },
    { name: "Opportunities", icon: Fireplace },
    { name: "My Competitors", icon: Man },
    { name: "Briefs", icon: DockOutlined },
    { name: "Saved", icon: Bookmark },
  ]
  const serviceList = [
    { name: "Setting", icon: Settings },
    { name: "Help", icon: Help },
    { name: "Log Out", icon: Logout },
  ]
  

  const handleSearch = () => {
    setToggle(!toggle)
  }
  const handleFocus = (index) => {
    setFocus(index)
    setServiceFocus(null)
  }
  const handleServiceFocus = (index) => {
    setServiceFocus(index)
    setFocus(null)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='sidebar-bg w-[279px] h-full absolute'>

      <div className={`h-[52px] transitionSearch ${toggle ? 'w-[200px] rounded-full' : 'w-[52px] rounded-full'} violet-pink-gradient relative top-[38px] left-[36px] cursor-pointer `}   >
        {toggle ?
          <div className="px-2">
            <form className="flex flex-row gap-2 justify-end items-center p-1 " onSubmit={handleSubmit}>
              <input type="text " placeholder="Search" className="bg-none placeholder:text-secondary outlined-none border-none overflow-hidden " />
              <button type="submit">
                <Search
                  fontSize="small"
                  className={` flex items-center justify-center `}
                />
              </button>
              <div className="  text-[20px] text-center p-1" onClick={handleSearch}>x</div>
            </form>
          </div>

          : <Search
            fontSize="large"
            className={`relative top-[9px] left-[10px] `}
            onClick={handleSearch}
          />}
      </div>
      <h2 className={`concured relative  left-[110px] transition-all ${toggle ? 'hidden opacity-0' : " opacity-100"} `}>Concured</h2>


      <div className=" absolute top-[153px] w-full">
        <ul className="list-none ">
          {list.map((e, index) => {
            return (
              <li key={index}  >
                <div className={`${focus === index ? 'focus' : ''}  flex flex-row items-center hover:bg-slate-200 transition-all cursor-pointer`} onClick={() => handleFocus(index)} >
                  <SvgIcon
                    component={e.icon}
                    fontSize='large'
                    sx={focus === index ? { color: '#7166F9' } : { color: '#000000' }}
                    className="relative left-[30px] "
                  />
                  <h4 className={`text-black ${focus === index ? 'text-[14px]' : 'text-[12px]'} py-4 px-16 `}>{e.name}</h4>
                  {focus === index ? <div className="w-1 h-[77px] bg-[#7166F9] absolute right-0 py-0 rounded-tl-full rounded-bl-full " /> : ''}
                </div>
              </li>
            )
          })
          }
        </ul>
      </div>

      <div className=" absolute top-[608px] w-full">
        <ul className="list-none ">
          {serviceList.map((e, index) => {
            return (
              <li key={index}  >
                <div className={`${serviceFocus === index ? 'focus' : ''}  flex flex-row items-center hover:bg-slate-200 transition-all cursor-pointer`} onClick={() => handleServiceFocus(index)} >
                  <SvgIcon
                    component={e.icon}
                    fontSize='large'
                    sx={serviceFocus === index ? { color: '#7166F9' } : e.name=== 'Log Out'? {color: '#928484' } :{color: '#000000' }}
                    className="relative left-[30px] "
                  />
                  <h4 className={`${e.name=== 'Log Out'? 'text-[#928484]' : 'text-black'} ${serviceFocus === index ? 'text-[14px]' : 'text-[12px]'} py-4 px-16 `}>{e.name}</h4>
                  {serviceFocus === index ? <div className="w-1 h-[77px] bg-[#7166F9] absolute right-0 py-0 rounded-tl-full rounded-bl-full " /> : ''}
                </div>
              </li>
            )
          })
          }
        </ul>
      </div>

    </div>
  )
}

export default SideBar
