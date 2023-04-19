import doughnut from '/doughnut.svg'


const Stats = () => {
  const trafficData = [
    {
      name: 'Traffic Sources', heading: 'Source', PerHeading: 'Traffic Source %',
      source: {
        name: 'Source',
        value: 50
      },
      status: {
        name: 'Status',
        value: 50
      },
      graphImage: doughnut
    },
    {
      name: 'Traffic Sources', heading: 'Source', PerHeading: 'Traffic Source %',
      source: {
        name: 'Source',
        value: 50
      },
      status: {
        name: 'Status',
        value: 50
      },
      graphImage: doughnut
    },
  ]

  return (
    <div className="absolute min-w-[64rem] w-[75%] left-[20.37rem] top-[40.25rem] h-[14.7rem] flex justify-center items-center gap-[1rem]">
      {trafficData.map((e, index) => {
        return (
          <div className='flex flex-col flex-1 justify-center items-center gap-2 bg-[#f6f6fb] rounded-[2rem] h-full'>
            <div className='w-[90%] h-[35%] border-b-2 text-[20px] text-black flex items-center '>
              <p className=''>Traffic Sources</p>
            </div>
            <div className='w-[90%] h-[60%] flex justify-between items-center '>
              <div className='h-full w-[18rem] flex flex-col gap-1 '>
                <div className='w-full h-[33%] text-[12px] text-[#a9a9a9] rounded-full bg-[#efeff8] flex items-center  '>
                  <p className='flex flex-1 justify-center text-center'>Source</p>
                  <p className='flex flex-1 justify-center text-center'>Traffic Source %</p>
                </div>
                <ul className='list-none'>
                  <li className='flex text-black text-[12px] items-center py-2'>
                    <div className='flex px-[1rem] items-center justify-center'>
                      <div className=' w-[1.125rem] h-[.75rem] bg-[#4CD7F6] rounded-[2px] ' />
                    </div>
                    <p className='flex flex-1 text-center '>Direct</p>
                    <p className='flex flex-1 justify-around' >50</p>
                  </li>
                  <li className='flex text-black text-[12px] items-center py-2'>
                    <div className='flex px-[1rem] items-center justify-center'>
                      <div className=' w-[1.125rem] h-[.75rem] bg-[#E17CFD] rounded-[2px] ' />
                    </div>
                    <p className='flex flex-1 text-center '>Search</p>
                    <p className='flex flex-1 justify-around' >50</p>
                  </li>
                </ul>
              </div>
              <img src={e.graphImage} alt="graph" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Stats
