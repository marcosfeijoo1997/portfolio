import React from 'react'
import { useThemeStore } from '@/app/store/LightStore'

export const TextCustomColor = () => {
    const {theme}=useThemeStore()
    return theme=="dark"?"text-white":"text-black"
 
}
export const BgCustomColor = () => {
    const {theme}=useThemeStore()
    return theme=="dark"?"bg-dark":"bg-gray-300"
 
}



export const Container = () => {
    const {theme}=useThemeStore()
    return theme=="dark"?"contenedor":"bg-gray-300"
 
}
export const CardContainer = () => {
    const {theme}=useThemeStore()
    return theme=="dark"?"bg-gray-600":"bg-gray-300"
 
}
