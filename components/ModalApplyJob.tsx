import React, { useState } from 'react';
import * as filestack from 'filestack-js';
import { Button, Form, Input, Modal } from 'antd';
import { notification } from "antd";
import emailjs from "emailjs-com";



export interface MoDalUpLoad {
    title?: string
}

export default function MoDalUpLoad(props: MoDalUpLoad) {
    const { title } = props;
    const { TextArea } = Input
    const [fileUploadUrl, setFileUploadUrl] = useState('')
    const [fileUploadFileName, setFileUploadFileName] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [required, setRequired] = useState(true);

    const openNotification = (message: string) => {
        notification.open({
            message: message,
            style: {
                fontSize: "18px",
                top: "50px",
            },
        });
    };


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleClear = () => {
        setFileUploadUrl('')
        setFileUploadFileName('')
        setRequired(true)
    }

    const handleFileUpload = async () => {
        const client = filestack.init('AVu0Pn7LmR6aOIJWpJx7Yz');
        const options = {
            maxSize: 20 * 1024 * 1024,
            fromSources: ['local_file_system'],
            onUploadDone: (res: any) => {
                setFileUploadUrl(res.filesUploaded[0].url);
                setFileUploadFileName(res.filesUploaded[0].filename);
                setRequired(false)
            },
        };
        client.picker(options).open();
    };



    const handleSendEmail = (
        position: any,
        name: string,
        email: string,
        phoneNumber: string,
        urlCV: string,
        message?: string,
        linkedIn?: string,
        facebook?: string,
        portfolio?: string,
    ) => {
        emailjs
            .send(
                "service_llvdruo",
                "template_stiy2mg",
                {
                    position: position,
                    name: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    urlCV: urlCV,
                    message: message ? `Message: ${message}` : "",
                    linkedIn: linkedIn ? `LinkedIn: ${linkedIn}` : "",
                    facebook: facebook ? `Facebook: ${facebook}` : "",
                    portfolio: portfolio ? `Portfolio: ${portfolio}` : "",
                    location: "Vjctory",
                },
                "Koi7IqaYekmc8F8Je"
            )
            .then(() => {
                openNotification("Successfully!");
                setIsModalOpen(false);
            })
            .catch(() => {
                openNotification("Failing send email!");
                setIsModalOpen(false);
            });
    }



    const onFinish = (value: any) => {
        handleSendEmail(
            title,
            value.name,
            value.email,
            value.phoneNumber,
            fileUploadUrl,
            value.message,
            value.linkedIn,
            value.facebook,
            value.portfolio
        )
    }



    return (
        <>
            <div className='btn-btn-modal'
                style={{
                    display: "flex", justifyContent: "center",
                }}
            >
                <Button className='btn_btn_modal_upload' onClick={showModal}>Apply now</Button>
            </div>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={false}
                width={700}
            >
                <Form onFinish={onFinish} layout="vertical">
                    <h2 className='form_applytitle'>Apply {title}</h2>
                    <Form.Item
                        name="name"
                        label="Your Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Input placeholder="Your name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail address"
                        rules={[
                            {
                                type: "email",
                                message: "The input is not valid E-mail!",
                            },
                            {
                                required: true,
                                message: "Please input your E-mail!",
                            },
                        ]}
                    >
                        <Input placeholder="Your email" />
                    </Form.Item>

                    <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: "Please input your phone number!",
                            },
                        ]}
                    >
                        <Input placeholder="Your phone number" />
                    </Form.Item>

                    <Form.Item
                        name="url"
                        label="Upload CV"
                        rules={[
                            {
                                required: required,
                                message: "Please input your file!",
                            },
                        ]}
                    >
                        <Input className='input_hide' />
                        {fileUploadUrl.length === 0
                            ? (
                                <Button onClick={handleFileUpload}>
                                    <div className='form_flex'>
                                        <div>Upload</div>
                                    </div>
                                </Button>)
                            : (
                                <div className='boxfilename'>
                                    <div className="boxfilename_filename">{fileUploadFileName}</div>
                                    <div className="boxfilename_icon"><i className='bx bx-trash' onClick={handleClear}></i></div>
                                </div>
                            )
                        }
                    </Form.Item>

                    <Form.Item
                        name="message"
                        label="Message to Hiring Manager"
                    >
                        <TextArea placeholder="Your message" />
                    </Form.Item>

                    <h3 className='h3_form'>On the web</h3>

                    <Form.Item
                        name="linkedIn"
                        label="LinkedIn"
                    >
                        <Input placeholder="Your url" />
                    </Form.Item>

                    <Form.Item
                        name="facebook"
                        label="Facebook"
                    >
                        <Input placeholder="Your url" />
                    </Form.Item>

                    <Form.Item
                        name="portfolio"
                        label="Portfolio"
                    >
                        <Input placeholder="Your url" />
                    </Form.Item>

                    <Form.Item>
                        <div style={{ textAlign: 'center' }}>
                            <Button type="primary" htmlType="submit">
                                Send
                            </Button>
                        </div>
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )

}
