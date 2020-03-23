/*
 * @Author: mikey.jiufu 
 * @Date: 2020-03-22 21:31:55 
 * @Last Modified by:   mikey.jiufu 
 * @Last Modified time: 2020-03-22 21:31:55 
 */
import React, { useState, useEffect } from 'react'
import './comment.css'
import avator from '../../assets/image/avatar.png'
import { transformTime } from '../../utils/time'
/**
 *
 * @param {openAppGive}    打开App的点击方法
 * @param {dataList}       评论列表数据 
 *  @returns
 */
const CommentModule: PageComponent = props => {
    const giveLike = () => {
        props.openAppGive()
    }
    // 获取传进来的列表数据
    const [dataList, setDataList] = useState([]);   // 显示弹窗
    useEffect(() => {
        console.log(props.dataList)
        if (props.dataList.length>0) {
            setDataList(props.dataList)
        }
    },[]);

    return (
        <div className="comment-wrap">
            <div className="comment">
                <div className="comment-top">评论</div>
                {
                    dataList.length>0 ?
                        dataList.map((item, index) => (
                            <div className="comment-item" key={index}>
                                <div className="item-avatar">
                                    <img className="article-img" src={ !item.creator ? avator : !item.creator.headImgUrl ? avator : (item.creator.headImgUrl || avator) } alt=""/>
                                </div>
                                <div className="comment-text">
                                    <div className="user-text">
                                        <div className="user-left">
                                            <div className="user-name">{  !item.creator ? '' : !item.creator.userNickName ? '' : (item.creator.userNickName || '')}</div>

                                        </div>
                                        <div className="user-give" onClick={giveLike}>
                                            <img className="article-img" src={require("../../assets/image/zan-icon@2x.png")} alt=""/>
                                            <span className="give-num">{item.statisticResult.likeCount }</span>
                                        </div>
                                    </div>
                                    <div className="info-txt">
                                        <div className="txt-sp">{item.content}</div>
                                        <div className="txt-ri-empty"></div>
                                    </div>
                                    <div className="pu-data">
                                        {transformTime(item.createDate,false)}
                                        <span className="hui">回复</span>
                                    </div>
                                </div>
                            </div>
                        )) :
                        <div className="comment-no">
                            <img className="img-no" src={require("./image/wupinglun@2x.png")} alt=""/>
                            <div className="no-txt">暂无评论</div>
                        </div>
                }
                {dataList.length>0 ? <div className="lookMore" onClick={giveLike}>查看全部</div> : ''}
            </div>
        </div>
    )
}



CommentModule.options = { disableHeader: false, wrapperClassName: '' }
export default CommentModule