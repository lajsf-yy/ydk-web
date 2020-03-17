import React, { useState, useEffect } from 'react'
import './comment.css'
import avator from '../../assets/image/avatar.png'
import { transformTime } from '../../utils/time'
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
    // 处理评论是时间格式
    // const timeFormatTxt = (val:string) => {
    //     if (val.length<=0) return
    //     var year = (val.split(' ')[0]).slice(5)
    //     var daytime = (val.split(' ')[1]).slice(0,5)
    //     var result = year + ' ' + daytime
    //     return result
    // }

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
                                    {/*回复部分*/}
                                    {/*{*/}
                                        {/*item.subs.length <= 0 ? '' :*/}
                                            {/*item.subs.map((subItem:any, subIndex:number) => (*/}
                                                {/*<div className="reply" key={subIndex}>*/}
                                                    {/*<div className="reply-user">*/}
                                                        {/*<div className="reply-user-name">{!subItem.creator ? '' : (subItem.creator.userNickName || '')}</div>*/}
                                                        {/*/!*<div className="reply-user-give" onClick={giveLike}>*!/*/}
                                                            {/*/!*<span className="give-num">0</span>*!/*/}
                                                            {/*/!*<img className="article-img" src={require("../../assets/image/zan-icon@2x.png")} alt=""/>*!/*/}
                                                        {/*/!*</div>*!/*/}
                                                    {/*</div>*/}
                                                    {/*<div className="info-txt">*/}
                                                        {/*<div className="txt-sp">{subItem.content}</div>*/}
                                                        {/*<div className="txt-ri-empty"></div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*))*/}
                                    {/*}*/}
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