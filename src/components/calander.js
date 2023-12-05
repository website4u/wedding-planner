"use client";

import React from 'react';
import { DatePicker, Space } from 'antd';



const calander = () => {
  const { RangePicker } = DatePicker;
  return (
    <Space direction="vertical" size={12}>
      <RangePicker />
    </Space>
  );
}
export default calander;
