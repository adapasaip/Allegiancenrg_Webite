import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.BACKEND_PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════╗
║   AllegianceNRG Backend Server Started             ║
╠════════════════════════════════════════════════════╣
║   Server running on: http://localhost:${PORT}      │
║   📧 Contact Form Emails: saiprithvi0705@gmail.com │
║   ℹ️  No backend email service needed              │
║   🔧 Emails sent via FormSubmit (client-side)      │
╚════════════════════════════════════════════════════╝
  `);
});
