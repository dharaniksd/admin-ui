# Bootstrap 5 Landing Page

A responsive landing page built with Bootstrap 5 for the Admin UI Dashboard application.

## Features

### 1. **Collapsible Navbar**
- Fixed-top navigation bar with dark theme
- Brand logo with icon
- Responsive collapsible menu for mobile devices
- Navigation links: Home, About, Services, Contact
- Smooth scroll navigation to page sections

### 2. **Hero Section**
- Full viewport height hero section with gradient background
- Large display heading
- Descriptive subtitle
- Call-to-action (CTA) button
- Responsive text sizing for different screen sizes

### 3. **About Section**
- Brief description of the platform
- Light background for visual separation
- Centered content layout

### 4. **Services Section**
- Four feature cards showcasing key services:
  - Analytics Dashboard
  - Secure Authentication
  - Real-time Notifications
  - Responsive Design
- Bootstrap card components with hover effects
- Icons from Bootstrap Icons
- Responsive grid layout (4 columns on desktop, 2 on tablet, 1 on mobile)

### 5. **Contact Section**
- Contact information with email and phone
- Icon-enhanced contact links
- Light background for visual separation

### 6. **Footer**
- Dark themed footer
- Brand information
- Social media links (Facebook, Twitter, LinkedIn, GitHub)
- Copyright information
- Two-column layout (single column on mobile)

## Technologies Used

- **Bootstrap 5.3.0** - CSS framework via CDN
- **Bootstrap Icons 1.10.0** - Icon library via CDN
- **Custom CSS** - Additional styling in `style.css`
- **Vanilla JavaScript** - Smooth scrolling and active link highlighting

## File Structure

```
public/
├── landing.html    # Main landing page
├── style.css       # Custom styles
└── README.md       # This file
```

## How to Use

### Viewing the Landing Page

1. **Standalone**: Open `landing.html` directly in a web browser
2. **Local Server**: Serve the public directory with any HTTP server:
   ```bash
   cd public
   python3 -m http.server 8080
   # Visit http://localhost:8080/landing.html
   ```

### Customization

#### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    /* ... */
}
```

#### Content
- Update text directly in `landing.html`
- Modify service cards in the Services section
- Update contact information and social links

#### Styling
- Customize in `style.css` for:
  - Hero section gradient
  - Card hover effects
  - Animation timings
  - Responsive breakpoints

## Responsive Design

The landing page is fully responsive with optimized layouts for:

- **Mobile** (< 576px): Single column layout, collapsible navbar
- **Tablet** (576px - 991px): 2-column service cards
- **Desktop** (≥ 992px): Full 4-column layout with expanded navbar

## Browser Compatibility

Compatible with all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Semantic HTML

The page follows semantic HTML5 best practices:
- `<nav>` for navigation
- `<section>` for content sections
- `<footer>` for footer content
- Proper heading hierarchy (h1-h5)
- ARIA labels for accessibility

## Performance

- CDN-hosted Bootstrap and Icons for optimal caching
- Minimal custom CSS for fast load times
- No external dependencies beyond Bootstrap
- Optimized images (when added)

## Accessibility

- ARIA labels for icon-only links
- Keyboard navigation support
- Semantic HTML structure
- Sufficient color contrast
- Responsive text sizing

## License

This landing page is part of the Admin UI project. See the main repository for license information.
