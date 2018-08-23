/**
 * Created by lee on 2018/8/23.
 */
module.exports = {
    dbPath: "mongodb://127.0.0.1:27017/test",
    httpPort: 3011,
    httpsPort: 3010,
    getResponse: (data, success, errorCode = '', message = '') => {
        return {
            data,
            success,
            errorCode,
            message
        }
    },
}