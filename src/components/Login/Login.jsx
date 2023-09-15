import EditIcon from '@mui/icons-material/Edit';

const Login = () => {
  const iconStyle = {
    fontSize: '20px'
  };

  return (
    <div className='flex w-full justify-center items-betwwen h-auto mb-3'>
      <div className="bg-gray-100 w-96 h-56 flex items-center justify-center flex-col gap-2 mt-2">
        <div className='w-11/12 h-8 flex relative'>
          <input
            type="text"
            className="flex w-full h-full rounded-md border-1 border-gray-300 py-1.5 pl-2 pr-8 text-gray-900 placeholder:text-gray-400"
            placeholder="Sarfaraj Shah"
          />
          <span className="absolute inset-y-0 right-2 flex items-center">
            <EditIcon style={iconStyle} />
          </span>
        </div>

        <div className='w-11/12 h-8 flex relative'>
          <input
            type="text"
            className="flex w-full h-full rounded-md border-1 border-gray-300 py-1.5 pl-2 pr-8 text-gray-900 placeholder:text-gray-400"
            placeholder="Sarfaraj Shah"
          />
          <span className="absolute inset-y-0 right-2 flex items-center">
            <EditIcon style={iconStyle} />
          </span>
        </div>

        <div className='w-11/12 h-8 flex flex-col relative '>
          <div className='flex flex-col w-full h-36 bg-white rounded-md border-1 py-1.5 pl-2 pr-8'>
            <label className='text-gray-400'>
            Change Password
          </label>
          <input
            type="password"
            className=" flex w-full h-full bg-white rounded-md border-1 py-1.5 pl-2 pr-8 text-gray-900 placeholder:text-gray-400"
            placeholder="**************"
          />
          <span className="absolute inset-y-8 right-2 flex items-center">
            <EditIcon style={iconStyle}/>
          </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
