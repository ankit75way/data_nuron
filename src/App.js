import './App.css';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import { HttpClient } from './service/HttpClient';
import { deleteComponent, getComponent, updateComponet } from './service/Apis';
import CreateComponents from './components/create-component/CreateComponents';
import Loading from './components/loading/Loading';
HttpClient.setAxiosDefaultConfig()
function App() {
  const [loading, setLoading ] = useState(false)
  const [components,setComponents] = useState([])
  useEffect(()=>{
    getComponentsData(true)
  },[])
  const getComponentsData = (loading=false) => {
    setLoading(loading)
    getComponent().then(res=>{
      setComponents(res.data)
      setLoading(false)
    })
  }

  const handleUpdateComponent = (payload) => {
    updateComponet(payload).then(res=>{
      getComponentsData(false)
    })
  }

  const handleDeleteComponent = (id) => {
    deleteComponent(id).then(res=>{
      getComponentsData(true)
    })
  }
  return (
    <>
    
   
    <CreateComponents  getComponentsData={getComponentsData}/>
    {loading ?  <Loading />:  <Dashboard components={components} handleUpdateComponent={handleUpdateComponent} handleDeleteComponent={handleDeleteComponent} />}
   
   
    </>
  );
}

export default App;
