import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import { getCategoryService } from '../../services/categoryList';
import { editProductService } from '../../services/productList';

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

function EditProduct(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [dataCategory, setDataCategory] = useState([]);
    const { onReload, item } = props
    const [dataAdd, setDataAdd] = useState(item);

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
        const result = await editProductService(dataAdd.id, dataAdd)
        if (result) {
            onReload()
            setIsOpen(false);
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
            <button onClick={openModal}>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div>Edit product</div>
                    <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input onChange={handleChange} type='text' name='title' value={dataAdd.title} />
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>
                                    <input onChange={handleChange} type='text' name='price' value={dataAdd.price} />
                                </td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>
                                    <select name='category' onChange={handleChange} value={dataAdd.category}>
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
                                    <input onChange={handleChange} type='text' name='image' value={dataAdd.image} />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea onChange={handleChange} rows={8} placeholder='Nhập nội dung' name='description' value={dataAdd.description}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal} type="submit">Cancel</button>
                                </td>
                                <td>
                                    <input type='submit' value="Edit" />
                                </td>
                            </tr>
                        </thead>
                    </table>
                </form>
            </Modal>
        </>
    );
}

export default EditProduct;