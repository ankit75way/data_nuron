import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import { HttpClient } from './service/HttpClient';
import { deleteComponent, getComponent, updateComponet } from './service/Apis';
import CreateComponents from './components/create-component/CreateComponents';
HttpClient.setAxiosDefaultConfig()
function App() {

  const [components,setComponents] = useState([])
  useEffect(()=>{
    getComponentsData()
  },[])
  const getComponentsData = () => {
    getComponent().then(res=>{
      setComponents(res.data)
    })
  }

  const handleUpdateComponent = (payload) => {
    updateComponet(payload).then(res=>{
      getComponentsData()
    })
  }

  const handleDeleteComponent = (id) => {
    deleteComponent(id).then(res=>{
      getComponentsData()
    })
  }
  return (
    <>
    
    <CreateComponents  getComponentsData={getComponentsData}/>
    <Dashboard components={components} handleUpdateComponent={handleUpdateComponent} handleDeleteComponent={handleDeleteComponent} />
    </>
  );
}

export default App;
