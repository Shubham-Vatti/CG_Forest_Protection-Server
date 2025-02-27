//Register User

export const RegisterUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  return res.status(201).json({ message: "User registered successfully" });
};
