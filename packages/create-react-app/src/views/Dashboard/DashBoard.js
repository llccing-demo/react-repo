import React, { Component } from 'react'
import TotalChart from './TotalChart'
import { Row, Col } from 'antd'


class DashBoard extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <TotalChart />
        </Col>
        <Col span={12}>
          <TotalChart />
        </Col>
      </Row>
    )
  }
}

export default DashBoard