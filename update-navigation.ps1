# PowerShell script to update navigation and footer in all HTML files

$newNav = @'
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-content">
                <a href="index.html" class="nav-logo">SKAI<span>CONNECT</span></a>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="#services">Services</a>
                        <ul class="dropdown-menu">
                            <li><a href="design-optimization.html">Contact Center Design & Optimization</a></li>
                            <li><a href="consulting.html">Consulting & Project Management</a></li>
                            <li><a href="customer-experience.html">Dynamic Customer Experience</a></li>
                            <li><a href="migration.html">End-to-End Cloud Migration</a></li>
                            <li><a href="telecom.html">Telecom Implementation & Operations</a></li>
                            <li><a href="channels.html">Inbound / Outbound / Telemarketing</a></li>
                        </ul>
                    </li>
                    <li><a href="why-us.html">Why Choose Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
'@

$newFooter = @'
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div>
                    <div class="footer-logo">SKAI<span style="color: var(--primary-red);">CONNECT</span></div>
                    <p class="footer-tagline">Powering the Future of Customer Experience</p>
                    <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: var(--spacing-sm); line-height: 1.6;">Explore skaiconnect.com for innovative business solutions, technology integration, and expert services designed to enhance connectivity and drive growth in today's digital world.</p>
                </div>
                
                <div>
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#solutions">Our Solutions</a></li>
                        <li><a href="why-us.html">Why Choose Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4>Our Services</h4>
                    <ul class="footer-links">
                        <li><a href="design-optimization.html">Design & Optimization</a></li>
                        <li><a href="migration.html">Cloud Migration</a></li>
                        <li><a href="consulting.html">Consulting & PM</a></li>
                        <li><a href="telecom.html">Telecom Solutions</a></li>
                        <li><a href="channels.html">Omnichannel Support</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4>Contact Info</h4>
                    <ul class="footer-links">
                        <li style="display: flex; align-items: start; gap: 0.5rem;">
                            <span style="color: var(--accent-gold);">📍</span>
                            <span>Tampa, Florida</span>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.5rem;">
                            <span style="color: var(--accent-gold);">✉️</span>
                            <a href="mailto:project@skaiconnect.com">project@skaiconnect.com</a>
                        </li>
                        <li style="display: flex; align-items: start; gap: 0.5rem;">
                            <span style="color: var(--accent-gold);">📞</span>
                            <a href="tel:800-484-2275">800-484-2275</a>
                        </li>
                    </ul>
                    <h4 style="margin-top: var(--spacing-md);">Work Hours</h4>
                    <ul class="footer-links">
                        <li style="display: flex; align-items: start; gap: 0.5rem;">
                            <span style="color: var(--accent-gold);">🕒</span>
                            <span>9 AM - 5 PM<br>Monday - Saturday</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: var(--spacing-lg);">
                <div class="social-icons" style="justify-content: center;">
                    <a href="#" class="social-icon" title="LinkedIn">in</a>
                    <a href="#" class="social-icon" title="Facebook">f</a>
                    <a href="#" class="social-icon" title="Twitter">𝕏</a>
                    <a href="#" class="social-icon" title="Instagram">📷</a>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>Made with ❤️ by Socialiency Advertising</p>
                <p>&copy; 2024 SKAI Connect. All rights reserved. | <a href="#" style="color: var(--text-muted);">Privacy Policy</a> | <a href="#" style="color: var(--text-muted);">Terms of Service</a></p>
            </div>
        </div>
    </footer>
'@

$files = @(
    "design-optimization.html",
    "consulting.html",
    "customer-experience.html",
    "migration.html",
    "telecom.html",
    "channels.html",
    "why-us.html"
)

foreach ($file in $files) {
    Write-Host "Updating $file..."
    $content = Get-Content $file -Raw
    
    # Replace navigation
    $content = $content -replace '(?s)<nav class="navbar">.*?</nav>', $newNav
    
    # Replace footer
    $content = $content -replace '(?s)<footer class="footer">.*?</footer>', $newFooter
    
    Set-Content $file -Value $content -NoNewline
    Write-Host "✓ $file updated"
}

Write-Host "`nAll files updated successfully!"
