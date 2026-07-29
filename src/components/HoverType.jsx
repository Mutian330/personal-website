import { useState, useCallback } from 'react'
import TextType from './TextType'

/**
 * HoverType — 鼠标悬浮时触发打字机动画，离开时消失重置。
 *
 * <HoverType text="Hello World" />
 * <HoverType text={["第一句", "第二句"]} typingSpeed={80} />
 *
 * 所有 TextType 的 props 均透传，额外支持：
 *   placeholder  — 未悬浮时显示的静态占位文本（默认取 text 的第一项）
 *   trigger      — 'hover' | 'always'，控制触发方式
 */
export default function HoverType({
  text,
  placeholder,
  trigger = 'hover',
  typingSpeed = 60,
  pauseDuration = 1500,
  loop = false,
  showCursor = true,
  cursorCharacter = '|',
  cursorBlinkDuration = 0.6,
  className = '',
  ...rest
}) {
  const [hovered, setHovered] = useState(false)
  const [mountKey, setMountKey] = useState(0)

  const handleEnter = useCallback(() => {
    setMountKey(k => k + 1)
    setHovered(true)
  }, [])

  const handleLeave = useCallback(() => {
    setHovered(false)
  }, [])

  const staticText = placeholder ?? (Array.isArray(text) ? text[0] : text)

  if (trigger === 'always') {
    return (
      <TextType
        text={text}
        typingSpeed={typingSpeed}
        pauseDuration={pauseDuration}
        loop={loop}
        showCursor={showCursor}
        cursorCharacter={cursorCharacter}
        cursorBlinkDuration={cursorBlinkDuration}
        className={className}
        {...rest}
      />
    )
  }

  return (
    <span
      className={`hover-type ${hovered ? 'hover-type--active' : ''} ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {hovered ? (
        <TextType
          key={mountKey}
          text={text}
          typingSpeed={typingSpeed}
          pauseDuration={pauseDuration}
          loop={loop}
          showCursor={showCursor}
          cursorCharacter={cursorCharacter}
          cursorBlinkDuration={cursorBlinkDuration}
          {...rest}
        />
      ) : (
        <span className="hover-type__placeholder">{staticText}</span>
      )}
    </span>
  )
}
