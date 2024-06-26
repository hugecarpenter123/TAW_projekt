const config = {
  port: process.env.PORT || 3001,
  // databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://twwai:KTp5wYwutrLHPLT@cluster0.ooees.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://arkadiuszkupiec98:xKGbCsjZgePW3gVO@cluster0.rtjr6fg.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;