"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DemoModal } from "@/components/demo-modal"
import { demoTypes, type DemoType } from "@/lib/demo-types"
import Image from "next/image"

export function DemosContent() {
  const [selectedDemo, setSelectedDemo] = useState<DemoType | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoTypes.map((demo) => (
          <Card
            key={demo.id}
            className="bg-gray-800/50 border-gray-800 overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105"
            onClick={() => {
              if (demo.id === "realestate") {
                window.location.href = "/demos/real-estate"
              } else {
                setSelectedDemo(demo)
              }
            }}
          >
            <div className="relative h-48">
              <Image src={demo.image || "/placeholder.svg"} alt={demo.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
              <p className="text-gray-400">{demo.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedDemo && <DemoModal demo={selectedDemo} isOpen={true} onClose={() => setSelectedDemo(null)} />}
    </>
  )
}

