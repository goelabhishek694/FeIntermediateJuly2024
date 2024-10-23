import React from 'react'
import { useDispatch } from 'react-redux';
import { Modal, message } from 'antd';
import { ShowLoading, HideLoading } from '../../redux/loaderSlice';
import { deleteTheatre } from '../../calls/theatres';
function DeleteTheatreModal({isDeleteModalOpen, selectedTheatre, setIsDeleteModalOpen, setSelectedTheatre, getData}) {

    const dispatch = useDispatch();

    const handleOk = async () => {
        try{
            dispatch(ShowLoading());
            const theatreId = selectedTheatre._id;
            const response = await deleteTheatre({ theatreId });
            console.log(theatreId, response);
            if (response.success) {
                message.success(response.message);
                getData();
            } else {
                message.error(response.message);
                setSelectedTheatre(null);
            }
            setIsDeleteModalOpen(false);
            dispatch(HideLoading());
        }catch(err){
            dispatch(HideLoading());
            setIsDeleteModalOpen(false);
            message.error(err.message);
        }
    }

    const handleCancel = () => {
        setIsDeleteModalOpen(false);
        setSelectedTheatre(null);
    }



  return (
    <>
        <Modal title="Deelte Theatre ?" open={isDeleteModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='pt-3 fs-18'>Are you sure you want to delete this theatre?</p>
        <p className='pb-3 fs-18'>This action can't be undone and you'll lose this theatre data.</p>
        </Modal>
    </>
  )
}

export default DeleteTheatreModal