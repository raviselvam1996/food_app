  import React, { useState } from "react";
  import { useGetSupplierCategoryQuery,useMenuStatusChangeMutation } from '../../services/menu';
import { Switch } from "@mui/material";
import { toast } from 'react-toastify'
import { TbEdit } from "react-icons/tb";


const Menu = () => {
  const [menuStatus, setMenuStatus] = useState(true);

  const handleChange = (event,id) => {
    console.log(id);
    
    const value = event.target.checked ? 'active' : 'inactive'
    changeMenuStatus(id,value)
    // setMenuStatus(value);
  };
  
  const { data: categoriesData, isLoading: loadingCategories, error: categoriesError,refetch } = useGetSupplierCategoryQuery()
  const [menuStatusChange, { isLoading: statusLoad }] = useMenuStatusChangeMutation()

 const changeMenuStatus = async (id,val) => {
  try{
    const payload = {
      id:id,
      status:val
    }
    const response = await menuStatusChange(payload).unwrap();
    if(response.status){          
      toast.success(response.message)
      if(response.status)        refetch()

    }
  }
  catch(error){
console.log(error);
  }
 }

  return (
    <>
  <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
    
    
    <div className="flex items-center justify-between border-b pb-2 mb-4">
      <h2 className="text-xl font-bold text-gray-800">Menu</h2>
      <span className="text-sm text-gray-500"></span>
    </div>
    
    
    <div className="flex flex-col space-y-4">
      
      {
        (categoriesData?.data && categoriesData?.data?.length > 0) && 
        categoriesData?.data?.map(( item,index) => {
          return (
            <div key={index} className="flex items-center justify-between border-b pb-2 space-x-4">
              <div className="flex items-center gap-5">
              <div className="w-10 h-10  rounded-full flex items-center justify-center ">
              <img src="/images/logo_icon.png" alt="" />
            </div>
            <p className="text-gray-700">{item.name}</p>
              </div>
         
            <div className="flex items-center gap-6">
              {/* <SwitchComponent /> */}
              <Switch
          checked={item.status == 'active' ? true : false}
          onChange={(e) => handleChange(e,item.id)}
          inputProps={{ 'aria-label': 'controlled' }}
           size="small"
        />
        <div>
          <span  className="text-red-700 text-xl"><TbEdit/></span>
        

        </div>
            </div>
          </div>
          )
        })
     
      }
  
      
      
    
      
    </div>

  </div>

    </>
  );
};

export default Menu;
