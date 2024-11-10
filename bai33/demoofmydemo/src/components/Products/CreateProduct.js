import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import { getCategoryService } from '../../services/categoryList';
import { createProductService } from '../../services/productList';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function CreateProduct(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [dataAdd, setDataAdd] = useState({});
    const [dataCategory, setDataCategory] = useState([]);
    const { onReload } = props

    useEffect(() => {
        const fecthApiCategory = async () => {
            const result = await getCategoryService()
            setDataCategory(result)
        }
        fecthApiCategory()
    }, [])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createProductService(dataAdd)
        if (result) {
            onReload()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        // console.log(dataAdd)
        setDataAdd({
            ...dataAdd,
            [name]: value
        })
    }

    return (
        <>
            <button className='btn--add' onClick={openModal}>Add product</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div>Add a product</div>
                    <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input onChange={handleChange} type='text' name='title' />
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>
                                    <input onChange={handleChange} type='text' name='price' />
                                </td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>
                                    <select name='category' onChange={handleChange}>
                                        {dataCategory.map((item, index) => {
                                            return (
                                                <option key={index} value={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Image</td>
                                <td>
                                    <input onChange={handleChange} type='text' name='image' />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea onChange={handleChange} rows={8} placeholder='Nhập nội dung' name='description'></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal} type="submit">Cancel</button>
                                </td>
                                <td>
                                    <input type='submit' value="Add" />
                                </td>
                            </tr>
                        </thead>
                    </table>
                </form>
            </Modal>
        </>
    );
}

export default CreateProduct;