import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Logout = () => {
  return (
    <div className='flex justify-center w-auto h-auto mb-3'>
      <div className="bg-gray-100 w-96 h-36 flex items-center justify-center flex-col gap-2 mt-2">
         <div className='w-11/12 h-8 flex items-center justify-between p-2 font-semibold rounded bg-white'>
          <p>Account Details</p>
          <ChevronRightIcon />
        </div>
        <div className='w-11/12 h-8 flex items-center justify-between p-2 font-semibold rounded bg-white'>
          <p>Privacy and Security</p>
          <ChevronRightIcon />
        </div>
        <div className='w-11/12 flex justify-center items-center'>
          <button className="w-11/12 h-8 flex items-center bg-red-100 text-red-600 border-2 border-red-500 justify-center p-2 font-semibold rounded">
            Logout
          </button>
        </div> 
      
      </div>
    </div>
  )
}

export default Logout;
