# Contributing to Technology Monastery Website

Thank you for your interest in contributing to the Technology Monastery website! We welcome contributions from the community.

## Code of Conduct

Please be respectful and constructive in all interactions. We are building this for nonprofit organizations and aim to create a welcoming community.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/FreeForCharity/Technologymonastery.org/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/device information

### Suggesting Enhancements

1. Check existing issues and discussions
2. Create a new issue with:
   - Clear title describing the enhancement
   - Detailed description of the proposed feature
   - Use cases and benefits
   - Any implementation ideas

### Pull Requests

1. **Fork the repository**
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**:
   - Follow the coding standards (see below)
   - Test your changes locally
   - Ensure accessibility standards are met
   - Update documentation if needed

4. **Commit your changes**:
   ```bash
   git commit -m "Add: Brief description of changes"
   ```
   Use prefixes: `Add:`, `Fix:`, `Update:`, `Remove:`

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**:
   - Describe what changes you made and why
   - Reference any related issues
   - Include screenshots for UI changes

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Include ARIA labels where appropriate
- Ensure proper heading hierarchy
- Add alt text for images

### CSS
- Use CSS variables defined in `:root`
- Follow mobile-first approach
- Maintain consistent spacing using variables
- Use BEM naming for complex components (optional)
- Keep selectors simple and readable

### JavaScript
- Use vanilla JavaScript (no frameworks)
- Write clear, commented code
- Handle errors gracefully
- Ensure keyboard accessibility
- Test on multiple browsers

### Accessibility
- WCAG 2.1 Level AA compliance minimum
- Test with screen readers
- Ensure keyboard navigation works
- Provide text alternatives for non-text content
- Maintain sufficient color contrast

### Performance
- Optimize images before committing
- Minimize external dependencies
- Use lazy loading for images
- Keep JavaScript execution efficient

## Testing

Before submitting a PR:

1. **Visual testing**: Test on multiple devices/browsers
2. **Accessibility**: Use tools like axe DevTools or WAVE
3. **Validation**: Run HTML/CSS validators
4. **Performance**: Check with Lighthouse
5. **Links**: Ensure all links work

### Testing Locally

```bash
# Start local server
python3 -m http.server 8000

# Test in browser
open http://localhost:8000

# Validate HTML (if html5validator installed)
pnpm run validate

# Lint CSS
pnpm run lint:css

# Lint JavaScript  
pnpm run lint:js
```

## File Structure

- Keep related files together
- Use meaningful file names
- Follow existing directory structure
- Don't commit build artifacts or dependencies

## Documentation

- Update README.md if you change functionality
- Add comments for complex code
- Document any new configuration options
- Update setup instructions if needed

## Questions?

- Open a discussion in the [Discussions](https://github.com/FreeForCharity/Technologymonastery.org/discussions) section
- Email: info@technologymonastery.org

## Recognition

All contributors will be recognized in our repository. Thank you for helping nonprofits through technology!
