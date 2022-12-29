import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

const AddTask = () => {
    const { register, handleSubmit, } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const handleAddtask = (data) => {
        console.log(data.image[0]);
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const task = {
                        name: data.name,
                        email: data.email,
                        task: data.task,
                        image: imgData.data.url
                    }
                    console.log(task)
                    // save doctor information to the database
                    fetch('', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(task)
                    })
                        .then(res => res.json())
                        .then(result => {

                        })
                }
            })


    }
    return (

        <Form onSubmit={handleSubmit(handleAddtask)} className='w-50 mx-auto mt-5  text-start'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"{...register("name", {
                    required: "Name is Required"
                })} placeholder="Enter your Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text"{...register("email", {
                    required: "Email is Required"
                })} placeholder="Enter your Email" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Add task</Form.Label>
                <Form.Control type="text"{...register("task", {
                    required: "task is Required"
                })} placeholder="Enter your task" />

            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file"{...register("image", {
                    required: "Photo is Required"
                })} placeholder="Image" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default AddTask;