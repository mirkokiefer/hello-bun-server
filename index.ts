const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    if (url.pathname === '/') {
      return new Response('Hello World! 🌍', {
        headers: { 'Content-Type': 'text/plain' },
      });
    }
    
    if (url.pathname === '/health') {
      return new Response('OK', {
        headers: { 'Content-Type': 'text/plain' },
      });
    }
    
    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Server running on port ${server.port}`);
