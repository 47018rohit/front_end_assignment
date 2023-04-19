import { chartData } from './chartData'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

const Graph = () => {
  const visitData = {
    labels: chartData.map((e) => e.month),
    datasets: [{
      label: 'Total Visits',
      data: chartData.map(e => e.totalVisits)
    }]
  }

  return (
    <div className='min-w-[32rem] flex flex-1 flex-col h-[25.5rem] bg-[#f6f6fb] rounded-[2rem]'>
      <div className='h-[5rem] w-full relative flex justify-between border-b-[1px]'>
        <div className='text-[20px] text-black flex text-center px-8 items-center'>Total Visit</div>
        <div className='text-[32px] text-[#E17CFD] font-[500] flex text-center px-8 items-center'>34.5M</div>
      </div>
      <div className='h-[20rem] px-[2rem] w-full m-auto flex items-center text-center '>
        <Line data={visitData} />
      </div>
    </div>
  )
}

export default Graph

