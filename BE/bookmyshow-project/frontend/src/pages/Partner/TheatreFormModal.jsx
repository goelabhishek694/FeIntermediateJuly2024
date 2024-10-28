import React from 'react'
import { Col, Modal, Row, Form,  Input, Button, message} from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from '../../redux/loaderSlice';
import { addTheatre, updateTheatre } from '../../calls/theatres';
const { TextArea } = Input;
// const user = {"email":"sd123@gmail.com",
//   "name":"Sudheer Darla",
//   "role":"user",
//   "_id":"670c9094f65dd9388693f30b"
// };
function TheatreFormModal({isModalOpen, selectedTheatre, setSelectedTheatre, setIsModalOpen, formType, getData}) {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.users);
    
    const handleCancel = () =>{
        setIsModalOpen(false);
        setSelectedTheatre(null);
    }

    const onFinish = async (values) => {
        try{
            dispatch(showLoading());
            let response = null;
            if(formType === "add"){
                response = await addTheatre({...values, owner: user._id});
            }else{
                let theatreId = selectedTheatre._id;
                response = await updateTheatre(values, theatreId);
            }
            console.log(response);
            if (response.success) {
                getData();
                message.success(response.message);
                setIsModalOpen(false);
            } else {
                message.error(response.message);
            }
            dispatch(hideLoading());
        }catch(err){
            dispatch(hideLoading());
            message.error(err.message);
        }
    }

  return (
    <Modal centered title={formType === "add" ? "Add Theatre" : "Edit Theatre"} open={isModalOpen} onCancel={handleCancel} width={800} footer={null} >
    <Form layout='vertical' style={{width: "100%"}} initialValues={selectedTheatre} onFinish={onFinish}>
      <Row gutter={{
        xs: 6,
        sm: 10,
        md: 12,
        lg: 16,
      }}>
        <Col span={24}>
          <Form.Item label="Theatre Name" htmlFor='name' name="name" className='d-block' rules={[{required: true, message: "Theatre name is required!"}]}>
            <Input id="name" type="text" placeholder='Enter the theatre name'></Input>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Theatre Address" htmlFor='address' name="address" className='d-block' rules={[{required: true, message: "Theatre name is required!"}]}>
            <TextArea id="address" rows="3" placeholder='Enter the theatre name'></TextArea>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Row  gutter={{
            xs: 6,
            sm: 10,
            md: 12,
            lg: 16,
          }}>
          <Col span={12}>
              <Form.Item  label="Email" htmlFor='email' name="email" className='d-block' rules={[{required: true, message: "Email  is required!"}]}>
                    <Input id="email" type="email" placeholder='Enter the email'></Input>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item  label="Phone Number" htmlFor='phone' name="phone" className='d-block' rules={[{required: true, message: "Phone number is required!"}]}>
                <Input id="phone" type="number" placeholder='Enter the phone number'></Input>
            </Form.Item>                
          </Col>
        </Row>
        </Col>          
      </Row>          
      <Form.Item>
          <Button block type="primary" htmlType='submit' style={{fontSize: "1rem", fontWeight: "600"}}>Submit the Data</Button>
          <Button className='mt-3' block onClick={handleCancel}>Cancel</Button>
      </Form.Item>
  </Form>
  </Modal>
  )
}

export default TheatreFormModal