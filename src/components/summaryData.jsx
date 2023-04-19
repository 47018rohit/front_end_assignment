import { HourglassFull, CalendarMonth, ArrowDropUp , ArrowDropDown , Person , BarChart , Help } from '@mui/icons-material'


export const summary = [
    {
        icon: BarChart,
        property: 'Bounce Rate',
        propNum: '42,3%',
        arrow: ArrowDropUp,
        status:'up',
        arrowNum: '12%',
        help: Help
    },
    {
        icon: CalendarMonth,
        property: 'Page Per Visit',
        propNum: '42,3%',
        arrow: '',
        status:'',
        arrowNum: '',
        help: Help
    },
    {
        icon: Person,
        property: 'Bounce Rate',
        propNum: '42,3%',
        arrow: ArrowDropUp,
        status:'up',
        arrowNum: '12%',
        help: ''
    },
    {
        icon: HourglassFull,
        property: 'Avg Visit Duration',
        propNum: '00:24:30',
        arrow: ArrowDropDown,
        status:'down',
        arrowNum: '1.2%',
        help: ''
    },
]