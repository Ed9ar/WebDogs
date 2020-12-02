import * as mongoose from 'mongoose';

async function setMongo(): Promise<any> {
    const uriMongo = "mongodb+srv://web-user:1234@cluster0.4z3ka.mongodb.net/webdogs?retryWrites=true&w=majority";
    mongoose.Promise = global.Promise;
    mongoose.set('useCreateIndex', true);
    mongoose.set('debug',true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);
    await mongoose.connect(uriMongo);
    console.log("Me he conectado a mongo");
}

export default setMongo;