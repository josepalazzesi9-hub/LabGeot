// Vercel Serverless Function: /api/info
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    app: "MapAPELL - Visor Geoespacial APELL Bahía Blanca",
    status: "Active on Vercel Serverless",
    serverlessTime: new Date().toISOString(),
    environment: process.env.VERCEL_ENV || "development",
    region: process.env.VERCEL_REGION || req.headers['x-vercel-execution-region'] || "local",
    clientCountry: req.headers['x-vercel-ip-country'] || "Localhost",
    clientCity: req.headers['x-vercel-ip-city'] || "Localhost"
  });
};
