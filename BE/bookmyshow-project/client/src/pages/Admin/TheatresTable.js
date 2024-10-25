import { Table, message, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getAllTheatresForAdmin } from '../../calls/theatres';
import { showLoading, hideLoading } from '../../redux/loaderSlice';
function TheatresTable() {
  const [theatres,setTheatres] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try{
      dispatch(showLoading());
      const response = await getAllTheatresForAdmin();
      if(response.success){
        const allTheatres = response.data;
        // console.log(allTheatres);
        setTheatres(
            allTheatres.map(function(item){
            return {...item, key: `theatre${item._id}`}
          })
        );
      }else{
        message.error(response.message)
      }
      dispatch(hideLoading())

    }catch(err){
      dispatch(hideLoading());
      message.error(err.message);
    }
  }

  useEffect(() => {
    getData()
  },[]);

  const handleStatusChange = () => {
    
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status, data) => {
        if(data.isActive){
            return `Approved`
        }else{
            return `Pending/ Blocked`
        }
      }
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, data) => {
        return(
          <div>
            <Button onClick={() => handleStatusChange(data)}>{ data.isActive ? "Block" : "Approve"} </Button>
          </div>
        )
      }
    },
  ];
  return (
    <div>
      { theatres && theatres.length > 0 &&  <Table dataSource = {theatres} columns={columns}></Table> }
    </div>
  )


  //<Table> dataSource = theatres colums = colums
}

export default TheatresTable