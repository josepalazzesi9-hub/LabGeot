// Vercel Serverless Function: /api/echo
module.exports = (req, res) => {
  const method = req.method;
  const query = req.query || {};
  let body = req.body || null;

  // Intenta parsear el body si viene como string en Node
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      // Dejar como string
    }
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    success: true,
    message: `Respuesta desde Vercel Serverless API [${method}]`,
    received: {
      method,
      query,
      body,
      headersReceived: {
        'content-type': req.headers['content-type'] || 'none',
        'x-custom-header': req.headers['x-custom-header'] || 'none'
      }
    },
    meta: {
      processedAt: new Date().toISOString(),
      execTimeMs: Math.floor(Math.random() * 25) + 5
    }
  });
};
