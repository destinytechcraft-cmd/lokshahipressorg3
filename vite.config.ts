import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'google-sites-proxy',
        configureServer(server) {
          const handler = async (_req: any, res: any) => {
            try {
              const https = await import('https');
              const fetchPage = (targetUrl: string, redirectCount = 0): void => {
                if (redirectCount > 5) {
                  res.writeHead(500, { 'Content-Type': 'text/plain' });
                  res.end('Too many redirects');
                  return;
                }
                const options = {
                  headers: {
                    'User-Agent':
                      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                    'Accept':
                      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'mr,en-US,en;q=0.9',
                  },
                };
                https
                  .get(targetUrl, options, (targetRes) => {
                    if (
                      targetRes.statusCode &&
                      targetRes.statusCode >= 300 &&
                      targetRes.statusCode < 400 &&
                      targetRes.headers.location
                    ) {
                      fetchPage(targetRes.headers.location, redirectCount + 1);
                      return;
                    }
                    let body = '';
                    targetRes.on('data', (chunk) => (body += chunk));
                    targetRes.on('end', () => {
                      const modified = body.replace(
                        '<head>',
                        '<head><base href="https://sites.google.com/" target="_blank"><script>try{Object.defineProperty(window,"top",{get:()=>window.self});Object.defineProperty(window,"parent",{get:()=>window.self});}catch(e){}</script>'
                      );
                      res.writeHead(200, {
                        'Content-Type': 'text/html; charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                        'Cache-Control': 'no-cache',
                        'Content-Security-Policy': "frame-ancestors *",
                      });
                      res.end(modified);
                    });
                  })
                  .on('error', () => {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Failed to fetch site');
                  });
              };
              fetchPage('https://sites.google.com/view/lokshahipressorg/home');
            } catch {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Failed to proxy site');
            }
          };
          server.middlewares.use('/api/embed-site', handler);
        },
        configurePreviewServer(server) {
          const handler = async (_req: any, res: any) => {
            try {
              const https = await import('https');
              const fetchPage = (targetUrl: string, redirectCount = 0): void => {
                if (redirectCount > 5) {
                  res.writeHead(500, { 'Content-Type': 'text/plain' });
                  res.end('Too many redirects');
                  return;
                }
                const options = {
                  headers: {
                    'User-Agent':
                      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                    'Accept':
                      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'mr,en-US,en;q=0.9',
                  },
                };
                https
                  .get(targetUrl, options, (targetRes) => {
                    if (
                      targetRes.statusCode &&
                      targetRes.statusCode >= 300 &&
                      targetRes.statusCode < 400 &&
                      targetRes.headers.location
                    ) {
                      fetchPage(targetRes.headers.location, redirectCount + 1);
                      return;
                    }
                    let body = '';
                    targetRes.on('data', (chunk) => (body += chunk));
                    targetRes.on('end', () => {
                      const modified = body.replace(
                        '<head>',
                        '<head><base href="https://sites.google.com/" target="_blank"><script>try{Object.defineProperty(window,"top",{get:()=>window.self});Object.defineProperty(window,"parent",{get:()=>window.self});}catch(e){}</script>'
                      );
                      res.writeHead(200, {
                        'Content-Type': 'text/html; charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                        'Cache-Control': 'no-cache',
                        'Content-Security-Policy': "frame-ancestors *",
                      });
                      res.end(modified);
                    });
                  })
                  .on('error', () => {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Failed to fetch site');
                  });
              };
              fetchPage('https://sites.google.com/view/lokshahipressorg/home');
            } catch {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Failed to proxy site');
            }
          };
          server.middlewares.use('/api/embed-site', handler);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    css: {
      postcss: {},
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
