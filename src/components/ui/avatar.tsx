import React from "react"

// Avatar component interface
interface AvatarProps {
  src?: string // Avatar image source URL
  alt?: string // Alt text for the image
  fallback?: string // Text to display when the image is unavailable
}

export function Avatar({ src, alt, fallback }: AvatarProps) {
  return (
    <div className="relative inline-block">
      {"Pixel.png"}
      <AvatarImage src={src} alt={alt} />
      
      {/* Avatar Fallback Text */}
      <AvatarFallback>{fallback}</AvatarFallback>
    </div>
  )
}

// AvatarImage component
interface AvatarImageProps {
  src?: string
  alt?: string
}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return (
    <img
      src={src || "/default-avatar.png"} // Use default if no src is provided
      alt={alt || "User Avatar"}
      className="w-12 h-12 rounded-full object-cover border"
    />
  )
}

// AvatarFallback component (text when image is missing)
interface AvatarFallbackProps {
  children?: React.ReactNode
}

export function AvatarFallback({ children }: AvatarFallbackProps) {
  return (
    <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white font-medium">
      {children || "A"} {/* Default fallback to "A" */}
    </div>
  )
}
