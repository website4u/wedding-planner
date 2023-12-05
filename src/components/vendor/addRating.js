"use client";

import React, { useState } from 'react';
import { Rate, Button, Input, Form, message } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const AddRating = ({ onAddRating }) => {
    const [form] = Form.useForm();
    const [hover, setHover] = useState(-1);
    const [rating, setRating] = useState(4);
    const [comment, setComment] = useState('');

    const handleRateChange = (value) => {
        setRating(value);
    };

    const handleHoverChange = (value) => {
        setHover(value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleAddRating = () => {
        if (rating === 0) {
            message.error('Please provide a rating.');
            return;
        }

        const newRating = {
            value: rating,
            description: desc[rating - 1],
            comment,
        };

        // You can send the new rating to your backend or update the state as needed
        onAddRating(newRating);

        // Reset the form after submitting the rating
        form.resetFields();
    };

    return (
        <div>
            <Form form={form} onFinish={handleAddRating}>
                <Form.Item name="rating" rules={[{ required: true, message: 'Please provide a rating.' }]}>
                    <Rate
                        tooltips={desc}
                        value={rating}
                        onChange={handleRateChange}
                        onHoverChange={handleHoverChange}
                    />
                    {rating ? <span className="ant-rate-text">{desc[hover - 1]}</span> : ''}
                </Form.Item>
                <Form.Item name="comment">
                    <Input.TextArea
                        placeholder="Optional: Add a comment..."
                        value={comment}
                        onChange={handleCommentChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className='bg-brown text-rose'>
                        Submit Rating
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddRating;
