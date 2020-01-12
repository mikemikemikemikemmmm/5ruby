import React from 'react';
export default function useGetJson(jsonFileName,dispatch){
  const [data,setData] =React.useState()
  React.useEffect(()=>{
    async function getData(){
      const _data =await import(`@/assets/staticData/${jsonFileName}`)
      setData(_data.default)
    }
    getData()
  },[jsonFileName])
  return data
}