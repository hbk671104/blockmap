import R from 'ramda'

export default {
    namespace: 'exchange',
    state: {
        list: []
    },
    reducers: {},
    effects: {
        *fetch({}, { call, put }) {
            try {
                const delay = () =>
                    new Promise(resolve => setTimeout(resolve, 1000))
                yield call(delay)
                yield put({ type: 'resetList' })
            } catch (error) {
                console.log(error)
            }
        }
    },
    subscriptions: {}
}
