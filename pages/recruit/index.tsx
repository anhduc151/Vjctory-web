import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import hiring from "../../public/images/cruit.png";
import Sliderabout from "@/components/Sliderabout";
import Besidefooter from "@/components/Besidefooter";
import Link from "next/link";
import { Form, Modal, Input, Button } from "antd";
import emailjs from "emailjs-com";
import { notification } from "antd";
import SliderHomeRecruit from "@/components/Sliderhomerecruit";
import Layout from "@/components/LayoutSeo";
import { useRouter } from 'next/router'
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase.config";

export interface RecruitProps { }

export default function Recruit(props: RecruitProps) {
  const router = useRouter()
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNotification = (message: string) => {
    notification.open({
      message: message,
      style: {
        fontSize: "18px",
        top: "50px",
      },
    });
  };

  const handleData = async (
    email: any,
    name: any,
    message: any,
  ) => {
    try {
      await addDoc(collection(db, "emails"), {
        selected: "recruitment",
        email: email,
        name: name,
        message: message,
        created_at: Timestamp.now(),
        status: "noreply",
        location: "victory"
      });
    } catch (err) {
      openNotification(`${err}`);
    }
  }

  const handleSendEmail = (
    reply_to: any,
    from_name: any,
    message: any,
    title: any,
    team: any,
    messageReply: any
  ) => {
    emailjs
      .send(
        "service_e893xdc",
        "template_nmugrwg",
        {
          reply_to: reply_to,
          from_name: from_name,
          message: message,
          //properties of reply user
          title: title,
          team: team,
          messageReply: messageReply,
          to_email: reply_to,
          to_name: from_name,
        },
        "gvI3GwRJ28mvTVd-B"
      )
      .then(() => {
        openNotification("Successfully! Please check your email!");
        setIsModalOpen(false);
        handleData(reply_to, from_name, message)
      })
      .catch(() => {
        openNotification("Error sending email!");
        setIsModalOpen(false);
      });
  }


  const onFinish = (value: any) => {
    handleSendEmail(
      value.email,
      value.name,
      value.question,
      "Thank you for contacting Victory HR Department",
      "Victory HR Team",
      "Thank you for reaching out to Victory Human Resources Department. We have received your message and we appreciate your interest in our company.\n\nWe understand that your time is valuable, and our dedicated HR Team is currently reviewing your message and will respond to you within 24 business hours.\n\nPlease note that our response time may be slightly delayed during weekends and public holidays, but rest assured that we are committed to addressing your questions and providing the information you need.\n\nIf you have any additional information or documents related to your message, please feel free to include them in your response.\n\nWe wish you a great day ahead and look forward to connecting with you soon."
    )
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout title="Recruit - Victory Game"
      pathname={router.pathname}
    >
      <main>
        <Modal
          // title="Please ask your question!"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          <Form form={form} onFinish={onFinish} layout="vertical">
            <p className="form_antd_title">Please ask your question!</p>
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
              label="E-mail"
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
              name="question"
              label="Question"
              rules={[
                {
                  required: true,
                  message: "Please input your question!",
                },
              ]}
            >
              <TextArea placeholder="Your question" rows={4} />
            </Form.Item>
            <Form.Item>
              <div style={{ textAlign: "center" }}>
                <Button
                  className="button_antd"
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>

        <Navbar />
        <div className="header_home">
          <div className="header_name1">
            <h1 className="header_achieve">Achieve</h1>
          </div>
          <div className="header_name1">
            <h1 className="header_together">
              T<Image src={logo} alt="" className="header_image"></Image>gether
            </h1>
          </div>
          <div className="header_create">
            <h2 className="header_greate">great products are created by great teams</h2>
          </div>
          <div className="header_button">
            <Link target="blank" href="https://gametamin.com/">
              <button className="header_joinus">Join Us</button>
            </Link>
          </div>
        </div>

        <div className="recruit_hiring">
          <div
            className="recruit_hiring_img aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Image src={hiring} alt="" className="recruit_hiring_imgs" />
          </div>

          <div
            className="recruit_hiring_slider aos-init aos-animate"
            data-aos="fade-left"
          >
            <SliderHomeRecruit />
          </div>
        </div>

        <div className="recruit_text1">
          <div
            className="recruit_great aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <h4 className="recruit_h4">
              Passionate Teams Create Incredible Products
            </h4>
          </div>

          <div
            className="recruit_p aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <p className="recruit_lorem">
              Victory – vitamin for relaxing life. With a deep love for games
              and a constant desire to conquer intriguing and challenging
              levels, Victory was born. We understand the needs of the users and
              set out to fulfill them through the world of games. The teams at
              Victory embrace challenges with a courageous spirit, and we are
              always ready to overcome them. Join us on this journey of
              discovery and let your passion shine as we continue to craft
              incredible products that bring joy to players worldwide.
            </p>
          </div>
        </div>

        {/* <div className="home_recruit">
          <div className="home_recruit_headings">
            <div className="home_outgames_heading">
              <h2 className="home_outsgames_h2">Recruit</h2>
              <Image src={line} alt="" className="home_outgames_line" />
            </div>
          </div>

          <div
            className="home_recruit_slider"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <SliderHomeRecruit />
          </div>
        </div> */}

        <div className="recruit_form_help">
          <div
            className="recruit_form aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            <div className="recruit_form_h1">
              <h1 className="recruit_doyou">
                Do you need any help with our vacancies ?
              </h1>
            </div>

            <div className="recruit_form_p">
              <p className="recruit_form_lorem1">
                If you have any questions, please contact us. We will reply to
                you as soon as possible.
              </p>
            </div>

            <div className="recruit_form_butotn">
              <button onClick={showModal} className="recruit_button_support">
                Support
              </button>
            </div>
          </div>
        </div>

        <Besidefooter />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: {} }
}
