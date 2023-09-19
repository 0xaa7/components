import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

const Polls = () => {

  const iconStyle = {
    width: '55.48px',
    height: '50.81px',
  };

  return (
    <div className='flex flex-col items-center justify-center mb-4'>
      <div className='w-full h-[240px] max-w-[970px] bg-[#FFFFFF] rounded-md flex flex-col items-center justify-center p-5'>
        <InsertChartOutlinedIcon style={iconStyle}/>
        <p className='text-3xl font-bold text-center'>Create Polls</p>
        <p className='mt-2 text-base text-black text-opacity-50 text-center'>
          Be Anonymous. Ask weird questions
        </p>
      </div>
    </div>
  )
}

export default Polls;