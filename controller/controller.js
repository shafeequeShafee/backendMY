

const {UserDetails}=require("../model/userDetailsModel")


const saveImage=async(req,res)=>{
    const userDetails =new UserDetails()
    
    try{
      userDetails.name=req.body.name
      userDetails.age=req.body.age
      userDetails.images=req.body.image
      userDetails.save()
      console.log("bdy",req.body)
      console.log("hiiiiiiiiiiiiiiiiiiiiiii")
      res.send("hii")
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }  
}


const getImage = async (req, res) => {

    try {
        // we want get the handle of the schema in this file
        const userDetails =await UserDetails.find({name:req.params.id})
        res.json(userDetails)
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }
}


module.exports ={
    saveImage,
    getImage
  
}
