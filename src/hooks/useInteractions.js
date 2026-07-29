import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * 滚动进度 — 返回 0~100 的页面滚动百分比
 * 用于顶部进度条
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const update = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
        ticking = false
      })
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}

/**
 * 磁吸效果 — 元素在鼠标靠近时向鼠标方向轻微偏移
 * 用法: const ref = useMagnetic(0.3)  // 0.3 = 偏移强度
 * 绑定到 <button ref={ref}>
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 移动端跳过
    if (window.matchMedia('(pointer: coarse)').matches) return

    let rafId = null

    const handleMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
      })
    }

    const handleLeave = () => {
      if (rafId) cancelAnimationFrame(rafId)
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [strength])

  return ref
}

/**
 * 3D 倾斜效果 — 元素跟随鼠标位置做 rotateX/rotateY 倾斜
 * 用法: const { ref, handleMove, handleLeave } = useTilt(8)
 * 绑定到 <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}>
 */
export function useTilt(maxTilt = 8) {
  const ref = useRef(null)

  const handleMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - y) * maxTilt * 2
    const rotateY = (x - 0.5) * maxTilt * 2
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }, [maxTilt])

  const handleLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }, [])

  return { ref, handleMove, handleLeave }
}

/**
 * 数字递增动画 — 从 0 递增到目标值
 * 用法: const { ref, displayValue } = useCountUp(3, 1500)
 * target = 目标数字, duration = 毫秒
 */
export function useCountUp(target, duration = 1500) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let started = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          const startTime = performance.now()

          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setDisplayValue(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, displayValue }
}

/**
 * 视差移动 — 元素随滚动做 translateY
 * speed > 0 向下移动, speed < 0 向上移动
 * 用法: const ref = useParallax(0.15)
 */
export function useParallax(speed = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 移动端跳过
    if (window.matchMedia('(pointer: coarse)').matches) return

    let ticking = false

    const update = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight
        // 只在元素接近视口时才更新
        if (rect.top < windowHeight && rect.bottom > 0) {
          const offset = (rect.top + rect.height / 2 - windowHeight / 2) * speed
          el.style.transform = `translateY(${-offset}px)`
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [speed])

  return ref
}
