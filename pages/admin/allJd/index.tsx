import Header from "../../../componentsAdmin/Header";
import Navbar from "../../../componentsAdmin/Sidebar";
import React, { Fragment, useEffect, useState } from "react";
import { db, auth } from "../../../firebase.config";
import {
  collection,
  onSnapshot,
  query,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { Button, Collapse, Radio, Pagination, notification } from "antd";
import type { RadioChangeEvent, PaginationProps } from 'antd';


interface MyObjectType {
  id?: string;
  position?: string;
  description?: string;
  isPulish?: string;
  category?: string;
}


export interface AllJdProps { }

export default function AllJd(props: AllJdProps) {
  const router = useRouter();
  const dataIdBack = router.query.data
  const { Panel } = Collapse;
  const [status, setStatus] = useState(true);
  const [pending, setPending] = useState(true);
  const [jdList, setJdList] = useState<MyObjectType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [filterValue, setFilterValue] = useState<string>("");
  const [categoryFillter, setCategoryFillter] = useState("")
  const [pickPublish, setPickPublish] = useState(null);



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
    const q = query(collection(db, "jd"));
    onSnapshot(q, (querySnapshot) => {
      setJdList(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          category: doc.data().category?.toString(),
          id: doc.id,
        })).sort(function (a: any, b: any) {
          if (a.position < b.position) {
            return -1;
          }
          if (a.position > b.position) {
            return 1;
          }
          return 0;
        })
      );
      setStatus(false)
    });
  }, [router]);


  const handleDeleteJd = async (data: any) => {
    const user = auth.currentUser
    if (user) {
      if (window.confirm(`Do you want to delete JD name: ${data.position} ?`) === true) {
        const taskDocRef = doc(db, "jd", data.id);
        try {
          await deleteDoc(taskDocRef);
          openNotification("Deleted successfully!");
        } catch (err) {
          openNotification(`${err}`);
        }
      }
    } else {
      alert("Session is over! Please log in again!!")
      router.push("/admin")
    }
  };

  const handleEditJd = (data: any) => {
    const user = auth.currentUser
    if (user) {
      router.push(`/admin/allJd/${data.id}`);
    } else {
      alert("Session is over! Please log in again!!")
      router.push("/admin")
    }
  };

  const handlePulish = async (data: any) => {
    const user = auth.currentUser
    if (user) {
      const taskDocRef = doc(db, 'jd', `${data.id}`);
      try {
        await updateDoc(taskDocRef, { isPulish: true });
        openNotification('Publish successfuly');
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Session is over! Please log in again!!")
      router.push("/admin")
    }
  }

  const handleUnPulish = async (data: any) => {
    const user = auth.currentUser
    if (user) {
      const taskDocRef = doc(db, 'jd', `${data.id}`);
      try {
        await updateDoc(taskDocRef, { isPulish: false });
        openNotification('UnPublish successfuly');
      } catch (err) {
        openNotification(`${err}`);
      }
    } else {
      alert("Session is over! Please log in again!!")
      router.push("/admin")
    }
  }

  const handleResetFillter = () => {
    setPickPublish(null);
    setCategoryFillter("")
    setFilterValue("")
  }


  //handle tabs
  const onChange = (e: RadioChangeEvent) => {
    setCategoryFillter(e.target.value);
  };

  const onChangePickPublish = (e: RadioChangeEvent) => {
    setPickPublish(e.target.value);
  };


  //pagination handle
  const onChangePage: PaginationProps['onChange'] = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, size) => {
    setCurrentPage(current);
    setPageSize(size);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
    setCurrentPage(1);
  };


  //filter handle
  const getFilteredJdListCategory = () => {
    return jdList.filter((data) =>
      data?.category?.toLowerCase().includes(categoryFillter.toLowerCase())
    );
  };

  const getFillteredListPublish = () => {
    if (pickPublish === null) {
      return filteredJdListCategory
    } else return filteredJdListCategory.filter(item => item.isPulish === pickPublish);
  }

  const getFilteredJdList = () => {
    return filteredJdListPublish.filter((data) =>
      data?.position?.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const getCurrentPageJdList = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredJdList.slice(startIndex, endIndex);
  };

  /// k được sửa thứ tự ở list này!! array trước là input cho func sau 
  const filteredJdListCategory = getFilteredJdListCategory()
  const filteredJdListPublish = getFillteredListPublish()
  const filteredJdList = getFilteredJdList();
  const currentJdList = getCurrentPageJdList();
  const totalJd = filteredJdList.length;
  const jdListFillterCategory = Array.from(new Set(jdList.map(item => item["category"])));


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
                <h2 className="alljd_h2">All Job Description</h2>
                {status
                  ? (
                    <div className="loadding_admin_in">
                      <div className="music-waves-2"><span></span>
                        <span></span><span></span><span></span><span></span><span></span><span></span>
                      </div>
                      <div className="flip-animation"><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>.</span><span>.</span><span>.</span>
                      </div>
                    </div>
                  )
                  : (
                    <>
                      <Pagination
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        pageSizeOptions={[1, 5, 10, 20, 50, 100]}
                        defaultCurrent={1}
                        current={currentPage}
                        pageSize={pageSize}
                        total={totalJd}
                        onChange={onChangePage}
                        showTotal={(total) => `${total} items`}
                      />

                      <div className="category_box">
                        <p className="category_tag_header">Status: </p>
                        <Radio.Group optionType="button" defaultValue={null} onChange={onChangePickPublish} value={pickPublish}>
                          <Radio key="null" value={null}>ALL</Radio>
                          <Radio key="true" value={true}>PUB</Radio>
                          <Radio key="false" value={false}>UNPUB</Radio>
                        </Radio.Group>

                        <Button onClick={handleResetFillter}>Reset Fillter</Button>
                      </div>

                      <div className="category_box">
                        <p className="category_tag_header">Tag: </p>
                        <Radio.Group optionType="button" defaultValue={categoryFillter} onChange={onChange} value={categoryFillter}>
                          <Radio key="all" value="">ALL</Radio>
                          {
                            jdListFillterCategory.map((item) => (
                              <Radio value={item} key={item}>{item}</Radio>
                            ))
                          }
                        </Radio.Group>
                      </div>

                      <input
                        className="fillter_box"
                        type="text"
                        value={filterValue}
                        onChange={handleFilterChange}
                        placeholder="Search..."
                      />

                      <Collapse accordion
                        defaultActiveKey={dataIdBack ?? ""}
                      >
                        {currentJdList.length === 0
                          ? <Panel key="not found" header="Oops!! Not found...">{` Đi ra đi, không có gì ở đây đâu :))) `}</Panel>
                          :
                          (
                            <>
                              {
                                currentJdList.map((data) => (
                                  <Panel
                                    className="alljd_panel"
                                    key={data.id ?? ""}
                                    header={data.position}
                                    extra={
                                      <div className="alljd_button">
                                        <span
                                          onClick={(e) => {
                                            setCategoryFillter(`${data.category}`);
                                            e.stopPropagation();
                                          }}
                                          className="category_tag"
                                        >
                                          <i className='bx bxs-purchase-tag' />{data.category}
                                        </span>
                                        {
                                          data.isPulish
                                            ?
                                            <Button
                                              className="alljd_buttons_unpublish"
                                              onClick={(e) => {
                                                handleUnPulish(data);
                                                e.stopPropagation();
                                              }}
                                            >
                                              UnPublish
                                            </Button>
                                            :
                                            <Button
                                              className="alljd_buttons_publish"
                                              onClick={(e) => {
                                                handlePulish(data);
                                                e.stopPropagation();
                                              }}
                                            >
                                              Publish
                                            </Button>
                                        }
                                        <Button
                                          onClick={(e) => {
                                            handleEditJd(data);
                                            e.stopPropagation();
                                          }}
                                          className="alljd_buttons_edit"
                                        >
                                          Edit
                                        </Button>
                                        <Button
                                          onClick={(e) => {
                                            handleDeleteJd(data);
                                            e.stopPropagation();
                                          }}
                                          className="alljd_buttons_delete"
                                        >
                                          Delete
                                        </Button>
                                      </div>
                                    }
                                  >
                                    <div className="quill_content"
                                      dangerouslySetInnerHTML={{
                                        __html: data.description ?? "",
                                      }}
                                    />
                                  </Panel>
                                ))
                              }
                            </>
                          )
                        }
                      </Collapse>
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
