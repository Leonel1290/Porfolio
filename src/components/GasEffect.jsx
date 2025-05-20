import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

class Particle {
    constructor(canvasWidth, canvasHeight, ctx) {
        this.ctx = ctx;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = `rgba(175, 179, 183, ${this.opacity})`;
    }

    update(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth + this.size) this.x = -this.size;
        else if (this.x < -this.size) this.x = canvasWidth + this.size;
        if (this.y > canvasHeight + this.size) this.y = -this.size;
        else if (this.y < -this.size) this.y = canvasHeight + this.size;

        if (this.opacity > 0.05) {
            this.opacity -= 0.0005;
        } else {
            this.reset(canvasWidth, canvasHeight);
        }
        this.color = `rgba(175, 179, 183, ${this.opacity})`;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }

    reset(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = `rgba(175, 179, 183, ${this.opacity})`;
    }
}

const GasEffect = () => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);
    let particles = [];
    const numberOfParticles = 80;

    const initParticles = (canvasWidth, canvasHeight, ctx) => {
        particles = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle(canvasWidth, canvasHeight, ctx));
        }
    };

    const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update(canvas.width, canvas.height);
            particles[i].draw();
        }

        animationFrameId.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const handleResize = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
                initParticles(canvas.width, canvas.height, ctx);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        initParticles(canvas.width, canvas.height, ctx);
        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.8 }}
        ></canvas>
    );
};

export default GasEffect;