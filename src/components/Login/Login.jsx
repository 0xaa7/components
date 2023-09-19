import { GoPencil }  from 'react-icons/Go';

const Login = () => {

  const iconStyle = {
    fontSize:'24px'
  }
  

  return (
    <div className='flex w-full justify-center items-betwwen h-auto mb-3'>
      <div className="bg-myCustomColor-500 w-full max-w-[714px] h-[285px] flex items-center justify-center flex-col gap-[10px] pt-[20px] pr-[10px] pb-[20px] pl-[10px]">

        <div className='flex w-full relative bg-[#FFFFFF] rounded-lg'>
          <input
            type="text"
            className="flex w-[694px] h-[60px] pr-[20px] pt-[10px] pb-[10px] pl-[20px]  rounded-lg bg-myCustomColor-400  placeholder:font-poppins text-black text-opacity-50"
            placeholder="Sarfaraj Shah"
          />
          <span className="absolute inset-y-0 right-4 flex items-center">
            <GoPencil style={iconStyle} />
          </span>
        </div>

        <div className='flex w-full relative bg-[#FFFFFF] rounded-lg'>
          <input
            type="text"
            className="flex w-[694px] h-[60px] pr-[20px] pt-[10px] pb-[10px] pl-[20px] rounded-lg bg-myCustomColor-400  placeholder:font-poppins text-black text-opacity-50"
            placeholder="Sarfaraj Shah"
          />
          <span className="absolute inset-y-0 right-4 flex items-center">
            <GoPencil style={iconStyle} />
          </span>
        </div>

        <div className='flex w-full relative bg-[#FFFFFF] rounded-lg'>
          <div className='flex flex-row relative w-[694px] h-[98px] p-[20px] rounded-lg bg-[#FFFFFF] '>
            <div className='flex justify-between flex-col  '>
            <span className='flex justify-items-start items-center font-poppins text-black text-opacity-50'>Change Password</span>
            <input type="password" className='font-poppins bg-myCustomColor-400  text-black opacity-50' placeholder="**************"/>
            </div>
          
          <span className="absolute inset-y-8 right-4 flex items-center">
            <GoPencil style={iconStyle} />
          </span>
          </div>
          </div>
          
       
      </div>
    </div>
  );
}

export default Login;
