import { useEffect, useRef } from "react";

// Canvas of glowing embers rising through the hero; they drift away from the pointer.
export default function Embers() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -999, y: -999 };
    let w = 0;
    let h = 0;
    let frame = 0;

    const size = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (y) => ({
      x: Math.random() * w,
      y: y === undefined ? h + Math.random() * 40 : y,
      r: Math.random() * 1.8 + 0.6,
      vy: Math.random() * 0.7 + 0.25,
      vx: (Math.random() - 0.5) * 0.3,
      life: Math.random() * 0.6 + 0.4,
      hue: 18 + Math.random() * 26,
    });

    const draw = (embers) => {
      ctx.clearRect(0, 0, w, h);
      embers.forEach((e) => {
        const fade = Math.max(0, Math.min(1, e.y / h)) * e.life;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${e.hue}, 90%, 58%, ${fade})`;
        ctx.shadowColor = `hsla(${e.hue}, 95%, 55%, ${fade})`;
        ctx.shadowBlur = 8;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    size();
    const count = Math.round(Math.min(90, w / 12));
    const embers = Array.from({ length: count }, () => spawn(Math.random() * h));

    const tick = () => {
      embers.forEach((e, i) => {
        const dx = e.x - mouse.x;
        const dy = e.y - mouse.y;
        if (dx * dx + dy * dy < 9000) {
          e.vx += dx / 3000;
          e.vy += 0.02;
        }
        e.x += e.vx + Math.sin((e.y + i) / 40) * 0.2;
        e.y -= e.vy;
        e.vx *= 0.98;
        if (e.y < -10) embers[i] = spawn();
      });
      draw(embers);
      frame = requestAnimationFrame(tick);
    };

    const onMove = (ev) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = ev.clientX - r.left;
      mouse.y = ev.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -999;
    };

    window.addEventListener("resize", size);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    if (reduce) draw(embers);
    else frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", size);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
