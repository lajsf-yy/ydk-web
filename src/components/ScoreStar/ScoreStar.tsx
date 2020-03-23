/*
 * @Author: mikey.jiufu 
 * @Date: 2020-03-22 20:30:04 
 * @Last Modified by: mikey.jiufu
 * @Last Modified time: 2020-03-22 20:45:06
 */
import React, { useState, useCallback, useEffect } from 'react'
import './scoreStar.css'
import assets from 'assets'
import { openApp } from 'utils/helper'
import DownPop from 'components/DownPop'
/**
 *
 * @param {defaultValue}  星星数据  必填
 * @param {size}          星星大小  选填
 * @returns
 */
const Star: PageComponent = props => {
  var starImg=()=>{
		var res=[];
		for(var i=0;i<5;i++){
			if(i<props.defaultValue){
				res.push(<img key={i}
							  className={props.size === 'small'? 'small' :
								  props.size === 'large'? 'large' : 'middle'
							  }
							  src={require('../../assets/image/brandstory/star_liang@2x.png')}/>)
			} else {
				res.push(<img key={i}
                              className={props.size === 'small'? 'small' :
                                  props.size === 'large'? 'large' : 'middle'
                              }
                              src={require('../../assets/image/brandstory/star@2x.png')}/>)
			}
		}
		return res;
	}
  return (
    <div className="star-wrap">
			{starImg()}
    </div>
  )
}

export default Star
