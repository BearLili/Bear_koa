/**
 * Created by lee on 2018/8/23.
 */
import mongoose from 'mongoose';
import {getResponse} from  '../config'

const catSchema = new mongoose.Schema({name: String, size: String});
const CatModel = mongoose.model('CatModel', catSchema);

const cat_query = async ctx => {
    try {
        const data = await CatModel.find(ctx.query);
        ctx.response.body = getResponse(data, true);
    } catch (err) {
        ctx.response.body = getResponse(null, false);
    }
};

const cat_get = async ctx => {
    try {
        const data = await CatModel.findOne({name: ctx.params.name}) || {};
        ctx.response.body = getResponse(data, true);
    } catch (err) {
        ctx.response.body = getResponse(null, false);
    }
};

const cat_create = async ctx => {
    try {
        const data = await CatModel.create(ctx.request.body) || {};
        ctx.response.body = getResponse(data, true);
    } catch (err) {
        ctx.response.body = getResponse(null, false);
    }
}

const cat_delete = async ctx => {
    try {
        const data = await  CatModel.deleteOne({name: ctx.params.name}) || {};
        ctx.response.body = getResponse(data, true);
    } catch (err) {
        ctx.response.body = getResponse(null, false);
    }
}

module.exports = {
    'GET /cat': cat_query,
    'GET /cat/:name': cat_get,
    'POST /cat': cat_create,
    'DELETE /cat/:name': cat_delete,
};