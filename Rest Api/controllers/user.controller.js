const User = require('../models/user.model');
async function registerUser(req,res){
    
      const body = req.body;
    if (!body.email || !body.first_name || !body.last_name || !body.gender) {
      return res.status(400).json({ message: "bad request" });
    } 

        await User.create({
          firstname: req.body.first_name,
          lastname: req.body.last_name,
          email: req.body.email,
          ip: req.ip,
        });
        
        console.log("entery inserted");

    return res.status(2001).json({message:'created'})
}


async function removeUser(req , res) {
  await User.findByIdAndDelete(req.params.id)
  console.log(req.params.id)
  return res.status(200).json({message:"success"})
}
async function getAllUser(req , res) {
    const allusers = await User.find({});
    const html = `
      <ol>
      ${allusers.map((users) => `<li>${users.firstname}</li>`).join("\n")}
      </ol>
      `;
    res.send(html);
}
async function updateUser(req , res) {
  await findById(req.params.id , {firstname:"tahzeeb"});
  return res.status(200).json({mesaage:"success"})
}

module.exports = {
    registerUser,
    updateUser,
    removeUser,
    getAllUser
}