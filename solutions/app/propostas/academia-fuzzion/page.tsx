"use client";

import React, { useEffect } from "react";

export default function AcademiaFuzzion() {
  useEffect(() => {
    const loadAnimation = () => {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const frameCount = 240;
      const currentFrame = (index: number) => /propostas/academia-fuzzion/frames/ezgif-frame-solutions\app\propostas\academia-fuzzion\page.tsx{String(index + 1).padStart(3, '0')}.jpg;

      const images: HTMLImageElement[] = [];
      const airpods = { frame: 0 };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      const render = () => {
        if (images[airpods.frame]) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(images[airpods.frame], 0, 0, canvas.width, canvas.height);
        }
      };

      images[0].onload = render;

      const updateImage = (index: number) => {
        airpods.frame = index;
        render();
      };

      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
        requestAnimationFrame(() => updateImage(frameIndex));
      });
    };

    loadAnimation();
  }, []);

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <canvas id="canvas" style={{ width: '100%', height: '100vh', position: 'sticky', top: 0 }} width={1920} height={1080} />
      <div style={{ height: '500vh' }} />
    </div>
  );
}
