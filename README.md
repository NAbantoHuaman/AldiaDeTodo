# Al Día de Todo 🌍

**Al Día de Todo** es una plataforma de noticias y análisis global de nueva generación. Combina artículos de investigación profunda con un motor de noticias automatizado que transforma cables de última hora en piezas de análisis editorial estructurado, ofreciendo una experiencia de lectura premium y coherente.

## 🚀 Características Principales

- **Motor de Noticias Automatizado:** Integración "Server-Side" con la API de **NewsData.io** para capturar tendencias en Tecnología, Ciencia y Entretenimiento en tiempo real.
- **Transformación Editorial Inteligente (`newsTransformer`):** Un sistema exclusivo que reescribe y enriquece noticias breves, dotándolas de una estructura editorial robusta:
  - 📌 **Puntos Clave:** Resumen ejecutivo inmediato.
  - 🔍 **La Lupa Editorial:** Análisis profundo del contexto.
  - 🔮 **Repercusiones:** Proyección futura del evento.
  - 🗣️ **Veredicto:** Citas simuladas de expertos.
- **Contenido Híbrido:** Fusión transparente de artículos estáticos (evergreen) con noticias dinámicas en una sola grilla unificada.
- **Diseño Premium & Responsive:** Interfaz limpia construida con Tailwind CSS, enfocada en la legibilidad y la retención del usuario.
- **Navegación Fluida:** Sistema de scroll suave y enrutamiento dinámico para una experiencia de usuario superior.

## 🛠️ Stack Tecnológico

- **Core:** [Next.js 14](https://nextjs.org/) (App Router & Server Components)
- **Lenguaje:** JavaScript / TypeScript
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Datos:** [NewsData.io API](https://newsdata.io/)
- **Infraestructura:** [Vercel](https://vercel.com/)

## 🏁 Empezando

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### Prerrequisitos

- Node.js 18.17 o superior
- NPM (Node Package Manager)

### Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/NAbantoHuaman/AldiaDeTodo.git
    cd AldiaDeTodo
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Configura las Variables de Entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto para conectar la API de noticias (necesario para ver contenido dinámico):

    ```env
    GNEWS_API_KEY=tu_api_key_de_newsdata_io
    ```

    _(Usa tu clave `pub_...` proporcionada por NewsData.io)_

4.  **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📂 Estructura del Proyecto

- `/app`: Contiene todas las rutas y páginas (App Router).
  - `page.tsx`: Homepage con lógica de "fetching" y mezcla de noticias.
  - `/articulos/[slug]`: Página dinámica que renderiza tanto artículos estáticos como noticias de la API.
- `/lib`: Lógica de negocio central.
  - `newsTransformer.js`: El "cerebro" que formatea y enriquece las noticias crudas.
  - `articles.js`: Repositorio de contenido estático y templates.
- `/components`: Elementos de UI (Navbar, Cards, Footer, AdsBanner).

## 🚀 Despliegue en Vercel

La forma más fácil de desplegar es usando la [Plataforma Vercel](https://vercel.com/new).

1.  Haz Push de tu código a GitHub.
2.  Importa el proyecto en Vercel.
3.  **IMPORTANTE:** En la configuración del proyecto en Vercel ("Environment Variables"), añade:
    - **Key:** `GNEWS_API_KEY`
    - **Value:** `tu_api_key_real`
4.  ¡Despliega! Tu aplicación se reconstruirá automáticamente cada vez que hagas un push a `main`.

## 📄 Licencia

Este proyecto es propiedad de **Al Día de Todo**.
Desarrollado con ❤️ para informar al mundo.
