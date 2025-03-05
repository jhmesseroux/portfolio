'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/helpers'
import Skeleton from './Skeleton'

interface Props extends React.ImgHTMLAttributes<HTMLDivElement> {
  path: string
  imageClassName?: string
  skeletonClassName?: string
  alt?: string
  imageAndBoxClassName?: string
}

const FadeInImage = ({ className, path, skeletonClassName, imageAndBoxClassName = '', imageClassName, alt, ...rest }: Props) => {
  const [loadingImage, setLoadingImage] = useState(false)

  return (
    <div {...rest} className={cn('aspect-video w-full object-cover relative overflow-hidden', imageAndBoxClassName, className)}>
      {!loadingImage && (
        <Skeleton
          className={cn('aspect-video absolute top-0 left-0 right-0 bottom-0 rounded-none h-full w-full border', skeletonClassName)}
        />
      )}
      <Image
        src={path}
        onLoad={() => setLoadingImage(true)}
        alt={alt ?? 'Image'}
        style={{ width: '100%', height: '100%' }}
        objectFit='cover'
        width={1000}
        height={1}
        className={cn('aspect-video  bg-slate-200 object-cover', imageAndBoxClassName, imageClassName)}
      />
    </div>
  )
}

export default FadeInImage
