import Header from "../../../componentsAdmin/Header";
import Navbar from "../../../componentsAdmin/Sidebar";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import {
    Button,
    Form,
    Input,
    Select,
    Row,
    Col,
} from 'antd';
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import {
    doc, getDoc, updateDoc, DocumentData, collection, query, onSnapshot,
} from 'firebase/firestore';
import { db, auth } from "../../../firebase.config"
import { notification } from "antd";


interface MyObjectType {
    id?: string;
    position?: string;
    description?: string;
    isPulish?: string;
    category?: string;
}
export interface IJdJDProps {

}

export default function JdJD(props: IJdJDProps) {
    const router = useRouter()
    const jdId = router.query.jdID
    const { Option } = Select;
    const [form] = Form.useForm();
    const [isInputMode, setIsInputMode] = useState(false);
    const [pending, setPending] = useState(true);
    const [jdDetails, setJdDetails] = useState<DocumentData | undefined>()
    const [loading, setLoading] = useState(true)
    const [jdList, setJdList] = useState<MyObjectType[]>([]);
    const jdListFillterCategory = Array.from(new Set(jdList.map(item => item["category"])));


    const openNotification = (message: string) => {
        notification.open({
            message: message,
            style: {
                fontSize: "18px",
                top: "50px",
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
        const getJd = async () => {
            const docRef = doc(db, 'jd', `${jdId}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let data: DocumentData | undefined = docSnap.data();
                setJdDetails(data);
                setLoading(false);
            } else {
                openNotification('No data found');
                setLoading(false)
            }
        };
        if (jdId) {
            getJd();
        }
    }, [jdId]);


    useEffect(() => {
        const q = query(collection(db, "jd"));
        onSnapshot(q, (querySnapshot) => {
            setJdList(
                querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    category: doc.data().category?.toString(),
                    id: doc.id,
                })))
            setLoading(false)
        });
    }, [router]);

    const QuillNoSSRWrapper = dynamic(import("react-quill"), {
        ssr: false,
        loading: () => <p>Loading ...</p>,
    });
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline"],
            [{ align: [] }],
            [
                // { list: 'ordered' },
                { list: 'bullet' },
                // { indent: '-1' },
                // { indent: '+1' },
            ],
            ["link"],
            [{ color: [] }],
            [{ background: [] }],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    };
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "align",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "color",
        "background",
    ];


    const onFinish = async (data: any) => {
        const user = auth.currentUser;
        if (user) {
            const taskDocRef = doc(db, 'jd', `${jdId}`);
            try {
                await updateDoc(taskDocRef, data);
                openNotification('Update successfuly');
                router.push(`/admin/allJd?data=${jdId}`)
            } catch (err) {
                openNotification(`${err}`);
            }
        } else {
            alert("Session is over! Please log in again!!")
            router.push("/admin")
        }
    };

    useEffect(() => {
        form.setFieldsValue(jdDetails);
    }, [jdDetails]);
    return (
        <>
            {pending ? <Fragment />
                :
                <div>
                    <Header />
                    <main>
                        <div className="jd_container">
                            <Navbar />
                            <div className="jd_content">
                                <h2 className="alljd_h2">Edit Job Description</h2>
                                {loading
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
                                        <>
                                            <Form
                                                layout="vertical"
                                                onFinish={onFinish}
                                                form={form}
                                            >
                                                <Form.Item
                                                    label={<span className="label-white">Job position</span>}
                                                    name="position"
                                                    rules={[{ required: true, message: 'Please input Job positon!' }]}
                                                >
                                                    <Input className="input_jdform" />
                                                </Form.Item>
                                                {!isInputMode
                                                    ?
                                                    <div className="div_input_category">
                                                        <Row gutter={0}>
                                                            <Col span={6}>
                                                                <Form.Item
                                                                    label={<span className="label-white">Category</span>}
                                                                    name="category"
                                                                    rules={[{ required: true, message: 'Please input Job positon!' }]}
                                                                >
                                                                    <Select placeholder="select category">
                                                                        {jdListFillterCategory.map(data => (
                                                                            <Option value={data}>{data}</Option>
                                                                        ))}
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Button className="btn_back_category" onClick={() => setIsInputMode(true)}>Input</Button>
                                                        </Row>
                                                    </div>
                                                    :
                                                    <div className="div_input_category">
                                                        <Row gutter={0}>
                                                            <Col span={6}>
                                                                <Form.Item
                                                                    label={<span className="label-white">Category</span>}
                                                                    name="category"
                                                                    rules={[{ required: true, message: 'Please input Job positon!' }]}
                                                                >
                                                                    <Input placeholder="input category" className="input_jdform" />
                                                                </Form.Item>
                                                            </Col>
                                                            <Button className="btn_back_category" onClick={() => setIsInputMode(false)}>Select</Button>
                                                        </Row>
                                                    </div>
                                                }
                                                <Form.Item
                                                    label={<span className="label-white">Job description</span>}
                                                    name="description"
                                                    rules={[{ required: true, message: 'Please input Job description!' }]}
                                                >
                                                    <QuillNoSSRWrapper
                                                        modules={modules}
                                                        formats={formats}
                                                        theme="snow"
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    style={{ alignItems: "center" }}
                                                >
                                                    <Button
                                                        type="primary"
                                                        htmlType="submit"
                                                        className="addjd_submit"
                                                    >
                                                        Save
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                        </>
                                    )
                                }

                            </div>
                        </div >
                    </main >
                </div >
            }
        </>
    )
}
