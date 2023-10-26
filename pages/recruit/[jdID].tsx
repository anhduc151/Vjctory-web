import Layout from "@/components/LayoutSeo";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import jdheadings from "../../public/images/id_images.png";
import linejd from "../../public/images/Line2.png";
import Besidefooter from "@/components/Besidefooter";
import { useRouter } from "next/router";
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { db } from "../../firebase.config"
import { Button, notification } from "antd";
import Link from "next/link";
import ModalApplyJob from "../../components/ModalApplyJob"



export interface RecruitDetailProps {

}

export default function RecruitDetail(props: RecruitDetailProps) {
  const router = useRouter()
  const id = router.query.jdID
  const [jdDetails, setJdDetails] = useState<DocumentData | undefined>()
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
    const getJd = async () => {
      const docRef = doc(db, 'jd', `${id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let data: DocumentData | undefined = docSnap.data();
        setJdDetails(data);
      } else {
        openNotification('No data found');
      }
    };

    if (id) {
      getJd();
    }
  }, [id]);
  return (
    <Layout title="Details JD - Victory Game"
      pathname={router.pathname}
    >
      <main>
        <Navbar />
        
        <div className="jd">
          <div className="jd_forms">
            <div className="jd_headings">
              <Image src={jdheadings} alt="jd images" className="jd_imgs" />
              <h2 className="jd_headings_h2">{jdDetails?.position}</h2>
              <div
                className="text_description"
                dangerouslySetInnerHTML={{ __html: jdDetails?.description ?? "" }}
              />
            </div>
            <ModalApplyJob title={jdDetails?.position}/>
            <div className="jd_line">
              <Image src={linejd} alt="line" className="jd_line_images" />
            </div>
            <div className="jd_footer">
              <p className="jd_footer_p active_p">Company Address</p>
              <p className="jd_footer_p">35 Le Dinh Tham, Hai Chau, Da Nang</p>
              <p className="jd_footer_p active_p">Company Website</p>
              <Link href={"https://gametamin.com/"} target="_blank" className="jd_footer_p">https://gametamin.com/</Link>
              <p className="jd_footer_p active_p">HR Department</p>
              <p className="jd_footer_p">hr@gametamin.com</p>
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
