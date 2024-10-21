import { Col, Form, Input, message, Modal, Row } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice';
import { addMovie, updateMovie } from '../../calls/movies';

function MovieForm({isModalOpen, setIsModalOpen, selectedMovie, setSelectedMovie, formType, getData}) {
  const dispatch = useDispatch();

  const onFinish = async (value) => {
    try{
      dispatch(ShowLoading());
      let response =  null;

      if(formType === "add"){
        response = await addMovie(value)
      }else{
        response = await updateMovie({...value, movieId: selectedMovie._id})
      }

      if(response.success){
        setIsModalOpen(false);
        message.success(response.message);
        getData();
      } else {
        message.error(response.message)
      }
      setSelectedMovie(null);
      dispatch(HideLoading());
    }catch(err){
      message.error(err.message);
    }
  }
  return (
    <Modal 
      centered
      title = { formType === "add" ? "Add Movie" : "Edit Movie"}
      open = { isModalOpen }
      onCancel = { handleCancel }
      width = { 800 }
      footer =  { null }
    >
      <Form layout='vertical' initialValues = { selectedMovie } onFinish={onFinish}>
        <Row gutter = {{xs: 6, sm: 10, md: 12, lg: 16}} >
          <Col span={24}>
            <Form.Item
              label = "Movie Name"
              name = "title"
              rules = {[{ required: true, message: "Movie name is required"}]}
            >
              <Input placeholder='Enter the movie name here'/>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label = "Movie Name"
              name = "title"
              rules = {[{ required: true, message: "Movie name is required"}]}
            >
              <Input placeholder='Enter the movie name here'/>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label = "Movie Name"
              name = "title"
              rules = {[{ required: true, message: "Movie name is required"}]}
            >
              <Input placeholder='Enter the movie name here'/>
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </Modal>
  )
}

export default MovieForm