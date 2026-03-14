import { Layers, List, GitBranch, Share2, Database, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const DataStructureCard = ({ title, description, icon: Icon, color }: { title: string, description: string, icon: any, color: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
  >
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 text-white`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6"
          >
            <Database size={16} />
            Computer Science Basics
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Understanding Data Structures
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Data structures are specialized formats for organizing, processing, retrieving, and storing data. 
            They are the building blocks of efficient algorithms.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        {/* Linear Data Structures */}
        <section id="linear">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Linear Data Structures</h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          <p className="text-slate-600 mb-8 max-w-3xl">
            In linear data structures, data elements are arranged sequentially or linearly, 
            where each element is attached to its previous and next adjacent elements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataStructureCard 
              title="Array"
              description="A collection of items stored at contiguous memory locations. Elements are accessed by index, making it fast for retrieval but slow for insertions/deletions."
              icon={List}
              color="bg-blue-500"
            />
            <DataStructureCard 
              title="Stack"
              description="Follows the Last-In-First-Out (LIFO) principle. Think of a stack of plates: you add to the top and take from the top."
              icon={Layers}
              color="bg-indigo-500"
            />
            <DataStructureCard 
              title="Queue"
              description="Follows the First-In-First-Out (FIFO) principle. Like a line at a store: the first person to join is the first to be served."
              icon={ArrowRight}
              color="bg-emerald-500"
            />
            <DataStructureCard 
              title="Linked List"
              description="A linear collection of data elements called nodes. Each node points to the next, allowing for efficient insertions and deletions anywhere in the list."
              icon={Share2}
              color="bg-violet-500"
            />
          </div>
        </section>

        {/* Non-Linear Data Structures */}
        <section id="non-linear">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Non-Linear Data Structures</h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          <p className="text-slate-600 mb-8 max-w-3xl">
            In non-linear data structures, data elements are not arranged in a sequential order. 
            A single element can be connected to several other elements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataStructureCard 
              title="Tree"
              description="A hierarchical structure with a root value and subtrees of children with a parent node. Used for representing hierarchical data like file systems."
              icon={GitBranch}
              color="bg-amber-500"
            />
            <DataStructureCard 
              title="Graph"
              description="Consists of a finite set of vertices (nodes) and edges that connect them. Used to represent networks like social media or maps."
              icon={Share2}
              color="bg-rose-500"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 Data Structures Explorer. Built for learning.</p>
        </div>
      </footer>
    </div>
  );
}
