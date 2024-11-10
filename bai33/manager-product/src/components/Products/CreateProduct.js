import React, { useEffect, useState } from 'react';
import './Product.css';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import { getCategoryService } from '../../services/categoryService';
import { createProduct } from '../../services/productService';

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
    const [data, setData] = useState({})
    const [dataCategory, setDataCategory] = useState([])
    const { onReload } = props

    useEffect(() => {
        const fecthAPICategory = async () => {
            const result = await getCategoryService()
            setDataCategory(result)
        }
        fecthAPICategory()
    }, [])

    function openModal() {
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
        const result = await createProduct(data)
        if (result) {
            // setIsOpen(false);
            onReload();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add new product success",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }

    return (
        <>
            <button onClick={openModal} className='btn--add'>Add product</button>

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
                                    <input type='text' name='title' onChange={handleChane} />
                                </td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>
                                    {dataCategory.length > 0 && (
                                        <select name='category' onChange={handleChane}>
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
                                    <input type='text' name='price' onChange={handleChane} />
                                </td>
                            </tr>
                            {/* <tr>
                                <td>Rating</td>
                                <td>
                                    <input type='text' name='rating' />
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td>Quantity</td>
                                <td>
                                    <input type='text' name='quantity' onChange={handleChane} />
                                </td>
                            </tr> */}
                            <tr>
                                <td>Link image</td>
                                <td>
                                    <input type='text' name='image' onChange={handleChane} />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea rows={6} name='description' onChange={handleChane}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>Cancel</button>
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