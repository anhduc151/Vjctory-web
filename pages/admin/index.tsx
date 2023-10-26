import Header from "../../componentsAdmin/Header";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.config";
import { notification } from "antd";

export default function Home() {
  const router = useRouter();
  const [status, setStatus] = useState(true);
  const openNotification = (message: string) => {
    notification.open({
      message: message,
      style: {
        fontSize: "18px",
        top: "50px",
      },
    });
  };

  const onFinish = async (values: any) => {
    await signInWithEmailAndPassword(auth, values.username, values.password)
      .then(() => {
        router.push("/admin/allJd");
      })
      .catch((error) => {
        openNotification(error.code);
      });
  };

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user: any) => {
      const currenUser = user?.auth?.currentUser;
      if (currenUser) {
        currenUser.getIdTokenResult().then((idTokenResult: any) => {
          const tokenExpirationTime = idTokenResult.expirationTime;
          const currentTime = Math.floor(Date.now() / 1000);
          if (tokenExpirationTime < currentTime) {
            auth.signOut().then(() => {
              router.push("/admin");
            }).catch((error) => {
              console.error('Đăng xuất thất bại:', error);
            });
          } else {
            router.push('/admin/allJd')
          }
        });
      }
      else setStatus(false);
    });
    return () => unregisterAuthObserver();
  }, [])

  return (
    <div>
      <Header />
      {status ? (
        <Fragment />
      ) : (
        <main>
          <div className="jd_login">
            <Form
              layout="vertical"
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              className="jd_login_forms"
            >
              <h1 className="jd_login_forms_h1">Sign In</h1>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item className="jd_form_login_buttons">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="jd_button_login"
                >
                  Sign In
                </Button>
              </Form.Item>
              <Link href="/">Back to HomePage?</Link>
            </Form>
          </div>
        </main>
      )}
    </div>
  )
}
