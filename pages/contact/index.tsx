import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import contactcar from "../../public/images/contact-car.png";
import cowboys from "../../public/images/contact-caoboi.png";
import address from "../../public/images/contact-address.png";
import youtube1 from "../../public/images/contact-youtube1.png";
import facebook from "../../public/images/contact-facebook1.png";
import gmail from "../../public/images/contact-gmail.png";
import Link from "next/link";
import Besidefooter from "@/components/Besidefooter";
import contactmaps from "../../public/images/contact_imgs_maps.png";
import contactlogo from "../../public/images/logo.png";
import contactvjctory from "../../public/images/contact_imgs_vjctory.png";
import emailjs from "emailjs-com";
import { notification } from "antd";
import { Form, Modal, Select, Input, Button } from "antd";
import LayoutSeo from "@/components/LayoutSeo";
import { useRouter } from "next/router";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase.config";


export interface ContactProps { }

export default function Contact(props: ContactProps) {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [isSelected, setIsSelected] = useState("gameplay");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const message = "VICTORY COMPANY";
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < message.length) {
        setText((prevText) => prevText + message[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, message.length]);



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
    selected: any,
    email: any,
    name: any,
    message: any,
  ) => {
    try {
      await addDoc(collection(db, "emails"), {
        selected: selected,
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
    selected: any,
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
        handleData(selected, reply_to, from_name, message)
      })
      .catch(() => {
        openNotification("Error sending email!");
        setIsModalOpen(false);
      });
  }

  const onFinish = (value: any) => {
    if (isSelected === "gameplay") {
      //handle for option gameplay//////////////////////
      handleSendEmail(
        isSelected,
        value.email,
        value.name,
        value.question,
        "Support of Victory",
        "Victory Support Team",
        "Thank you for reaching out to Victory Support Team!\n\nOur team is committed to providing excellent customer support, and we will make every effort to respond to your inquiry within 24 business hours. Please note that our response time may be slightly longer on weekends and holidays, but we assure you that we will get back to you as soon as possible.\n\nThank you for your support to the game. We look forward to connecting with you soon.\n\nHope you have a great day!"
      )

    }
    // else if (isSelected === "recruitment") {
    //   //handle for option recruitment//////////////////////
    //   handleSendEmail(
    //     isSelected,
    //     value.email,
    //     value.name,
    //     value.question,
    //     "Thank you for contacting Victory HR Department",
    //     "Victory HR Team",
    //     "Thank you for reaching out to Victory Human Resources Department. We have received your message and we appreciate your interest in our company.\n\nWe understand that your time is valuable, and our dedicated HR Team is currently reviewing your message and will respond to you within 24 business hours.\n\nPlease note that our response time may be slightly delayed during weekends and public holidays, but rest assured that we are committed to addressing your questions and providing the information you need.\n\nIf you have any additional information or documents related to your message, please feel free to include them in your response.\n\nWe wish you a great day ahead and look forward to connecting with you soon."
    //   )

    // } 
    else if (isSelected === "partner") {
      //handle for option partner//////////////////////
      handleSendEmail(
        isSelected,
        value.email,
        value.name,
        value.content,
        "Victory | Partnership Opportunity",
        "Victory Business Development Team",
        "Thank you for contacting Victory Business Development Team! We appreciate your interest and the opportunity to connect with you.\n\nWe understand the importance of your message and are committed to providing you with a prompt response within 24 business hours. Our response time might be slightly delayed on weekends and public holidays. However, rest assured that we are fully dedicated to exploring potential opportunities.\n\nAt Victory, we deeply value the idea of collaboration and believe that together, we can achieve anything. We are excited to learn more about your requirements and how our partnership can lead to mutual success.\n\nIf you have any additional details or specific preferences you would like to share, please do not hesitate to do so. Your input will help us tailor our response to your unique perspective.\n\nThank you for considering Victory as your potential partner. We look forward to connecting with you."
      )
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };




  return (
    <LayoutSeo
      title="Contact - Victory Game"
      pathname={router.pathname}
    >
      <main>
        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          <Form form={form} onFinish={onFinish} layout="vertical">
            <p className="form_antd_title">{`Support for ${isSelected}!`}</p>
            <p className="form_antd_p">What do you want help with?</p>
            <Form.Item>
              <Select
                onChange={(value) => setIsSelected(value)}
                defaultValue={"gameplay"}
              >
                <Select.Option value="gameplay">Gameplay</Select.Option>
                <Select.Option value="partner">Partner</Select.Option>
              </Select>
            </Form.Item>

            {isSelected === "partner" ? (
              <>
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
                  name="content"
                  label="Content"
                  rules={[
                    {
                      required: true,
                      message: "Please input your content!",
                    },
                  ]}
                >
                  <TextArea placeholder="Your content" rows={4} />
                </Form.Item>
              </>
            ) : (
              <>
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
              </>
            )}
            <Form.Item>
              <div style={{ textAlign: 'center' }}>
                <Button className="button_antd" type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>

        <Navbar />

        <div className="contact_maps">
          <div
            className="contact_maps_left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src={contactmaps}
              alt="iamges contact"
              className="contact_maps_imgs"
            />
            <div className="contact_logo_maps">
              <Link href="/">
                <Image
                  src={contactlogo}
                  alt="images logo"
                  className="contact_imgs_logo"
                />
              </Link>
              <Image
                src={contactvjctory}
                alt="contact"
                className="contact_imgs_vjctory"
              />
            </div>
          </div>

          <div
            className="contact_maps_right"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="contact_maps_right_companys">
              <h2 className="contact_maps_right_h2">{text}</h2>
            </div>

            <div className="contact_maps_right_address">
              <h4 className="contact_maps_right_address_h4">Address:</h4>
              <p className="contact_maps_right_address_p">
                111 North Bridge Road, Peninsula Plaza, Singapore
              </p>
            </div>

            <div className="contact_maps_right_address">
              <h4 className="contact_maps_right_address_h4">Telephone:</h4>
              <p className="contact_maps_right_address_p">+(65) 85751690</p>
            </div>
          </div>
        </div>

        <div className="contact-infor-section">
          <div
            className="contact-card aos-init"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Facebook</p>
              <Link
                href={"https://www.facebook.com/gametaminsg"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebook} alt="facebook"></Image>
              </Link>
            </div>
          </div>
          <div
            className="contact-card aos-init"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Youtube</p>
              <Link
                href={
                  "https://www.youtube.com/channel/UCtqfA-BZLIcD2ouxgPlJPdg"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={youtube1} alt="youtube"></Image>
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="contact-card aos-init"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Address</p>
              <Link
                href={
                  "https://www.google.com/maps/place/Peninsula+Plaza+Singapore/@1.2923461,103.8486939,17z/data=!3m2!4b1!5s0x31da18475cfdd08b:0xbd1bedb2d3c0421f!4m5!3m4!1s0x31da19a1350d10f1:0xe471fd72f9ffcba1!8m2!3d1.2923407!4d103.8508826"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={address} alt="address"></Image>
              </Link>
            </div>
          </div>
          <div
            className="contact-card clickable-area aos-init"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="contact-panel">
              <p className="contact-panel-title">Email</p>
              <Link
                href={"https://mail.google.com/mail/u/0/#inbox"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={gmail} alt="Email"></Image>
              </Link>
            </div>
          </div>
          <Image
            className="character"
            src={cowboys}
            alt="images cowboys"
          ></Image>
        </div>

        <div className="contact_form">
          <div
            className="form_contact aos-init aos-animate"
            data-aos="fade-right"
          >
            <div className="form_heading">
              <div className="form_name1">
                <h2
                  className="form_name1_h2 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Let us know your problems
                </h2>
                <p
                  className="form_name1_p aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  If you have any questions, please contact us. We will reply to
                  you as soon as possible.
                </p>
              </div>

              <div className="form_image1">
                <Image
                  src={contactcar}
                  alt="car"
                  className="contact_car aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-delay="400"
                />
              </div>
            </div>

            <div
              className="form_button aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="recruit_form_butotn">
                <button onClick={showModal} className="recruit_button_support">Support</button>
              </div>
            </div>
          </div>
        </div>
        <Besidefooter />
      </main>
    </LayoutSeo>
  );
}

export async function getStaticProps() {
  return { props: {} }
}
