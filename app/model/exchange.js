import R from 'ramda'

export default {
    namespace: 'exchange',
    state: {
        data: {}
    },
    reducers: {
        save(state, { payload }) {
            return {
                ...state,
                data: R.pipe(
                    R.filter(d => !!d.country),
                    R.reduce((acc, c) => {
                        const country = R.path(['country'])(c)
                        return {
                            ...acc,
                            [country]: R.isNil(acc[country])
                                ? [c]
                                : [...acc[country], c]
                        }
                    }, {})
                )(payload)
            }
        }
    },
    effects: {
        *fetch({}, { call, put }) {
            try {
                const result = yield call(() =>
                    fetch('https://api.coingecko.com/api/v3/exchanges').then(
                        res => res.json()
                    )
                )
                yield put({ type: 'save', payload: result })
            } catch (error) {
                console.log(error)
            }
        }
    },
    subscriptions: {}
}
