import axios from 'utils/axios'

const callApi = (url:any, method:any, body = {}, config = {}) => {
	let params:any = {
		method,
		...config,
		data: body
	}
	if (method === 'GET') {
		delete params.data

	}

	return (dispatch:any, timeout = false) => {
		return new Promise((resolve, reject) => {
			if (timeout) setTimeout(() => reject(new Error('Connection Timeout!')), 30 * 1000)
			axios(url, params).then(resolve, reject)
		})
			.then((res:any) => {
				if (res.status === 200) {
					return res.data
				}
				else throw new Error(res.status === 500 ? 'Something went wrong! Please try again later' : res.status === 429 ? 'Too many requests! Please try again later' : res.statusText)
			})
			.catch(err => {
				throw err.response
			})
	}
}

const apis = {
	get: (url:any, config:any) => callApi(url, 'GET', {}, config),
	post: (url:any, body:any, config:any) => callApi(url, 'POST', body, config),
}

export default apis;