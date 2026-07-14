# GitHub + Sanity + cPanel Handoff

This file contains the exact external setup needed to finish automatic publishing:

- Sanity publish
- GitHub Actions build
- cPanel upload

The workflow file already exists in:

`/.github/workflows/deploy-cpanel.yml`

## 1. GitHub repository variables

Go to:

`GitHub -> Repository -> Settings -> Secrets and variables -> Actions -> Variables`

Create these variables:

### `NEXT_PUBLIC_SITE_URL`

Example:

```text
https://your-domain.com
```

### `NEXT_PUBLIC_SANITY_PROJECT_ID`

Current value:

```text
wbvlv3m9
```

### `NEXT_PUBLIC_SANITY_DATASET`

Current value:

```text
production
```

### `NEXT_PUBLIC_SANITY_API_VERSION`

Current value:

```text
2026-06-19
```

## 2. GitHub repository secrets

Go to:

`GitHub -> Repository -> Settings -> Secrets and variables -> Actions -> Secrets`

Create these secrets:

### `CPANEL_SSH_HOST`

Example:

```text
your-server-hostname-or-ip
```

### `CPANEL_SSH_PORT`

Usually:

```text
22
```

### `CPANEL_SSH_USERNAME`

Example:

```text
cpanel-user
```

### `CPANEL_SSH_PRIVATE_KEY`

Paste the full private key contents.

Example format:

```text
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

### `CPANEL_DEPLOY_PATH`

Usually something like:

```text
/home/CPANEL_USERNAME/public_html
```

### `SANITY_API_TOKEN`

Use a Sanity token with enough read access for build-time content fetches.

## 3. Sanity Studio URL for the owner

The owner can edit content here:

```text
https://usha-kolpe-studio.sanity.studio/
```

## 4. GitHub token for the Sanity webhook

Create a GitHub fine-grained personal access token.

Repository access:

- only this repository

Repository permissions:

- `Actions: Read and write`

This matches GitHub's workflow dispatch API requirement. Source:

- [GitHub REST workflow dispatch docs](https://docs.github.com/en/rest/actions/workflows)

## 5. Sanity webhook

Go to:

`Sanity project -> API -> Webhooks`

Create a webhook with:

### Name

```text
Deploy static site to cPanel
```

### URL

Replace `OWNER` and `REPO`:

```text
https://api.github.com/repos/OWNER/REPO/actions/workflows/deploy-cpanel.yml/dispatches
```

### Method

```text
POST
```

### Headers

```text
Accept: application/vnd.github+json
Authorization: Bearer YOUR_GITHUB_FINE_GRAINED_TOKEN
Content-Type: application/json
```

### Body

```json
{
  "ref": "main"
}
```

### Trigger filter

Recommended:

```groq
_type in [
  "siteSettings",
  "homepage",
  "aboutPage",
  "galleryPage",
  "awardsPage",
  "award",
  "exhibitionsPage",
  "exhibition",
  "advocacyPage",
  "contactPage",
  "galleryCategory",
  "artwork"
]
```

This keeps deploys tied to actual site content changes.

Sanity webhook docs:

- [Sanity GROQ-powered webhooks](https://www.sanity.io/docs/content-lake/webhooks)

## 6. First test order

Do this in order:

1. Add GitHub variables
2. Add GitHub secrets
3. Run the GitHub workflow manually once
4. Confirm files deploy correctly to cPanel
5. Create the Sanity webhook
6. Edit one page in Sanity and publish
7. Confirm GitHub Action runs
8. Confirm cPanel site updates

## 7. What the workflow already does

The existing workflow:

1. checks out the repo
2. installs dependencies
3. runs `npm run build`
4. uploads the generated `out/` folder to cPanel using `rsync` over SSH

## 8. If the workflow fails

Check these first:

- wrong SSH host
- wrong SSH username
- wrong deploy path
- SSH key not authorized on cPanel
- GitHub token missing `Actions: Read and write`
- Sanity webhook pointed to wrong repository or branch

## 9. Important current limitation

This site is still a static export.

That means:

- Sanity edits are not instant
- publish triggers a rebuild
- the live site updates after the GitHub workflow finishes

That is expected for this setup.
