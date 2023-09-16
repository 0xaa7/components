import { GoPencil }  from 'react-icons/Go';

const Login = () => {

  const iconStyle = {
    fontSize:'24px'
  }
  

  return (
    <div className='flex w-full justify-center items-betwwen h-auto mb-3'>
      <div className="bg-myCustomColor-500 w-[714px] h-[285px] flex items-center justify-center flex-col gap-[10px] pt-[20px] pr-[10px] pb-[20px] pl-[10px]">
        <div className=' flex relative'>
          <input
            type="text"
            className="flex w-[694px] h-[60px] p-[10px] pt-[20px] pb-[10px] pl-[20px] rounded-lg border-1 border-gray-300  text-gray-900 placeholder:text-gray-400"
            placeholder="Sarfaraj Shah"
          />
          <span className="absolute inset-y-0 right-2 flex items-center">
            <GoPencil style={iconStyle} />
          </span>
        </div>

        <div className='w-11/12 h-8 flex relative'>
          <input
            type="text"
            className="flex w-full h-full rounded-md border-1 border-gray-300 py-1.5 pl-2 pr-8 text-gray-900 placeholder:text-gray-400"
            placeholder="Sarfaraj Shah"
          />
          <span className="absolute inset-y-0 right-2 flex items-center">
            <GoPencil />
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
            <GoPencil/>
          </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
