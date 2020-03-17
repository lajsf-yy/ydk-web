/**
 * 个位数 前面补0
 * @export
 * @param {number} num
 * @returns
 */
export function zeroize(num: number) {
    return (String(num).length == 1 ? '0' : '') + num
}
/**
 * 将-连接的时间转换成/连接
 * @export
 * @param {string} dateStr
 * @returns
 */
export function getDateTimeStamp(dateStr: string) {
    if (!dateStr) {
        // console.warn('dateStr is invalid');
        return 0
    }
    return Date.parse(dateStr.replace(/-/gi, '/'))
}
/**
 * 时间格式展示规则
 * 使用场景：发布时间展示
 * 一分钟以内：刚刚
 * 一小时以内："分钟前"
 * 今天： 今天 08:00
 * 昨天： 昨天 08:00
 * @export
 * @param {(string | number)} timestamp  时间格式 字符串或者时间戳
 * @param {boolean} withTime 是否要展示时分秒
 * @returns
 */
export function transformTime(timestamp: string | number, withTime: boolean) {
    if (!timestamp) {
        return ''
    }
    if (typeof timestamp == 'string') {
        timestamp = getDateTimeStamp(timestamp)
        if (timestamp === 0) {
            return ''
        }
    }

    let curTimestamp = new Date().getTime() //当前时间戳
    let timestampDiff = curTimestamp - timestamp // 参数时间戳与当前时间戳相差秒数

    let curDate = new Date(curTimestamp) // 当前时间日期对象
    let tmDate = new Date(timestamp) // 参数时间戳转换成的日期对象

    let Y = tmDate.getFullYear(),
        m = tmDate.getMonth() + 1,
        d = tmDate.getDate()
    let H = tmDate.getHours(),
        i = tmDate.getMinutes(),
        s = tmDate.getSeconds()

    if (timestampDiff < 60 * 1000) {
        // 一分钟以内
        if (timestampDiff < 0) {
            return zeroize(m) + '-' + zeroize(d) + '  ' + zeroize(H) + ':' + zeroize(i)
        } else {
            return '刚刚'
        }
    } else if (timestampDiff < 3600 * 1000) {
        // 一小时前之内
        return Math.floor(timestampDiff / 60 / 1000) + '分钟前'
    } else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
        return '今天' + zeroize(H) + ':' + zeroize(i)
    } else {
        let newDate = new Date(curTimestamp - 86400 * 1000) // 参数中的时间戳加一天转换成的日期对象
        if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
            if (withTime) {
                return '昨天' + zeroize(H) + ':' + zeroize(i)
            } else {
                return '昨天'
            }
        } else if (curDate.getFullYear() == Y) {
            if (withTime) {
                return zeroize(m) + '-' + zeroize(d) + ' ' + zeroize(H) + ':' + zeroize(i)
            } else {
                return zeroize(m) + '-' + zeroize(d)
            }
        } else {
            if (withTime) {
                return Y + '-' + zeroize(m) + '-' + zeroize(d) + ' ' + zeroize(H) + ':' + zeroize(i)
            } else {
                return Y + '-' + zeroize(m) + '-' + zeroize(d)
            }
        }
    }
}
