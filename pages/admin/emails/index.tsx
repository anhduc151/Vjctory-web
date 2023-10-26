import Header from "../../../componentsAdmin/Header";
import Navbar from "../../../componentsAdmin/Sidebar";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState, Fragment } from 'react';
import { Button, Input, Space, Table, Modal, Form, notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { db, auth } from "../../../firebase.config";
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
} from "firebase/firestore";
import dayjs from 'dayjs';
import emailjs from "emailjs-com";




export interface EmailsProps {
}

interface ArrayType {
    id?: string;
    name?: string;
    email?: string;
    message?: string;
    phoneNumber?: string;
    selected?: string;
    created_at?: any;
    status?: string;
    location?: string;
}

export default function Emails(props: EmailsProps) {
    const router = useRouter();
    const searchInput = useRef<InputRef>(null);
    const { TextArea } = Input;
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [emailsList, setEmailsList] = useState<ArrayType[]>([]);
    const [dataView, setDataView] = useState<ArrayType>();
    const [dataReply, setDataReply] = useState<ArrayType>();
    const [status, setStatus] = useState(true);
    const [pending, setPending] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenReply, setIsModalOpenReply] = useState(false);


    const openNotification = (message: string) => {
        notification.open({
            message: message,
            style: {
                fontSize: "18px",
                top: "140px",
            },
        });
    };


    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged((user: any) => {
            const currenUser = user?.auth?.currentUser;
            if (currenUser) {
                currenUser.getIdTokenResult().then((idTokenResult: any) => {
                    const tokenExpirationTime = idTokenResult.expirationTime; // Thời gian sống của token
                    const currentTime = Math.floor(Date.now() / 1000);
                    if (tokenExpirationTime < currentTime) {
                        auth.signOut().then(() => {
                            router.push("/admin");
                        }).catch((error) => {
                            console.error('Đăng xuất thất bại:', error);
                        });
                    }
                    else setPending(false)
                });
            } else router.push("/admin");
        });
        return () => unregisterAuthObserver();
    }, [])


    useEffect(() => {
        const q = query(collection(db, "emails"));
        onSnapshot(q, (querySnapshot) => {
            setEmailsList(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    created_at: dayjs(doc.data().created_at.toDate()).format('DD/MM/YYYY HH:mm:ss'),
                    id: doc.id,
                }))
            );
            setStatus(false)
        });
    }, [router]);



    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: any,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };


    const getColumnSearchProps = (dataIndex: any): ColumnType<any> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const handleData = async (id: any) => {
        const taskDocRef = doc(db, 'emails', `${id}`);
        try {
            await updateDoc(taskDocRef, { status: 'replied' });
        } catch (err) {
            alert(err);
        }
    };


    const handleSendEmail = (
        title: any,
        to_name: any,
        to_email: any,
        from_name: any,
        message: any,
        team: any
    ) => {
        const user = auth.currentUser
        if (user) {
            emailjs
                .send(
                    "service_5m3carj",
                    "template_iel51tn",
                    {
                        title: title,
                        to_name: to_name,
                        to_email: to_email,
                        from_name: from_name,
                        message: message,
                        team: team,
                    },
                    "-j-XJ0asQSgCvQuPX"
                )
                .then(() => {
                    openNotification("Successfully! Please check your email!");
                    setIsModalOpenReply(false);
                    handleData(dataReply?.id);
                })
                .catch(() => {
                    openNotification("Error sending email!");
                    setIsModalOpenReply(false);
                });
        } else {
            alert("Session is over! Please log in again!!")
            router.push("/admin")
        }
    };


    const handleReply = (values: any) => {
        if (dataReply?.location === "victory") {
            handleSendEmail(
                "Support of Victory",
                dataReply?.name,
                dataReply?.email,
                "Victory",
                values.messageReply,
                "Victory Support Team"
            )
        } else if (dataReply?.location === "solution") {
            handleSendEmail(
                "Support of Solution",
                dataReply?.name,
                dataReply?.email,
                "Solution",
                values.messageReply,
                "Solution Support Team"
            )
        } else if (dataReply?.location === "gametamin") {
            handleSendEmail(
                "Support of Gametamin",
                dataReply?.name,
                dataReply?.email,
                "Gametamin",
                values.messageReply,
                "Gametamin Support Team"
            )
        }
    }

    const handleViewReply = (record: ArrayType) => {
        setDataReply(record)
        setIsModalOpen(false)
        setIsModalOpenReply(true)
    }
    const handleView = (record: ArrayType) => {
        setDataView(record)
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        setIsModalOpenReply(false)
    }


    const data = emailsList.map((data) => (
        {
            id: data.id,
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            message: data.message,
            selected: data.selected,
            created_at: data.created_at,
            status: data.status,
            location: data.location,
        }
    ));

    const columns: ColumnType<any>[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: "15%",
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            key: 'email',
            align: 'center',
            width: "20%",
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            align: 'center',
            width: "20%",
            ...getColumnSearchProps('phoneNumber'),
            render: (text) => (
                <span>{text ? text : "#empty"}</span>
            )
        },
        {
            title: 'Option',
            dataIndex: 'selected',
            key: 'selected',
            align: 'center',
            filters: [
                { text: 'Recruitment', value: 'recruitment' },
                { text: 'Game Play', value: 'gameplay' },
                { text: 'Partner', value: 'partner' },
                { text: 'Other', value: 'other' },
            ],
            width: "5%",
            onFilter: (value, record) => record.selected.includes(value),
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
            align: 'center',
            width: "40%",
            render: (text) => {
                const truncatedText = `${text.substring(0, 50)}...`;
                return <span>{truncatedText}</span>;
            },
        },
        {
            title: 'Receive at',
            dataIndex: 'created_at',
            key: 'created_at',
            align: 'center',
            width: "15%",
            ...getColumnSearchProps('created_at'),
        },
        {
            title: 'View more',
            key: 'viewmore',
            align: 'center',
            render: (record) => {
                return (
                    <Button
                        onClick={() => handleView(record)}
                    >
                        View
                    </Button >
                )
            }
        },
        {
            title: 'Status',
            key: 'status',
            align: 'center',
            width: "15%",
            render: (record) => {
                if (record.status === "replied") {
                    return (
                        <Button
                            disabled={true}
                        >
                            Replied
                        </Button >
                    )
                } else {
                    return (
                        <Button
                            danger
                            onClick={() => handleViewReply(record)}
                        >
                            Reply
                        </Button>
                    )
                }
            },
            filters: [
                { text: 'no reply yet', value: 'noreply' },
                { text: 'replied', value: 'replied' },
            ],
            onFilter: (value, record) => record.status.includes(value),
        },
    ];



    return (
        <>
            {pending
                ?
                <Fragment />
                :
                <div>
                    <Header />
                    <main>
                        <Modal
                            className="modal_view"
                            closable={false}
                            open={isModalOpenReply}
                            onCancel={handleCancel}
                            width={1000}
                            footer={null}
                        >
                            <div className="modal_box">
                                <h2 className="modal_box_title_h1">Reply form</h2>
                                <p className="modal_box_title_title">Select:</p>
                                <p className="modal_box_title">{dataReply?.selected}</p>
                                <p className="modal_box_title_title">Name:</p>
                                <p className="modal_box_title">{dataReply?.name}</p>
                                <p className="modal_box_title_title">Email:</p>
                                <p className="modal_box_title">{dataReply?.email}</p>
                                {dataReply?.phoneNumber && (
                                    <>
                                        <p className="modal_box_title_title">Phone Number:</p>
                                        <p className="modal_box_title">{dataReply?.phoneNumber}</p>
                                    </>
                                )}
                                <p className="modal_box_title_title">Message:</p>
                                <p className="modal_box_title">{dataReply?.message}</p>
                                <p className="modal_box_title_title">Reply:</p>
                                <Form
                                    className="fom_form"
                                    autoComplete="off"
                                    onFinish={handleReply}
                                >
                                    <Form.Item
                                        className="contact_box_input_text"
                                        name="messageReply"
                                        rules={[{ required: true, message: 'Please input your message reply!' }]}
                                    >
                                        <TextArea rows={10} placeholder="Message?" />
                                    </Form.Item>
                                    <div className="box_btn_admin">
                                        <Button htmlType="submit" className="reply_btn">Send</Button>
                                        <Button onClick={() => handleCancel()}>Cancel</Button>
                                    </div>
                                </Form>
                            </div>
                        </Modal>
                        <Modal
                            closable={false}
                            className="modal_view"
                            open={isModalOpen}
                            onCancel={handleCancel}
                            width={1000}
                            footer={
                                <>
                                    {dataView?.status === "noreply" &&
                                        <Button
                                            danger
                                            onClick={() => handleViewReply(dataView)}
                                        >
                                            Reply
                                        </Button>
                                    }
                                    <Button onClick={() => handleCancel()}>Cancel</Button>
                                </>
                            }
                        >
                            <div className="modal_box">
                                <h2 className="modal_box_title_h1">Information</h2>
                                <p className="modal_box_title_title">Select:</p>
                                <p className="modal_box_title">{dataView?.selected}</p>
                                <p className="modal_box_title_title">Receive at:</p>
                                <p className="modal_box_title">{dataView?.created_at}</p>
                                <p className="modal_box_title_title">Name:</p>
                                <p className="modal_box_title">{dataView?.name}</p>
                                <p className="modal_box_title_title">Email:</p>
                                <p className="modal_box_title">{dataView?.email}</p>
                                {dataView?.phoneNumber && (
                                    <>
                                        <p className="modal_box_title_title">Phone Number:</p>
                                        <p className="modal_box_title">{dataView?.phoneNumber}</p>
                                    </>
                                )}
                                <p className="modal_box_title_title">Message:</p>
                                <p className="modal_box_title">{dataView?.message}</p>
                            </div>
                        </Modal>
                        <div className="jd_container">
                            <Navbar />
                            <div className="jd_content">
                                <h2 className="alljd_h2">Emails</h2>
                                {status
                                    ? (
                                        <div className="loadding_admin_in">
                                            <div className="music-waves-2">
                                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                            </div>
                                            <div className="flip-animation">
                                                <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>.</span><span>.</span><span>.</span>
                                            </div>
                                        </div>
                                    )
                                    : (
                                        <Table columns={columns} dataSource={data} />
                                    )
                                }
                            </div>
                        </div>
                    </main>
                </div>
            }
        </>
    )
}
