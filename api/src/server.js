import app from './app.js';
import { AppDataSource } from './config/data-source.js';




AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(3000, () => console.log('Server started at http://localhost:3000'));
  })
  .catch((error) => console.error('DB Connection Error:', error));


