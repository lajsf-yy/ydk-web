import React, { useState, useEffect, useCallback, useMemo } from 'react'
import './demo.css'
import { Icon, Modal } from 'antd-mobile'
import AddressPicker,{ CountyItem } from '../../components/AddressPicker'
import { OrderReceivingAddressVO } from '../../services/user'
const DemoPage: PageComponent = props => {
    const { state } = props.history.location
    const receiver = state && state.receiver ? state.receiver : {}
    const [showArea, setShowArea] = useState(false)
    const [orderReceivingAddress, setOrderReceivingAddress] = useState<OrderReceivingAddressVO>(receiver)
    // 默认地址
    let countyTxtDefault = useMemo(() => {
        if (orderReceivingAddress.receivingProvinceText) {
            return `${orderReceivingAddress.receivingProvinceText}${orderReceivingAddress.receivingCityText}${orderReceivingAddress.receivingCountyText}`
        }
        return ''
    }, [orderReceivingAddress])
    // 默认选中的地址
    const [countyTxt, setCountyTxt] = useState(countyTxtDefault)
    const getArea = (area: CountyItem[]) => {
        setShowArea(false)
        if (!area) return
        let cityNames = area.map((s: any) => s.name).join('')
        let cityIds = area.map((s: any) => s.id)
        setCountyTxt(cityNames)
        setOrderReceivingAddress({
            ...orderReceivingAddress,
            receivingProvince: cityIds[0],
            receivingCity: cityIds[1],
            receivingCounty: cityIds[2],
        })
    }

    return (
      <div className="demo-wrap">

          <div className="edit-txt edit-area" onClick={() => setShowArea(true)}>
              {countyTxt ? <span style={{ color: '#1f1f1f' }}>{countyTxt}</span> : <span>所在区域</span>}
              <Icon type="right" size="lg" color="#999" />
          </div>
          <textarea
              placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元室"
              className="edit-txt edit-addr"
              maxLength={100}
              onChange={e => {
                  console.log('receivingAddresDetail', e.target.value)
              }}
              value={orderReceivingAddress['receivingAddresDetail'] || ''}></textarea>

          <Modal popup visible={showArea} onClose={() => setShowArea(false)} animationType="slide-up">
              <AddressPicker onDismiss={getArea} />
          </Modal>

      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
