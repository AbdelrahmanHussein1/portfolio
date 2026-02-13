# Abdelrahman Ehab - AI Engineer Portfolio

A modern, responsive portfolio website showcasing AI and Machine Learning projects with premium dark theme aesthetics.

## 🚀 Features

- **Modern Dark Theme** with electric blue and gold accents
- **Glassmorphism Effects** and smooth micro-animations
- **Fully Responsive** - works perfectly on mobile, tablet, and desktop
- **Interactive Portfolio** filtering by category (ML, CV, NLP, Robotics)
- **Testimonials Carousel** with auto-play and manual controls
- **Contact Form** with real-time validation
- **Smooth Scrolling** navigation with active section highlighting
- **Accessibility Optimized** with ARIA labels and keyboard navigation
- **Performance Optimized** with lazy loading and debounced scroll events

## 📁 Project Structure

```
WEB/
├── index.html              # Main HTML structure
├── index.css               # Design system and base styles
├── components.css          # Component-specific styles
├── script.js               # Interactive functionality
├── assets/
│   ├── images/            # Project and profile images
│   └── resume.pdf         # Downloadable resume
└── README.md              # This file
```

## 🖼️ Required Images

To complete your portfolio, add the following images to the `assets/images/` folder:

### Profile Images

- **profile.jpg** (400x400px recommended) - Your professional headshot for the hero section
- **about.jpg** (600x800px recommended) - Image for the about section

### Project Thumbnails (800x600px recommended)

- **ecg-project.jpg** - ECG Arrhythmia Detection project
- **nlp-project.jpg** - GenZ to Formal English Translation project
- **aeroscan-project.jpg** - AeroScan Image Segmentation project
- **campus-nav-project.jpg** - Smart Campus Navigation project
- **robot-project.jpg** - Auto Recycling Robot project

### Testimonial Photos (100x100px recommended, circular crop)

- **testimonial1.jpg** - Dr. Ahmed Hassan (CIB)
- **testimonial2.jpg** - Prof. Sarah Mohamed (Galala University)
- **testimonial3.jpg** - Eng. Khaled Ibrahim (Telecom Egypt)

### Resume

- **resume.pdf** - Your resume/CV in PDF format

> **Tip**: Use square images for profiles and testimonials, and 4:3 aspect ratio for project thumbnails for best results.

## 🎨 Color Scheme

- **Primary Background**: `#0a0a0f` (Deep Night)
- **Secondary Background**: `#1a1a2e` (Rich Dark)
- **Primary Accent**: `#00d4ff` (Electric Blue)
- **Secondary Accent**: `#ffd700` (Gold)
- **Success**: `#00ff88` (Neon Green)

## 🛠️ Customization

### Update Personal Information

1. **Contact Details** (index.html):
   - Email: Line 626, 681
   - Phone: Line 636
   - LinkedIn: Line 663, 723
   - GitHub: Line 672, 731

2. **Hero Section** (index.html, Line 82-93):
   - Update name, tagline, and description

3. **About Section** (index.html, Line 149-238):
   - Modify bio and skills

4. **Projects** (index.html, Line 267-409):
   - Update project details, descriptions, and tags

5. **Typing Animation** (script.js, Line 83-88):
   - Customize the rotating phrases array

### Add More Projects

To add a new project, copy one of the existing project blocks in `index.html` (e.g., lines 269-294) and update:

- `data-category` attribute (ml, cv, nlp, or robotics)
- Image source and alt text
- Project title and description
- Technology tags

### Form Integration

The contact form currently simulates submission. To integrate with a real backend:

**Option 1: EmailJS (Recommended for beginners)**

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Uncomment and update the EmailJS code in script.js (around line 380)

**Option 2: Formspree**

1. Sign up at [formspree.io](https://formspree.io/)
2. Update the form action attribute in index.html

**Option 3: Custom Backend**

- Uncomment the fetch code in script.js (lines 360-378)
- Update `YOUR_API_ENDPOINT` with your backend URL

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Deploy from main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop your WEB folder
3. Your site will be live instantly with a custom subdomain

### Option 3: Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- High contrast text
- Focus visible states
- ARIA labels for interactive elements

## 🎯 Performance

- Lighthouse Score Target: 90+
- First Contentful Paint: < 2s
- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Minified code ready for production

## 📝 SEO

- Semantic HTML5 structure
- Meta descriptions
- Open Graph tags
- Unique H1 per page
- Alt text for all images
- Mobile-responsive

## 🔧 Troubleshooting

### Images Not Showing

- Verify image paths in `index.html` match your file names exactly
- Ensure images are in `assets/images/` directory
- Check browser console for 404 errors

### CSS Not Loading

- Make sure both `index.css` and `components.css` are in the same directory as `index.html`
- Clear browser cache (Ctrl+Shift+R)

### Mobile Menu Not Working

- Check that `script.js` is loaded at the bottom of `index.html`
- Verify no JavaScript errors in console (F12)

## 📄 License

This portfolio template is created for Abdelrahman Ehab. Feel free to modify and use it for your personal portfolio.

## 📞 Support

For questions or issues:

- Email: abdulrahman.ehab.hussein@gmail.com
- LinkedIn: [linkedin.com/in/abdelrahman-ehab-aie](https://linkedin.com/in/abdelrahman-ehab-aie)

---

**Built with ❤️ using HTML, CSS, and JavaScript**
