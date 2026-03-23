# Academia Fuzzion Gym - Deployment Configuration

## Quick Start

### Local Development
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server

# Using VS Code Live Server
# Install extension, right-click index.html, select "Open with Live Server"
```

Visit `http://localhost:8000` in your browser.

---

## Production Deployment

### Option 1: Vercel (Recommended)
Best for static sites with automatic HTTPS, CDN, and analytics.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd /path/to/Fuzzion-Gym-Website
vercel
```

**vercel.json configuration:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.html"
    }
  ]
}
```

### Option 2: Netlify
Easy deployment with Git integration.

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /path/to/Fuzzion-Gym-Website
netlify deploy --prod
```

**netlify.toml configuration:**
```toml
[build]
  publish = "."
  command = ""

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    X-Frame-Options = "SAMEORIGIN"
```

### Option 3: Traditional Web Hosting (cPanel/Bluehost)

1. **Upload files via FTP:**
   - Connect to server with FileZilla or cPanel File Manager
   - Upload all files to public_html directory
   - Maintain /frames folder structure

2. **Configure .htaccess:**
   - The included .htaccess handles:
     - GZIP compression
     - Browser caching
     - Security headers
     - HTTPS redirect (uncomment if needed)

3. **Set file permissions:**
   - Files: 644
   - Directories: 755

4. **Enable extensions:**
   - mod_rewrite
   - mod_deflate
   - mod_headers
   - mod_expires

### Option 4: AWS S3 + CloudFront

1. **Create S3 bucket:**
```bash
aws s3 mb s3://fuzzion-gym-website
```

2. **Upload files:**
```bash
aws s3 sync . s3://fuzzion-gym-website --region us-east-1
```

3. **Create CloudFront distribution:**
   - Origin: S3 bucket
   - Cache behavior: All files
   - Default TTL: 86400 seconds
   - Compress objects: Yes

4. **Configure HTTPS:**
   - Use AWS Certificate Manager
   - Enable forced HTTPS

---

## Performance Optimization

### Image Optimization

```bash
# Using ImageMagick (compress frames)
mogrify -quality 85 -strip frames/*.jpg

# Using TinyPNG CLI
tinypng frames/*.jpg

# Using ImageOptim (macOS)
imageoptim frames/
```

### Browser Caching Strategy

**For production servers, use cache headers:**
- HTML files: 12 hours
- CSS/JS: 1-3 months (versioned)
- Images: 1 year
- Frames: 1 week (changes often)

### Enable GZIP Compression

Most hosting already has this, but verify:
```bash
# Check if GZIP is enabled
curl -I https://your-domain.com/index.html | grep -i content-encoding
# Should return: content-encoding: gzip
```

### Minification (Optional)

For additional optimization:
```bash
# Minify CSS
npx cssnano styles.css -o styles.min.css

# Minify JavaScript
npx terser script.js -o script.min.js -c -m

# Minify HTML
npx html-minifier --input-dir . --output-dir dist
```

---

## SSL/HTTPS Configuration

### Free SSL Certificate (Let's Encrypt)

1. **Via Certbot:**
```bash
sudo certbot certonly --webroot -w /path/to/site -d yourdomain.com
```

2. **Via Hosting Provider:**
   - Most provide free SSL via AutoSSL
   - Enable automatic renewal

3. **Force HTTPS in .htaccess:**
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## Database Configuration (If Future Backend)

When ready to add backend functionality:

```php
// config.php example
define('DB_HOST', 'localhost');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_pass');
define('DB_NAME', 'fuzzion_gym');

// Protect config file in .htaccess
<FilesMatch "^config\.php$">
    Deny from all
</FilesMatch>
```

---

## Email Configuration

For contact form backend integration:

```php
// api/contact.php example
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $to = 'contato@fuzzion.com.br';
    $subject = 'Nova mensagem de contato - ' . $data['name'];
    $message = sprintf(
        "Nome: %s\nEmail: %s\nTelefone: %s\nMensagem:\n%s",
        $data['name'],
        $data['email'],
        $data['phone'],
        $data['message']
    );
    
    mail($to, $subject, $message);
    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
}
?>
```

---

## Monitoring & Analytics

### Google Analytics
Add to index.html before closing </head>:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

### Google Search Console
1. Verify ownership
2. Submit sitemap: https://yourdomain.com/sitemap.xml
3. Monitor performance metrics

### Uptime Monitoring
Use services like:
- UptimeRobot
- Pingdom
- StatusPage

---

## Security Checklist

- ✅ Update security headers in .htaccess
- ✅ Enable HTTPS/SSL
- ✅ Protect sensitive files
- ✅ Validate form inputs
- ✅ Use Content Security Policy (CSP)
- ✅ Keep dependencies updated
- ✅ Regular backups
- ✅ Monitor for vulnerabilities

---

## Troubleshooting Deployment

### 404 Errors on Routes
Check that .htaccess is being read:
```apache
<FilesMatch "^\.htaccess$">
    Allow from all
</FilesMatch>
```

### MIME Type Issues
Verify .htaccess MIME types configuration

### Slow Frame Loading
- Compress images further
- Use CDN for frame delivery
- Implement lazy loading (already done)

### CORS Issues (if needed)
```apache
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE"
Header set Access-Control-Allow-Headers "Content-Type"
```

---

## Maintenance

### Regular Tasks
- Monitor performance metrics (weekly)
- Check error logs (weekly)
- Security updates (monthly)
- Backup site (weekly)
- Review analytics (monthly)

### Updating Content
1. Never edit files on production directly
2. Test changes locally first
3. Use version control (Git)
4. Maintain backup of previous version

---

## Support Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [Can I Use](https://caniuse.com/)

---

**Last Updated**: March 18, 2026
**Version**: 1.0.0
