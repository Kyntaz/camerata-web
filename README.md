# 🎵💖 Camerata Appassionata's Website

This is the repository of Camerata Appassionata's website.

## 🔗 Link

Visit the website at http://cappassionata.pt/

## 📜 NPM Scripts

```bash
npm run build # Build the website on the build folder
npm run serve # Serve the website from the build folder
npm run deploy # Deploy the committed build of the site
```

## 🤫 Configuring Secrets

You can create a file called `secrets.json` in the root of this project containing the following information:

```json
{
    "ftpUser": "myftpuser@cappassionata.pt",
    "ftpPassword": "UltraSecretPassword"
}
```

This avoids you having to type this information when running scripts that require authentication from this project.
