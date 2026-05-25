const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AWS CodeBuild Deployment</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          background: white;
          padding: 50px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          text-align: center;
          max-width: 600px;
        }
        h1 {
          color: #667eea;
          margin-bottom: 20px;
          font-size: 2.5em;
        }
        .success-icon {
          font-size: 60px;
          margin: 20px 0;
        }
        p {
          color: #333;
          font-size: 1.1em;
          line-height: 1.6;
          margin: 15px 0;
        }
        .details {
          background: #f0f4ff;
          padding: 20px;
          border-radius: 8px;
          margin-top: 30px;
          text-align: left;
        }
        .detail-item {
          margin: 10px 0;
          font-size: 0.95em;
          color: #555;
        }
        .label {
          font-weight: bold;
          color: #667eea;
        }
        .status {
          display: inline-block;
          background: #10b981;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          margin-top: 20px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="success-icon">✅</div>
        <h1>Deployment Successful!</h1>
        <p>Your application has been successfully deployed using <strong>AWS CodeBuild</strong></p>
        
        <div class="details">
          <div class="detail-item">
            <span class="label">Deployment Service:</span> AWS CodeBuild & CodeDeploy
          </div>
          <div class="detail-item">
            <span class="label">Application:</span> Node.js Express Server
          </div>
          <div class="detail-item">
            <span class="label">Status:</span> <span class="status">Running</span>
          </div>
          <div class="detail-item">
            <span class="label">Port:</span> ${PORT}
          </div>
          <div class="detail-item">
            <span class="label">Deployment Time:</span> ${new Date().toLocaleString()}
          </div>
        </div>
        
        <p style="margin-top: 30px; font-size: 0.9em; color: #888;">
          This is a sample application to demonstrate AWS CodeBuild deployment.
        </p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', message: 'Application is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log('📦 Deployed with AWS CodeBuild');
});
