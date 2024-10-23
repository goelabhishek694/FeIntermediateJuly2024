import React, { Children } from 'react'
import {Tabs} from "antd";
import TheatreList from './TheatreList';
function index() {
  const items =[
    {
      key: "1",
      label: "Theatres",
      children: <TheatreList/>
    },
  ]
  return (
    <>
      <h1>Partners Page</h1>
      <Tabs  defaultActiveKey="1" items={items}></Tabs>
    </>
  )
}

export default index