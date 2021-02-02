module.exports = async (mongoose) => {
    await mongoose.connect('mongodb://localhost:27017/nettruyen', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    try {
        console.log('Sever conect to Database is Sucess!');
    } catch (error) {
        console.log('Sever conect to Database is Fail!');
    }
}