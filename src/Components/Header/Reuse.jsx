
import { faC } from '@fortawesome/free-solid-svg-icons';


function Reuse({icon, p1, p2}) {
  return (
    <div className='flex items-center gap-2'>
        <div >
        {icon}
        </div>
        <div>
            <p className='text-sm'>{p1}</p>
            <p className='text-gray-300 text-sm'>{p2}</p>
        </div>
       
    </div>
  )
}

export default Reuse
