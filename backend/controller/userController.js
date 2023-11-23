const {User}=require("../models")
const userController = {}

/*
    this is auto generate example, you can continue 

*/
userController.index = async(req,res) => {
    res.json({
        message : "Hello userController"
    })
}

// Fungsi untuk menampilkan semua pengguna
exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Fungsi untuk menampilkan detail pengguna berdasarkan ID
  exports.getUserById = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Fungsi untuk membuat pengguna baru
  exports.createUser = async (req, res) => {
    const { name, email, password, status, is_admin } = req.body;
  
    try {
      const newUser = await User.create({
        name,
        email,
        password,
        status,
        is_admin,
        created_at: new Date(),
        updated_at: new Date(),
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Fungsi untuk mengupdate data pengguna berdasarkan ID
  exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password, status, is_admin } = req.body;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await user.update({
        name,
        email,
        password,
        status,
        is_admin,
        updated_at: new Date(),
      });
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Fungsi untuk menghapus pengguna berdasarkan ID
  exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await user.destroy();
  
      res.status(204).json();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = userController

