# Sanity to cPanel Auto Deploy

This project is configured to stay as a static Next.js export and publish automatically after content changes.

## Hosted Sanity Studio

The Sanity Studio for this project is deployed at:

```text
https://usha-kolpe-studio.sanity.studio/
```

This is the URL the owner can use to edit content.

## How it works

1. Content editor publishes in Sanity
2. Sanity webhook triggers a GitHub Actions workflow
3. GitHub Actions runs `npm ci` and `npm run build`
4. The generated `out/` folder is synced to cPanel over SSH/SFTP
5. The live site updates after the workflow completes

## Requirements

- Repository hosted in GitHub
- GitHub Actions enabled
- cPanel account with SSH/SFTP access enabled
- Deployment target path, usually something like `/home/USERNAME/public_html`
- Access to Sanity project settings to configure a webhook

## GitHub repository variables

Add these in GitHub under `Settings -> Secrets and variables -> Actions -> Variables`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

## GitHub repository secrets

Add these in GitHub under `Settings -> Secrets and variables -> Actions -> Secrets`:

- `CPANEL_SSH_HOST`
- `CPANEL_SSH_PORT`
- `CPANEL_SSH_USERNAME`
- `CPANEL_SSH_PRIVATE_KEY`
- `CPANEL_DEPLOY_PATH`
- `SANITY_API_TOKEN` (optional, only if the build needs authenticated Sanity reads)

## Sanity webhook setup

Create a webhook in Sanity that sends a `POST` request to this GitHub API URL:

```text
https://api.github.com/repos/OWNER/REPO/actions/workflows/deploy-cpanel.yml/dispatches
```

Use these headers:

```text
Accept: application/vnd.github+json
Authorization: Bearer YOUR_GITHUB_TOKEN
Content-Type: application/json
```

Use this JSON body:

```json
{
  "ref": "main"
}
```

## GitHub token for webhook

Create a GitHub token that can trigger the workflow for this repository, then paste that token into the Sanity webhook `Authorization` header.

Use the narrowest permissions your GitHub setup allows for workflow dispatch on this repository.

## First-time validation

Before connecting Sanity:

1. Add all variables and secrets in GitHub
2. Run the `Deploy static site to cPanel` workflow manually from GitHub Actions
3. Confirm the site updates in cPanel
4. Only then connect the Sanity webhook

## Operational note

This flow is not instant publishing. After a Sanity publish, the content normally appears live after the GitHub workflow finishes.
