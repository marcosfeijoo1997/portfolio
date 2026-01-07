"use client"
import React, { useEffect, useState } from "react"
import { TextCustomColor, Container } from "@/components/StylesPredeterm"

const Index = () => {
  const textWhite = TextCustomColor()
  const Contenedor = Container()

  const text1 = "Hola, soy "
  const text2 = "Marcos Feijoo"
  const text3 = "Front-end developer"

  const [displayedText1, setDisplayedText1] = useState("")
  const [displayedText2, setDisplayedText2] = useState("")
  const [displayedText3, setDisplayedText3] = useState("")

  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<1 | 2 | 3>(1)

  useEffect(() => {
    const texts = [text1, text2, text3]
    const setters = [setDisplayedText1, setDisplayedText2, setDisplayedText3]

    const currentText = texts[phase - 1]
    const setCurrent = setters[phase - 1]

    if (index < currentText.length) {
      const timeout = setTimeout(() => {
        setCurrent(prev => prev + currentText[index])
        setIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }

    if (index === currentText.length && phase < 3) {
      setTimeout(() => {
        setPhase(prev => (prev + 1) as 2 | 3)
        setIndex(0)
      }, 100)
    }
  }, [index, phase])

  return (
    <div className={`flex h-screen ${textWhite}`}>
      <div className={Contenedor}></div>

      <div className="text-6xl relative mx-auto my-auto xl:text-8xl" id="inicio">
        <section className="flex flex-col font-medium mx-auto">

          <h1 className="w-full pr-20">
            {displayedText1}<span className="text-blue-600">{displayedText2}</span>
         
          </h1>

          <h1 className="flex justify-end">
            {displayedText3}
   
          
          </h1>

        </section>
      </div>
    </div>
  )
}

export default Index
