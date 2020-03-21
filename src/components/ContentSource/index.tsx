/**
 * 处理图文并茂数据[{'image': ''}, {'text': ''}]
 */
import React from 'react'
import './content-source.css'
interface ContentSourceProps {
  sourceData: string
}
const controlImgWidth = 686
const ContentSource: React.FC<ContentSourceProps> = ({ sourceData = '[]' }) => {
  let sourceDataArr = JSON.parse(sourceData)
  // 解析图片宽高，以展示图片真实宽高比
  const getImageScale = (imgUrl: string) => {
    let imgUrlArr = imgUrl.match(/\?w=(.*?)&h=(.*?)$/i)
    if (!imgUrlArr || !imgUrlArr[1] || !imgUrlArr[2]) {
      return 1
    }
    let imgScale = parseInt(imgUrlArr[2]) / parseInt(imgUrlArr[1])
    return imgScale
  }
  return (
    <div className="content-source">
      {sourceDataArr.map((item: any, index: number) => {
        let objKey = Object.keys(item)[0]
        if (objKey === 'image') {
          let imgScale = getImageScale(item.image)
          let scaleHeight = controlImgWidth * imgScale
          return (
            <img
              src={item.image}
              alt=""
              className="imgSource"
              style={{ height: `${scaleHeight / 100}rem` }}
              key={`images${index}`}
            />
          )
        }
        if (objKey === 'text') {
          return (
            <div className="txtSource" key={`text${index}`}>
              {item.text}
            </div>
          )
        }
      })}
    </div>
  )
}
export default ContentSource
