import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  vx: number;
  vy: number;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize stars - much smaller and more numerous for realism
    const starCount = 1000;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 0.5 + 0.1, // Much smaller stars
        opacity: Math.random() * 0.6 + 0.4,
        vx: -0.05, // All stars drift left at same slow speed
        vy: 0,     // No vertical movement
      });
    }

    // Animation loop
    let animationId: number;

    const animate = () => {
      // Clear canvas completely each frame
      ctx.fillStyle = 'rgba(15, 20, 25, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        // Update position (slow drift)
        star.x += star.vx;

        // Wrap around edges (only x, since y stays constant)
        if (star.x < -5) star.x = canvas.width + 5;

        // Subtle twinkling effect - vary opacity slightly
        const twinkle = Math.sin(Date.now() * 0.0005 + star.x + star.y) * 0.15;
        const finalOpacity = Math.max(0.2, Math.min(1, star.opacity + twinkle));

        // Draw small white star
        ctx.fillStyle = `rgba(245, 247, 250, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 100%)',
        zIndex: 0,
      }}
    />
  );
}
