import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DocSection from './components/DocSection'
import Simulator from './components/Simulator'
import sections from './data/sections'

export default function App() {
  const [activeTab, setActiveTab] = useState('elementos')
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => setSearch(e.target.value)

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header search={search} onSearchChange={handleSearchChange} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeTab={activeTab}
          onTabChange={handleTabChange}
          search={search}
        />

        <main className="flex-1 bg-black p-8 overflow-y-auto space-y-12">
          {sections.map(section => (
            <DocSection
              key={section.id}
              section={section}
              isActive={activeTab === section.id}
            />
          ))}
        </main>

        <Simulator />
      </div>
    </div>
  )
}
