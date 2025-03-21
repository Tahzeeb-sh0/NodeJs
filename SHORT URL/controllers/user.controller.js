import { MyUser } from "../models/user.model.js";

async function handleUserSignUp(req, res) {
  const { username, email, password } = req.body;

try {
  
      const user = await MyUser.create({
        username,
        email,
        password,cmd
      });
  
  
    if (!user) {
      console.log("Failed")
      return res.status(401).json({ message: "Failed to signup!" });
    }
} catch (error) {
  console.log(error)
}

  return res.render("signup");
}

export { handleUserSignUp };
