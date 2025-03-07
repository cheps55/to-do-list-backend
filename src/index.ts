
import express, { NextFunction, Request, Response } from 'express';

const app = express();
const cors = require('cors')
const port = process.env.PORT || 3100;

// Middleware
app.use(express.json());
app.use(cors());

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the Express server!' });
});

app.post('/save', (req: Request, res: Response) => {
    res.send({ success: true, body: req.body });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
