# Image Setup Instructions - URGENT! ⚠️

## Problem
Images are not loading because they need to be in the `public/img/` folder for React to serve them.

## Solution - Copy Images Folder

### Option 1: Using Command Line (Recommended)

**Windows PowerShell:**
```powershell
Copy-Item -Path "img" -Destination "public\img" -Recurse -Force
```

**Windows CMD:**
```cmd
xcopy img public\img /E /I /Y
```

**Mac/Linux:**
```bash
cp -r img public/img
```

### Option 2: Manual Copy
1. Open File Explorer
2. Navigate to your project root folder
3. Find the `img` folder
4. Copy the entire `img` folder
5. Paste it into the `public` folder
6. The structure should be: `public/img/logo.png`, `public/img/slider1.webp`, etc.

## Verify Setup

After copying, your structure should look like:
```
public/
├── img/
│   ├── logo.png
│   ├── slider1.webp
│   ├── slider2.webp
│   ├── slider3.webp
│   ├── slider4.webp
│   ├── gst1.png
│   ├── gst2.png
│   ├── instagram-footer-1.jpg
│   ├── instagram-footer-2.jpg
│   └── ... (all other images)
├── index.html
└── manifest.json
```

## Images Currently Used

### Hero Section:
- `/img/slider1.webp`
- `/img/slider2.webp`
- `/img/slider3.webp`
- `/img/slider4.webp`

### Header:
- `/img/logo.png`

### Service Pages (28 services):
- `/img/proprietorship.png`
- `/img/Partnership-Registration.png`
- `/img/opc.webp`
- `/img/LLP.png`
- `/img/creg.png`
- `/img/Trust.png`
- `/img/digital-signature-india.png`
- `/img/UDYAM-Registration.webp`
- `/img/startup.png`
- `/img/FSSAI_Registration.png`
- `/img/Professional_Tax.png`
- `/img/darpan-registration.png`
- `/img/RCMC-Registration.jpg`
- `/img/Halal-Certificate.jpg`
- `/img/import_export_india.png`
- `/img/Trade-License.png`
- `/img/GST-Registration-software-india.jpg`
- `/img/gst1.png`
- `/img/gst2.png` (for LUT Filing)
- `/img/income-Tax-e-Filing-india.png`
- `/img/GST-Notice.jpg`
- `/img/account.jpeg`
- `/img/tds-return-filing-india.png`
- `/img/Trademark.webp`
- `/img/default.png` (fallback)

### Footer:
- `/img/instagram-footer-1.jpg` through `instagram-footer-6.jpg`

### Features Section:
- `/img/about-1.png`
- `/img/personalised-quotes.png`
- `/img/contact-img.png`
- `/img/phone.png`
- `/img/Talk.jpg`
- `/img/default.png`

## After Copying

1. Restart your React dev server:
   ```bash
   # Stop the server (Ctrl+C)
   npm start
   ```

2. Check browser console for any image errors

3. Verify images load on:
   - Home page (hero slider, logo)
   - Service pages (service images)
   - Footer (Instagram images)

## Status: ⚠️ ACTION REQUIRED

**You must copy the `img` folder to `public/img/` for images to load!**

Once copied, all images will display correctly. ✅

