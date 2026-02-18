
export const metadata = {
  title: "Artículos de Crecimiento Personal | AldiaDeTodo",
  description: "Explora nuestra colección de artículos sobre desarrollo personal, finanzas, productividad y bienestar.",
  alternates: {
    canonical: '/articulos',
  },
  openGraph: {
    title: "Artículos de Crecimiento Personal | AldiaDeTodo",
    description: "Consejos prácticos para mejorar tu vida diaria.",
    url: "https://aldiadetodo.com/articulos",
    type: "website",
  }
};

export default function ArticlesLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
