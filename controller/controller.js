

//const {UserDetails}=require("../model/userDetailsModel")
// const {Storage} = require('@google-cloud/storage');
// const storage = new Storage({
//     keyFilename:"",
//  });
//  let bucketName = ""
//  let filename = 'test.txt';

const uploadFile = (req, res) => {
    res.send("upload file")
}

const createUser = async (req, res) => {


    try {

        await storage.bucket(bucketName).upload(filename, {
            // Support for HTTP requests made with `Accept-Encoding: gzip`
            gzip: true,
            // By setting the option `destination`, you can change the name of the
            // object you are uploading to a bucket.
            metadata: {
                // Enable long-lived HTTP caching headers
                // Use only if the contents of the file will never change
                // (If the contents will change, use cacheControl: 'no-cache')
                cacheControl: 'public, max-age=31536000',
            },
        });

        console.log(`${filename} uploaded to ${bucketName}.`);
        res.send("hii createUser")
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }
}


const updateUser = async (req, res) => {

    try {
        // we want get the handle of the schema in this file
        res.send("hii updateUser")
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }
}

const deleteUser = async (req, res) => {

    try {
        // we want get the handle of the schema in this file
        res.send("hii deleteUser")
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }
}


module.exports = {
    updateUser,
    createUser,
    deleteUser,
    uploadFile
}
