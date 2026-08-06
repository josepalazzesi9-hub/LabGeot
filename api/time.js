// Vercel Serverless Function: /api/time
module.exports = (req, res) => {
  const now = new Date();
  
  // Custom Vercel environment detection
  const vercelEnv = process.env.VERCEL_ENV || 'local / unassigned';
  const vercelUrl = process.env.VERCEL_URL || 'localhost';
  const vercelRegion = process.env.VERCEL_REGION || req.headers['x-vercel-execution-region'] || 'dev-local';

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    success: true,
    message: "Serverless Function ejecutada con éxito en Vercel",
    timestamp: now.toISOString(),
    formattedTime: now.toLocaleString('es-ES', { timeZoneName: 'short' }),
    serverInfo: {
      environment: vercelEnv,
      deploymentUrl: vercelUrl,
      region: vercelRegion,
      nodeVersion: process.version,
    },
    clientHeaders: {
      host: req.headers['host'],
      userAgent: req.headers['user-agent']
    }
  });
};
