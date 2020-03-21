export interface LoginVO {
    /** token信息 */
    authInfo?: AuthTokenVO
    /** 用户基本信息 */
    user?: UserBaseInfoVO
    /** 注册标识(只登陆false，注册并登录true) */
    withRegister?: boolean
}
export interface AuthTokenVO {
    /** 用于刷新token的令牌 */
    refreshToken?: string
    /** token */
    token?: string
}

export interface UserBaseInfoVO {
    /** 活动渠道码 */
    activityChannelCode?: string
    /** 应用渠道码(客户端渠道包) */
    appChannel?: string
    /** 城市编码 */
    cityCode?: string
    /** 讲师佣金率 */
    commissionRate?: number
    /** 星座 */
    constellation?: string
    /** 合同照片 */
    contractPhotoUrl?: string
    /** 创建时间 */
    createDate?: string
    /** 创建人ID */
    createUserId?: number
    /** 删除标识 0:有效  1:删除 */
    delFlag?: number
    /** 家乡 */
    hometown?: string
    /** 身份证号 */
    idCard?: string
    /** 分布式唯一ID */
    kid?: number
    /** 最后修改时间 */
    lastUpdateDate?: string
    /** 最后修改人ID */
    lastUpdateUserId?: number
    /** 现居地 */
    livingPlace?: string
    /** 邀请码 */
    myInviteCode?: string
    /** 讲师运营人员 */
    operationDirector?: string
    /** 运营电话 */
    operatorPhone?: string
    /** 极光设备唯一id */
    registrationId?: string
    /** 用户角色集合 */
    roles?: UserRole[]
    /** 年龄 */
    userAge?: number
    /** 用户背景图片 */
    userBgImg?: string
    /** 出生年月日 */
    userBirthday?: string
    /** 用户简介 */
    userDesc?: string
    /** 用户扩展字段 */
    userExt?: string
    /** 用户性别 0-女 1-男 */
    userGenders?: number
    /** 用户id */
    userId?: number
    /** 头像 */
    userImg?: string
    /** 姓名 */
    userName?: string
    /** 昵称 */
    userNickName?: string
    /** 用户手机号码 */
    userPhone?: string
    /** 用户二维码地址 */
    userQr?: string
    /** 用户签名 */
    userSignature?: string
    /** 用户状态 0-正常 1-冻结 2-注销 */
    userStatus?: number
    /** 马甲状态 0-普通用户 1-马甲 */
    vestFlag?: number
}
export interface UserRole {
    /** 角色 */
    role?: string
    /** 角色头衔 */
    roleTitle?: string
}
export interface OrderReceivingAddressVO {
    /** 默认地址标识  0默认 1非默认 */
    defaultFlag?: number
    /** 分布式唯一ID */
    kid?: number
    /** 邮政编码 */
    postCode?: string
    /** 详细地址 */
    receivingAddresDetail?: string
    /** 收货地址市 */
    receivingCity?: string
    /** 收货地址市  回显 */
    receivingCityText?: string
    /** 收货地址区 */
    receivingCounty?: string
    /** 收货地址区  回显 */
    receivingCountyText?: string
    /** 收货人姓名 */
    receivingName?: string
    /** 收货人手机号 */
    receivingPhone?: string
    /** 收货地址省 */
    receivingProvince?: string
    /** 收货地址省  回显 */
    receivingProvinceText?: string
}