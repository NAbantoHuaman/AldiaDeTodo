"use client";

import { Share2, Check } from 'lucide-react';
import { useState } from 'react';

export default function ArticleShareButton({ url, title, text }) {
  const [copied, setCopied] = useState(false);

  const handleShare = (e) => {
    e.preventDefault(); 
    e.stopPropagation();

    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: title,
        text: text || title,
        url: url,
      }).catch((error) => console.log('Error compartiendo', error));
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-100 rounded-full transition ml-auto"
      aria-label="Compartir artículo"
      title="Compartir"
    >
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
    </button>
  );
}
