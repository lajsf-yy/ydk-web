import React, { useState, useEffect, useRef } from 'react'
import './comment.css'
import avator from '../../assets/image/avatar.png'
import { transformTime } from '../../utils/time'
const CommentModule: PageComponent = props => {
	const giveLike = () => {
		props.openAppGive()
	}
	// 获取传进来的列表数据
	let [dataList, setDataList] = useState([]);   // 显示弹窗
	const [showMoreList, setShowMoreList] = useState(false);   // 一级评论最多三条，是否展示更多
	const oneLineHeight = useRef(null)
	const commentBox = useRef(null)
	const [msgHieght, setMsgHieght] = useState()
	useEffect(() => {
		console.log(props.dataList)
		if (props.dataList.length > 0) {//最多展示3条
			let arrList = JSON.parse(JSON.stringify(props.dataList));
			arrList.forEach((item: any) => {
				if (item.subs && item.subs.length > 2) {
					item.subsLen = item.subs.length;
					item.subs = item.subs.splice(0, 2)
					item.showMoreSubs = true;
				} else {
					item.showMoreSubs = false;
				}
			})
			if (arrList.length > 3) {
				setDataList(arrList.slice(0, 3))
				setShowMoreList(true)
			} else {
				setDataList(arrList)
				setShowMoreList(false)
			}
		}
	}, []);
	useEffect(() => {
		let current = oneLineHeight.current;
		if (current) {
			setMsgHieght(2 * current.offsetHeight)
			if (dataList && dataList.length > 0 && dataList[0].hasCount) {
				return;
			}
			dataList = dataList.map((item, index) => {
				item.hasCount = true;
				let subsItem = commentBox.current.children[index].getElementsByClassName('subs-text');
				item.subs.forEach((item2: any, index2: any) => {
					if (subsItem[index2].offsetHeight >= 2 * current.offsetHeight) {
						item2.showMoreTexts = true;
					} else {
						item2.showMoreTexts = false;
					}
				})
				return item;
			})
			setDataList(dataList)
		}

	}, [oneLineHeight.current && oneLineHeight.current, dataList])

	return (
		<div className="comment-wrap">
			<div className="comment">
				<div className="comment-top">评论</div>
				{
					dataList.length > 0 ?
						<div ref={commentBox}>
							{dataList.map((item, index) => (
								<div className="comment-item" key={index}>
									<div className="item-avatar">
										<img className="article-img" src={!item.creator ? avator : !item.creator.headImgUrl ? avator : (item.creator.headImgUrl || avator)} alt="" />
									</div>
									<div className="comment-text">
										<div className="user-text">
											<div className="user-left">
												<div className="user-name">
													{!item.creator ? '' : !item.creator.userNickName ? '' : (item.creator.userNickName || '')}
													{item.creator &&
														item.creator.roles &&
														item.creator.roles[0] &&
														item.creator.roles[0].role === 'lecture' ?
														<img className="teather-icon" src={require('../../assets/image/circle/jiangshi@3x.png')} alt="" /> : ''}

												</div>

											</div>

										</div>
										<div className="info-txt">
											<div className="txt-sp">{item.content}</div>
											<div className="txt-ri-empty"></div>
										</div>
										<div className="flexR pu-data-box">
											<div className="pu-data">{transformTime(item.createDate, false)}</div>
											<div className="right-com">
												<span className="toreply" onClick={giveLike}>回复</span>
												<div className="user-give" onClick={giveLike}>
													<img className="article-img" src={require("./image/zan_hui@2x.png")} alt="" />
													<span className="give-num">{item.statisticResult.likeCount || 0}</span>
												</div>
											</div>

										</div>
										{/*回复部分*/}
										{
											item.subs.length <= 0 ? '' :
												<div className="replyBox">
													{item.subs.map((subItem: any, subIndex: number) => (
														<div className="reply" key={subIndex}>
															<div className="reply-user">
																<div className="reply-user-name">{!subItem.creator ? '' : (subItem.creator.userNickName || '')}
																	{subItem.creator.roles
																		&& subItem.creator.roles[0]
																		&& subItem.creator.roles[0].role
																		&& subItem.creator.roles[0].role == 'lecture' ?
																		<img className="sub-lecture" src={require('../../assets/image/circle/jiangshi@3x.png')} alt="" />
																		: ''}
																	{
																		subItem.parent && subItem.parent.userNickName &&
																		<div className="reply-parent-user">
																			回复<span className="parent-user">{subItem.parent.userNickName || ''}</span>
																			{subItem.parent.roles
																				&& subItem.parent.roles[0]
																				&& subItem.parent.roles[0].role
																				&& subItem.parent.roles[0].role == 'lecture' ?
																				<img className="sub-lecture" src={require('../../assets/image/circle/jiangshi@3x.png')} alt="" />
																				: ''}
																		</div>
																	}
																</div>
															</div>
															<div className="info-txt">
																<div className="txt-sp subs-text" style={{ 'height': subItem.showMoreTexts ? msgHieght : 'auto', overflow: 'hidden' }}>{subItem.content}</div>
																<div className="txt-sp" ref={oneLineHeight} style={{ 'position': 'absolute', opacity: 0 }}>用于计算一行的高度</div>
																<div className="txt-ri-empty"></div>
															</div>
															<div className="item-info">
																<span className="sb-time">{transformTime(subItem.createDate, false)}</span>
																<span className="reght-re-zhan">
																	<span className="toreply" onClick={giveLike}>回复</span>
																	<div className="user-give" onClick={giveLike}>
																		<img className="article-img" src={require("./image/zan_hui@2x.png")} alt="" />
																		<span className="give-num">{subItem.statisticResult.likeCount || 0}</span>
																	</div>
																</span>
															</div>
															{
																subItem.showMoreTexts && <p className="showMoreTexts" onClick={giveLike}>展开</p>
															}

														</div>

													))}
													{
														item.showMoreSubs &&
														<p className="showMoreSubs" onClick={giveLike}>查看全部({item.subsLen})条回复 > </p>
													}

												</div>
										}
									</div>
								</div>
							))}
						</div>
						:
						<div className="comment-no">
							<img className="img-no" src={require("./image/wupinglun@2x.png")} alt="" />
							<div className="no-txt">暂无评论</div>
						</div>
				}
				{
					showMoreList && <div className="lookMore" onClick={giveLike}>查看更多</div>
				}

			</div>
		</div>
	)
}



CommentModule.options = { disableHeader: false, wrapperClassName: '' }
export default CommentModule