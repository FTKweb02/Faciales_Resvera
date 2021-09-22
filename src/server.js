const auth = basicAuth({
  users: {
    admin: '123',
    user: '456',
  },
});

// End-point on Server

app.get('/authenticate', auth, (req, res) => {
    if (req.auth.user === 'admin') {
      res.send('admin');
    } else if (req.auth.user === 'user') {
      res.send('user');
    }
  });
  
  // Request on Client
  
  const auth = async () => {
    try {
      const res = await axios.get('/authenticate', { auth: { username: 'admin', password: '123' } });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };