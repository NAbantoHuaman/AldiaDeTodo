'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { transformNewsItem } from '../../lib/newsTransformer';

export default function RedaccionPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDraft, setSelectedDraft] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/news/fetch?category=general');
      const data = await res.json();
      if (data.articles) {
        setNews(data.articles);
      }
    } catch (error) {
      console.error("Error loading news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateDraft = (item) => {
    const draft = transformNewsItem(item);
    // Add a random ID for the simulation
    draft.metadata.id = Math.floor(Math.random() * 1000) + 20; 
    setSelectedDraft(draft);
    
    // Scroll to draft area
    setTimeout(() => {
        document.getElementById('draft-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Sala de Redacción</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">GNews Integration Active</span>
        </div>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Selecciona noticias del cable internacional (GNews) para transformarlas automáticamente en artículos originales con nuestra herramienta de "Edición Asistida".
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Column 1: Incoming Feed */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Cables Entrantes
            </h2>
            
            {loading ? (
                <div className="space-y-4">
                    {[1,2,3].map(i => (
                        <div key={i} className="h-32 bg-gray-200 rounded-xl animate-pulse"></div>
                    ))}
                </div>
            ) : (
                <div className="space-y-6">
                    {news.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-400 uppercase font-bold">{item.source.name}</span>
                                <button 
                                    onClick={() => handleGenerateDraft(item)}
                                    className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Generar Borrador →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
          </div>

          {/* Column 2: Editor/Result */}
          <div id="draft-section">
            <h2 className="text-2xl font-bold mb-6 text-indigo-700">Editor Inteligente</h2>
            
            {selectedDraft ? (
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-50 sticky top-8">
                    <div className="mb-6 pb-6 border-b border-gray-100">
                        <h3 className="text-sm font-bold text-indigo-500 uppercase mb-2">Metadata Generada</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><span className="text-gray-400">ID:</span> {selectedDraft.metadata.id}</div>
                            <div><span className="text-gray-400">Slug:</span> {selectedDraft.metadata.slug}</div>
                            <div className="col-span-2"><span className="text-gray-400">Título:</span> {selectedDraft.metadata.title}</div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-indigo-500 uppercase mb-2">Contenido "Original" (Simulado)</h3>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm font-mono text-gray-600 h-64 overflow-y-auto">
                            {selectedDraft.content}
                        </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                        <p className="text-sm text-amber-700">
                            <strong>Nota de Acción:</strong> Copia el objeto de metadata al array <code>ARTICLES</code> y el contenido HTML al objeto <code>fullContent</code> en <code>lib/articles.js</code>.
                        </p>
                    </div>

                    <button 
                         onClick={() => {navigator.clipboard.writeText(JSON.stringify(selectedDraft, null, 2)); alert('Copiado al portapapeles!');}}
                         className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                    >
                        Copiar JSON Completo
                    </button>
                </div>
            ) : (
                <div className="h-96 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-400 flex-col">
                    <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    <p>Selecciona una noticia para comenzar a editar</p>
                </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
