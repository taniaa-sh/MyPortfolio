import AboutSection from '@/components/AboutSection'
import Support from '@/components/Support'
import React from 'react'

function page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] -mt-20">
        <AboutSection />
        <div className='-mt-70'>
            <Support />
        </div>
    </div>
  )
}

export default page