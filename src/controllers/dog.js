/**
 * Created by lee on 2018/8/23.
 */
import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({name: String, size: String});
const DogModel = mongoose.model('DogModel', dogSchema);

const dog_query = async ctx => {
    const data = await DogModel.find(function (err, docs) {
        if (!err) {
            console.log(docs)
            return docs
        } else {
            return console.error(err);
        }
    })
    ctx.response.body = data;
};

module.exports = {
    'GET /dog': dog_query,
};