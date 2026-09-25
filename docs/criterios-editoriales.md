# Conociendo el Islam · Criterios editoriales

El proyecto presenta el Islam desde fundamentos ampliamente compartidos, para personas musulmanas y personas que desean conocerlo. Mantener una voz cálida, contemplativa, comprensible y respetuosa de la diversidad interna.

1. Priorizar el Corán y enlazar el pasaje completo. Identificar las paráfrasis como tales y distinguir traducción, comentario y aplicación editorial.
2. Al usar hadices, verificar colección, referencia, procedencia, valoración y alcance dentro de la tradición correspondiente.
3. Diferenciar enseñanza religiosa, interpretación, contexto histórico, evidencia científica y reflexión contemplativa.
4. Tratar la ciencia como una vía de comprensión humana con alcance propio. Las afirmaciones teológicas corresponden al plano religioso.
5. Verificar fuentes fiables en asuntos de psicología, neurociencia, medicina, nutrición, sueño y salud; expresar el grado y alcance de la evidencia.
6. Atribuir beneficios clínicos a una práctica únicamente cuando existan estudios pertinentes que los sostengan.
7. Explicar los términos árabes al aparecer por primera vez; favorecer curiosidad, conocimiento, contemplación y vida cotidiana.
8. Identificar diferencias relevantes de escuela o tradición con respeto y fuentes apropiadas. Cada interpretación debe conservar su atribución.
9. Señalar las variaciones de calendario lunar, contexto y práctica cuando correspondan.
10. Preservar identidad visual y navegación. Revisar repositorio, fuentes, responsividad, accesibilidad, enlaces e interacciones antes de entregar cambios.

Áreas de desarrollo: Fundamentos; Espiritualidad; Historia y cultura; Psicología y vida humana; Ciencia responsable; Vida cotidiana; Rutas para conocer el Islam.

## Primera experiencia: 20 hábitos

- Ruta: `rutas/20-habitos-islamicos.html`.
- Cinco hábitos por dimensión: cuerpo, mente, relaciones y espiritualidad.
- Fuentes religiosas: veinte pasajes del Corán, enlazados junto a cada paráfrasis; un ejemplo de jurisprudencia chií duodecimana atribuido a Al-Sistani (ablución, regla 235).
- Esta entrega utiliza fuentes coránicas para sus fundamentos y evita depender de una colección particular de hadices.
- Fuentes sanitarias: NHS (alimentación), NHLBI (sueño), CDC (manos), OMS (manejo del estrés), NCCIH (alcance de la investigación sobre meditación). Consultadas el 25-09-2026.
- Los apartados de mirada humana se identifican como reflexión o propuesta; las prácticas concretas son aplicaciones editoriales, sin presentarlas como mandatos textuales.
- Las referencias sanitarias son orientación institucional, distinta de un ensayo de eficacia de los ejercicios de esta página.
- La experiencia funciona con HTML nativo. JavaScript añade filtros y selección aleatoria entre los 20 hábitos, evitando la repetición inmediata. Sin registro, almacenamiento de respuestas o integración con Apps Script.

## Revisión del repositorio de partida

Base: `0df04e0dfc5f1d4d5c26f0e2cecd4100d7c7c1d6`.
HTML estático, CSS y JavaScript; alojamiento indicado por README: Cloudflare Pages. Paleta arena/salvia; Fraunces y Montserrat.

Cambios: nueva página y sus dos recursos; entrada desde inicio y tarjeta en Vida cotidiana. Las funciones de registro y acceso quedan fuera del alcance de esta entrega.

La portada ya contiene enlaces a varias rutas todavía ausentes en el repositorio (por ejemplo `rutas/islam-desde-cero.html`). Conviene tratarlos en una tarea posterior de navegación. La nueva experiencia tiene enlaces de entrada y regreso hacia archivos existentes.

Publicación: revisar y aprobar los cambios antes de integrar en main; la configuración externa de Cloudflare puede desplegar automáticamente esa rama. El acceso directo al dominio mediante la herramienta de consulta no estuvo disponible durante la revisión; la implementación se verifica sobre una copia del repositorio, sin afirmar equivalencia comprobada con el despliegue actual.

## Verificación de esta entrega

Pasaron: sintaxis JavaScript; estructura HTML; IDs únicos; existencia de todos los recursos y enlaces locales de la nueva página y de Vida cotidiana; 20 hábitos distribuidos en cuatro grupos de cinco.

Prueba DOM con jsdom: filtros y estados aria-pressed; 200 selecciones con cobertura de los 20 hábitos y sin repetición consecutiva; enlace al hábito seleccionado; apertura de detalle mediante fragmento y gestión del foco.

Pendiente: inspección visual y navegación real en navegador a 390 y 1440 px. Playwright está disponible como biblioteca, pero el ejecutable del navegador no está instalado y las descargas devolvieron archivos inválidos. La comprobación DOM no sustituye esta revisión. El contenido y los desplegables usan HTML nativo; filtros y sorteo se muestran al inicializar JavaScript.
