// Vercel Serverless Function: /api/geo
// Inspecciona cabeceras inyectadas por la red Edge de Vercel (x-vercel-ip-country, etc.)
module.exports = (req, res) => {
  const getHeader = (name) => req.headers[name] || req.headers[name.toLowerCase()] || null;

  const country = getHeader('x-vercel-ip-country') || 'Desconocido (Modo Local / no Vercel Edge)';
  const region = getHeader('x-vercel-ip-country-region') || 'N/A';
  const city = getHeader('x-vercel-ip-city') || 'Desconocida';
  const latitude = getHeader('x-vercel-ip-latitude') || 'N/A';
  const longitude = getHeader('x-vercel-ip-longitude') || 'N/A';
  const clientIp = getHeader('x-forwarded-for') || req.socket?.remoteAddress || '127.0.0.1';
  const vercelExecutionRegion = getHeader('x-vercel-execution-region') || 'local';

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    success: true,
    isVercelEdge: Boolean(getHeader('x-vercel-ip-country')),
    geolocation: {
      country: decodeURIComponent(country),
      region: decodeURIComponent(region),
      city: decodeURIComponent(city),
      latitude,
      longitude,
      ip: clientIp.split(',')[0].trim()
    },
    vercelNetwork: {
      executionRegion: vercelExecutionRegion,
      env: process.env.VERCEL_ENV || 'development'
    },
    rawHeaders: {
      'x-vercel-ip-country': getHeader('x-vercel-ip-country'),
      'x-vercel-ip-city': getHeader('x-vercel-ip-city'),
      'x-vercel-ip-country-region': getHeader('x-vercel-ip-country-region'),
      'x-vercel-execution-region': getHeader('x-vercel-execution-region')
    }
  });
};
