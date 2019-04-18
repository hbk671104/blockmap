import { human, iOSColors } from 'react-native-typography'

export default {
    container: {
        flex: 1
    },
    pinColor: number => {
        if (number >= 20) {
            return iOSColors.red
        }
        if (number >= 10) {
            return iOSColors.orange
        }
        return iOSColors.green
    }
}
