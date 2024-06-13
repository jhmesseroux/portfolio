// import axios from 'axios'

const RequestError = ({}: { error: any }) => {
  return (
    <div className='request-error text-center text-red-400 w-full font-semibold  mb-4 border border-red-300 dark:border-red-800 border-dashed p-2'>
      {/* {axios.isAxiosError(error) && error.response?.data.message || error || 'Algo malo paso !'} */}
    </div>
  )
}

export default RequestError
