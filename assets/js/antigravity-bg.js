/**
 * Google Antigravity-inspired Particle Background Engine
 * Lightweight, 60fps canvas particle system with anti-gravity drift,
 * interactive cursor physics, and constellation connections.
 */
(function () {
  'use strict';

  const canvas = document.getElementById('antigravityCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = null;

  // Configuration: dense, luminous particles that float seamlessly across and behind cards
  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 80 : 160;
  const CONNECTION_DIST = isMobile ? 95 : 135;
  const MOUSE_RADIUS = isMobile ? 120 : 190;
  const MOUSE_FORCE = 0.055;

  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isActive: false
  };

  // Color Palettes tailored for crystal clarity and frosted glass transmission
  const getThemePalette = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      return {
        particles: [
          'rgba(255, 219, 112, ', // Signature amber gold
          'rgba(96, 165, 250, ',  // Celestial sky blue
          'rgba(248, 250, 252, ', // Crisp star white
          'rgba(251, 191, 36, ',  // Luminous amber
          'rgba(167, 139, 250, '  // Soft violet
        ],
        lineColor: 'rgba(255, 219, 112, ',
        mouseAura: 'rgba(255, 219, 112, 0.12)'
      };
    } else {
      return {
        particles: [
          'rgba(30, 41, 59, ',    // Slate 800 - Deep, crisp definition
          'rgba(37, 99, 235, ',   // Vibrant electric blue
          'rgba(217, 119, 6, ',   // Warm corporate amber gold
          'rgba(14, 165, 233, ',  // Sky cyan
          'rgba(79, 70, 229, '    // Deep indigo
        ],
        lineColor: 'rgba(71, 85, 105, ',
        mouseAura: 'rgba(37, 99, 235, 0.10)'
      };
    }
  };

  let palette = getThemePalette();

  // Particle Class
  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 25;
      
      // 22% of particles are larger glowing constellation nodes
      this.isMajor = Math.random() < 0.22;
      if (this.isMajor) {
        this.radius = Math.random() * 2.2 + 3.0; // 3.0px to 5.2px
        this.baseAlpha = Math.random() * 0.25 + 0.65; // High contrast
      } else {
        this.radius = Math.random() * 1.6 + 1.5; // 1.5px to 3.1px
        this.baseAlpha = Math.random() * 0.35 + 0.45;
      }
      
      // "Antigravity" upward drift with subtle horizontal wander
      this.vy = -(Math.random() * 0.45 + 0.22);
      this.vx = (Math.random() - 0.5) * 0.35;
      
      this.alpha = this.baseAlpha;
      this.pulseSeed = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.025 + 0.012;
      
      // Physical elasticity from mouse repulsion
      this.ox = this.x;
      this.oy = this.y;
      this.fx = 0;
      this.fy = 0;

      // Color choice from palette
      this.colorIndex = Math.floor(Math.random() * palette.particles.length);
    }

    update(time) {
      // Harmonic breathing
      this.pulseSeed += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.pulseSeed) * 0.15;

      // Anti-gravity upward motion + sinusoidal wobble
      this.y += this.vy;
      this.x += this.vx + Math.sin(time * 0.001 + this.pulseSeed) * 0.22;

      // Mouse repulsion physics (Antigravity displacement)
      if (mouse.isActive) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const power = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
          this.fx += (dx / dist) * power * 10;
          this.fy += (dy / dist) * power * 10;
        }
      }

      // Apply forces and dampen
      this.x += this.fx;
      this.y += this.fy;
      this.fx *= 0.88;
      this.fy *= 0.88;

      // Reset when particle reaches top or goes off edges
      if (this.y < -30) {
        this.reset(false);
      }
      if (this.x < -30) this.x = width + 30;
      if (this.x > width + 30) this.x = -30;
    }

    draw() {
      const colorPrefix = palette.particles[this.colorIndex];
      const alphaVal = Math.max(0.18, Math.min(1, this.alpha));

      if (this.isMajor) {
        ctx.save();
        ctx.shadowColor = colorPrefix + (alphaVal * 0.8) + ')';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = colorPrefix + alphaVal + ')';
        ctx.fill();
        ctx.restore();
      } else {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = colorPrefix + alphaVal + ')';
        ctx.fill();
      }
    }
  }

  // Create particle pool
  const particles = [];

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset before scaling
    ctx.scale(dpr, dpr);

    if (particles.length === 0) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    }
  }

  // Render Loop
  let lastTime = 0;

  function render(time) {
    animationFrameId = requestAnimationFrame(render);

    // Throttle on heavy lag (approx 60fps cap)
    if (time - lastTime < 14) return;
    lastTime = time;

    ctx.clearRect(0, 0, width, height);

    // Smooth cursor interpolation (lerp)
    mouse.x += (mouse.targetX - mouse.x) * 0.15;
    mouse.y += (mouse.targetY - mouse.y) * 0.15;

    // Subtle ambient cursor glow
    if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS);
      gradient.addColorStop(0, palette.mouseAura);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw Constellation Connection Lines
    const count = particles.length;
    for (let i = 0; i < count; i++) {
      const p1 = particles[i];
      p1.update(time);
      p1.draw();

      for (let j = i + 1; j < count; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const lineAlpha = (1 - dist / CONNECTION_DIST) * 0.42;
          ctx.beginPath();
          ctx.strokeStyle = palette.lineColor + lineAlpha + ')';
          ctx.lineWidth = 1.0;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
  }

  // Event Listeners
  window.addEventListener('resize', resize, { passive: true });

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.isActive = true;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.isActive = false;
    mouse.targetX = -1000;
    mouse.targetY = -1000;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      mouse.targetX = e.touches[0].clientX;
      mouse.targetY = e.touches[0].clientY;
      mouse.isActive = true;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.isActive = false;
    mouse.targetX = -1000;
    mouse.targetY = -1000;
  }, { passive: true });

  // Update palette on theme toggle
  window.addEventListener('themeChanged', () => {
    palette = getThemePalette();
  });

  // Observe theme attribute changes directly on <html>
  const observer = new MutationObserver(() => {
    palette = getThemePalette();
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Pause loop when tab is hidden to preserve battery & CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }
  });

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    resize();
    particles.forEach(p => p.draw());
    return;
  }

  // Initialize
  resize();
  animationFrameId = requestAnimationFrame(render);
})();
