import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2'
import { getCategoryService } from '../../services/categoryProduct';
import { editProductService } from '../../services/productService';

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
    const { onReload, item } = props
    const [dataAdd, setDataAdd] = useState(item)

    useEffect(() => {
        const fetchApiCategory = async () => {
            const resuft = await getCategoryService()
            setDataCategory(resuft)
        }
        fetchApiCategory()
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
        setDataAdd({
            ...dataAdd,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const resuft = await editProductService(item.id, dataAdd)
        if (resuft) {
            closeModal()
            onReload()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product save success",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }

    return (
        <>
            <button onClick={openModal} className='btn--add'>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>
                                    <input type='text' name='title' onChange={handleChane} value={dataAdd.title} />
                                </td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>
                                    {dataCategory.length > 0 && (
                                        <select name='category' onChange={handleChane} value={dataAdd.category}>
                                            {dataCategory.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Is New</td>
                                <td>
                                    <select name='isNew' onChange={handleChane} value={dataAdd.isNew}>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Old Price</td>
                                <td>
                                    <input type='text' name='oldPrice' onChange={handleChane} value={dataAdd.oldPrice} />
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>
                                    <input type='text' name='price' onChange={handleChane} value={dataAdd.price} />
                                </td>
                            </tr>
                            <tr>
                                <td>Rating</td>
                                <td>
                                    <select type="text" name='rating' onChange={handleChane} value={dataAdd.rating} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Link image</td>
                                <td>
                                    <input type='text' name='image' onChange={handleChane} value={dataAdd.image} />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <textarea rows={6} name='description' onChange={handleChane} value={dataAdd.description}></textarea>
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