/*
 * @Author: jiufu 
 * @Date: 2020-03-22 18:47:38 
 * @Last Modified by: mikey.jiufu
 * @Last Modified time: 2020-03-22 20:28:32
 */
import React, { useState, useEffect, useCallback } from 'react'
import './demo.css'
import Comment from '../../components/Comment'
import { openApp } from 'utils/helper'

const DemoPage: PageComponent = props => {
    const [commentList, setCommentList] = useState([]);   // 评论 - 列表 - 数据

    /**
     *   带回复的评论列表
     *
     *   dataList: 评论列表数据
     *
     *   openAppGive: 打开App函数
     *
     */

    useEffect(() => {
        // CommentContentDTO, 评论对象
        let arr:any = [
            {
                "tenantId": "nutrition-plan",
                "kid": 580377024036864,
                "createUserType": "1",
                "createUserId": "473353875439624",
                "createDate": "2020-03-11 18:25:32",
                "targetKid": "523130485178368",
                "targetType": "community-post",
                "targetUserId": "460687520890880",
                "parentUserId": "",
                "rootKid": 0,
                "parentKid": 0,
                "parentUserType": "",
                "commentType": "1",
                "content": "\uD83D\uDC4D\uD83C\uDFFB",
                "delFlag": 0,
                "auditFlag": 0,
                "hotValue": 0,
                "subTotalCount": 0,
                "subs": [],
                "creator": {
                    "userId": "473353875439624",
                    "userNickName": "超重的瘦子",
                    "headImgUrl": "https://cdn.lajsf.com/nutrition-plan/image/android/20202/32c69a97-bb12-4571-8087-153a9abf88d7.jpg?w=855&h=855",
                    "roles": []
                },
                "parent": null,
                "behaviorResult": null,
                "statisticResult": {
                    "targetType": "comment",
                    "targetKid": "580377024036864",
                    "likeCount": 0,
                    "viewCount": 0,
                    "commentCount": 0,
                    "favoriteCount": 0,
                    "shareCount": 0,
                    "followCount": 0,
                    "joinCount": 0,
                    "finishCount": 0,
                    "customMapper": {}
                }
            }
        ]
        setCommentList(arr)
    },[])

    /**
     *  触发评论列表内 点击事件打开App
     *
     *
     */

    const [openAppParams,setOpenAppParams] = useState({})       //   打开app 指定页面 要传给app的参数
    const [downShowPop,setDownShowPop] = useState(false)        //   显示引导弹窗
    
    const clickHandle = () => {
        const result = openApp(openAppParams)
        if (result) {
            setDownShowPop(true)
        } else {
            setDownShowPop(false)
        }
    }

    return (
      <div className="demo-wrap">
          {
              commentList.length>0? <Comment dataList={commentList} openAppGive={clickHandle}/>: null
          }
      </div>
    )
}
DemoPage.options = { disableHeader: false, wrapperClassName: '' }
export default DemoPage
