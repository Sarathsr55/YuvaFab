import React,{useEffect} from 'react'
import ServiceList from '../../Components/ServiceList/ServiceList'

const Service = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  return (
    <div>
      <ServiceList/>
    </div>
  )
}

export default Service