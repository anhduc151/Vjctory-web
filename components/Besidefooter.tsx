import React, { useState } from "react";
import line2 from "../public/images/Line2.png";
import Image from "next/image";
import besidelogo from "../public/images/logo1.png";
import Link from "next/link";
import emailjs from 'emailjs-com';
import validator from 'validator';
import { notification } from 'antd';



export interface BesidefooterProps { }


export default function Besidefooter(props: BesidefooterProps) {

  const [email, setEmail] = useState("")

  const openNotification = (message: string) => {
    notification.open({
      message: message,
      style: {
        fontSize: '16px',
        top: '50px',
      },
    });
  };


  const handleSendEmailer = (e: any) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      openNotification('Email invalidate!!')
    } else {
      // Gửi email bằng emailjs-com
      emailjs.send('service_e893xdc', 'template_nmugrwg', {
        from_name: email,
        message: "There is 1 person who needs your support and advice!",
        reply_to: email,
        to_email: email,
        to_name: email.split('@')[0],//lấy kí tự từ đầu đến kí tự @ thì dừng
        title: "Support of Victory",
        team: "Victory Support Team",
        messageReply: "Thank you for reaching out to Victory Support Team!\n\nOur team is committed to providing excellent customer support, and we will make every effort to respond to your inquiry within 24 business hours. Please note that our response time may be slightly longer on weekends and holidays, but we assure you that we will get back to you as soon as possible.",
      }, 'gvI3GwRJ28mvTVd-B')
        .then(() => {
          openNotification('Successfully! Please check your email!')
          setEmail('')
        })
        .catch(() => {
          openNotification('Error sending email!')
          setEmail('')
        });
    }
  };
  return (
    <div className="besidefooter">
      <Image src={line2} alt="line" className="besidefooter_line_imgs" />
      <div className="beside_form">
        <div className="beside_form1">
          <Link href='/'>
            <Image src={besidelogo} alt="logo" />
          </Link>
          <div className="besideform_p">
            <p className="besideform_p_p">
              Victory is a Singapore based company <br />– a game maker studio
              specializing in designing and producing mobile games.
            </p>
          </div>
        </div>

        <div className="beside_form2">
          <h4 className="beside_form2_h4">COMPANY</h4>
          <Link href="/contact">
            <p className="beside_form2_p">Contact</p>
          </Link>
          <Link href="/terms">
            <p className="beside_form2_p">Terms</p>
          </Link>
          <Link href="/privacy">
            <p className="beside_form2_p">Privacy</p>
          </Link>
        </div>

        <div className="beside_form3">
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => { setEmail(e.target.value) }}
            className='beside_form3_input'
          />
          <button onClick={(e) => handleSendEmailer(e)} className="beside_form3_buttons outgames_buttons" >Contact Support</button>
        </div>
      </div>
    </div>
  )
}
