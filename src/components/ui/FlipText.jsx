'use client'

import { Fragment, useEffect, useState } from 'react'

/**
 * Splits `text` into words, then letters, each wrapped in its own <span>
 * with a staggered `--letter-delay` custom property, and adds `.letters-in`
 * one animation frame after mount to trigger the CSS flip-in defined in
 * globals.css (rotateX(90deg) → 0, staggered by that delay).
 */
function FlipText({ text = '', as: Tag = 'span', className = '', letterDelayStep = 0.025, startDelay = 0 }) {
  const [lettersIn, setLettersIn] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setLettersIn(true))
    return () => cancelAnimationFrame(id)
  }, [])

  if (!text) return null

  const words = text.split(' ')
  let letterIndex = 0

  return (
    <Tag aria-label={text} className={`js-flip-text ${lettersIn ? 'letters-in' : ''} ${className}`}>
      {words.map((word, wordIdx) => (
        <Fragment key={wordIdx}>
          <span className="split-word" aria-hidden="true">
            {word.split('').map((char, charIdx) => {
              const delay = startDelay + letterIndex * letterDelayStep
              letterIndex += 1
              return (
                <span key={charIdx} className="split-letter" style={{ '--letter-delay': `${delay}s` }}>
                  {char}
                </span>
              )
            })}
          </span>
          {wordIdx < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  )
}

export default FlipText
