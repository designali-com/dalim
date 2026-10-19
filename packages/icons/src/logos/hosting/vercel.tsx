'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'
import { LogosHandle, LogosProps, LogoMetadata } from '../../types'

export const VercelMetadata: LogoMetadata = {
  name: 'Vercel',
  category: 'Hosting',
  tags: ['technology', 'design'],
  description: 'An icon representing the Vercel platform logo',
  author: 'Ali Imam',
  created: '2025-06-10',
  variants: ['icon', 'wordmark'],
}

export const Vercel = forwardRef<LogosHandle, LogosProps>(
  (
    {
      className,
      size = '24',
      color = 'currentColor',
      variant = 'icon',
      iconStyle = 'default',
      ...props
    },
    ref
  ) => {
    const renderPaths = () => {
      switch (variant) {
        case 'icon':
          return <path d="m128 0 128 221.705H0z" />
        default:
          return 'icon'
      }
    }

    return (
      <motion.div 
        role="img"
        aria-label="Vercel"
        className={cn('', className)}
        initial="normal"
        style={{ width: size, height: size, color }}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 256 222"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('', className)}
        >
          {renderPaths()}
        </svg>
      </motion.div>
    )
  }
)

Vercel.displayName = 'Vercel'
 