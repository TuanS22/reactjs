import React, { useEffect, useState } from 'react';
import './Product.css';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import { getCategoryService } from '../../services/categoryService';
import { editProduct } from '../../services/productService';

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
    const [dataCategory, setDataCategory] = useState([])
    const { item, onReload } = props
    const [data, setData] = useState(item)
 
    useEffect(() => {
        const fecthAPICategory = async () => {
            const result = await getCategoryService()
            setDataCategory(result)
        }
        fecthAPICategory()
    }, [])

    function openModal() {
        console.log(data)
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleChane = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await editProduct(item.id, data)
        if (result) {
            setIsOpen(false);
            onReload()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Edit product success",
                showConfirmButton: false,
                timer: 2000
            });
        }
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
                {/* <button onClick={closeModal}>close</button> */}
                <form onSubmit={handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input type='text' name='title' value={data.title} onChange={handleChane} />
                                </td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>
                                    {dataCategory.length > 0 && (
                                        <select name='category' value={data.category} onChange={handleChane}>
                                            {dataCategory.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>
                                    <input type='text' name='price' value={data.price} onChange={handleChane} />
                                </td>
                            </tr>
                            <tr>
                                <td>Link image</td>
                                <td>
                                    <input type='text' name='image' value={data.image} onChange={handleChane} />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea rows={6} name='description' value={data.description} onChange={handleChane}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>Cancel</button>
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