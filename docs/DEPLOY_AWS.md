# Deploy CV to AWS (S3 + CloudFront)

Static build + S3 bucket + CloudFront is the standard way to host this Astro site on AWS with HTTPS and a CDN.

## 1. Build the static site

```bash
npm run build
```

Output goes to `dist/`. That folder is what you upload.

## 2. Create an S3 bucket

- **Bucket name**: e.g. `your-cv-portfolio` (must be globally unique).
- **Region**: Pick one (e.g. `us-east-1`).
- **Block all public access**: Leave **on** (CloudFront will access the bucket via an origin access identity, not public reads).
- Create the bucket.

## 3. Upload build to S3

From the project root:

```bash
aws s3 sync dist/ s3://YOUR_BUCKET_NAME/ --delete
```

- `--delete` removes files in S3 that are no longer in `dist/` (keeps the bucket in sync with the latest build).

## 4. Create a CloudFront distribution

1. **Origin**
   - **Origin domain**: Select your S3 bucket (e.g. `your-cv-portfolio.s3.us-east-1.amazonaws.com`).
   - **Origin access**: **Origin access control settings (recommended)**. Create a new OAC if prompted; CloudFront will offer to update the bucket policy for you — accept that.
   - **Name**: Auto-filled from bucket.

2. **Default cache behavior**
   - **Viewer protocol policy**: **Redirect HTTP to HTTPS** (recommended).
   - **Allowed HTTP methods**: GET, HEAD, OPTIONS (default is fine).
   - **Cache policy**: **CachingOptimized** or **CachingDisabled** for quick iterations; you can tighten caching later.

3. **Settings**
   - **Price class**: Use all edge locations, or “Use only North America and Europe” to save a bit.
   - **Alternate domain (CNAME)**: Optional — add your custom domain (e.g. `cv.yourdomain.com`) if you use one.
   - **Custom SSL certificate**: If you added a CNAME, request or import a cert in **us-east-1** in ACM and select it.

4. Create the distribution. Note the **Distribution domain name** (e.g. `d1234abcd.cloudfront.net`).

## 5. (Optional) Custom domain and HTTPS

- In **Route 53** (or your DNS provider), add a CNAME (or alias if using Route 53) for your subdomain → CloudFront distribution domain name.
- In CloudFront, you already set the alternate domain and ACM certificate; after DNS propagates, the site will be served over HTTPS on your domain.

## 6. Deploy / update workflow

Whenever you change the CV and want to go live:

```bash
npm run build
aws s3 sync dist/ s3://YOUR_BUCKET_NAME/ --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

- Replace `YOUR_BUCKET_NAME` and `YOUR_DISTRIBUTION_ID`.
- The invalidation makes CloudFront edge caches fetch the new files; without it, users might see old content until TTL expires.

## One-liner (after first-time setup)

```bash
npm run build && aws s3 sync dist/ s3://YOUR_BUCKET_NAME/ --delete && aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Checklist

| Step | What                                                                                          |
| ---- | --------------------------------------------------------------------------------------------- |
| 1    | S3 bucket created, block public access **on**                                                 |
| 2    | OAC created and bucket policy updated so only CloudFront can read                             |
| 3    | CloudFront distribution origin = S3 bucket (with OAC)                                         |
| 4    | Build → `aws s3 sync dist/ s3://BUCKET/ --delete`                                             |
| 5    | (Optional) Invalidate: `aws cloudfront create-invalidation --distribution-id ID --paths "/*"` |
| 6    | (Optional) Custom domain + ACM cert in us-east-1 + CNAME to CloudFront                        |

Your site URL is either:

- **CloudFront URL**: `https://YOUR_DISTRIBUTION_ID.cloudfront.net`
- **Custom domain**: `https://cv.yourdomain.com` (after DNS + cert)
