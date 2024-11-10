import React from 'react';
import Swal from 'sweetalert2';
import { deleteProductService } from '../../services/productService';

function DeleteProduct(props) {
    const { item, onReload } = props

    const deleteItem = async () => {
        const resuft = await deleteProductService(item.id)
        if (resuft) {
            onReload()
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    }

    const handleDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem()
            }
        });
    }

    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
}

export default DeleteProduct;