/**
 * Created by lee on 2018/8/22.
 */
// 中间层，用来连接数据库
import Monk from 'monk';
const mongodb = Monk('127.0.0.1:27017/test'); // test就是你的数据库
import koaRouter from 'koa-router';
const router = new koaRouter();

// 必须异步操作，不然读不出来数据
router.get("/", async ctx => {
    // 读取user集合
    const user = mongodb.get('user')
    const data = await user.find()
    ctx.response.body = data
})

export default router;