# 🖼️ Images Setup for AllegianceNRG

## Adding Images

### Step 1: Add heroimg1.jpg
Place your hero image in this folder:
```
public/images/heroimg1.jpg
```

**Requirements:**
- Format: JPG or PNG
- Recommended size: 1920×1080px or larger
- File name: Must be `heroimg1.jpg` (lowercase)
- Content: Port/industrial facility or energy infrastructure photo

**Where it's used:**
- Homepage hero section background with three info boxes

### Step 2: Recommended Images to Add
Add these images to the same folder for better visual hierarchy:

1. `principles-lake.jpg` - Calm lake landscape or water scene (used in About page Guiding Principles section)
2. `hero-about.jpg` - Professional team or business environment
3. `hero-services.jpg` - Energy infrastructure or industrial facility
4. `hero-strategy.jpg` - Technology or data center
5. `hero-why-us.jpg` - Business growth or success

### Step 3: Use in Pages
Update each page to reference the image:

Example in Home.jsx:
```jsx
<HeroSection
  title="Your Title"
  subtitle="Your subtitle"
  backgroundImage="/images/heroimg1.jpg"
  showInfoBoxes={true}
>
```

### Image Sources (Royalty-Free)
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

### Image Optimization
Before uploading, compress your images:
1. Visit: https://tinypng.com
2. Drag and drop your image
3. Download the compressed version
4. Target size: 100-300 KB each

The folder structure is ready. Just add your `heroimage1.jpg` file and you're all set! 🚀
