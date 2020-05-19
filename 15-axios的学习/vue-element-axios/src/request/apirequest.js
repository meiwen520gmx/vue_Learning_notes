import {instance} from '@/request/index.js'

//获取数据
export function getData(data) {
    return instance({
        url: 'getJoke',
        params: data
    })
}