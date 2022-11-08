// Este array de objetos contiene la información para montar botones
// de redes sociales con el icono, el texto y el enlace al que lleva.

export const mediaIcons = [
  { icon: 'twitter', text: 'Twitter', href: 'https://twitter.com/tradusquare' },
  { icon: 'youtube', text: 'Youtube', href: 'https://youtube.com/c/tradusquare' },
  { icon: 'twitch', text: 'Twitch', href: 'https://twitch.tv/tradusquare' }
]

// Este array de objetos contiene el texto y el link de varias páginas.
// que colocaremos como links en el footer.

export const footerLinks = [
  { text: 'Política de privacidad', href: '#' },
  { text: 'Contactar', href: '#' },
  { text: '¿Quieres participar en un proyecto?', href: '#' }
]

// Este array de objetos genera un botón en la navbar por cada objeto.
// Indica el icono y el texto del botón y la ruta a la que lleva
export const navbarButtons = [
  { icon: 'controller', text: 'Proyectos', href: '#' },
  { icon: 'people-fill', text: 'Grupos', href: '#' },
  { icon: 'info-circle-fill', text: 'Información', href: '#' },
  { icon: 'moon-stars-fill', text: 'Amala', href: '#' },
  { icon: 'stickies-fill', text: 'Tablón  de misiones', href: '#' },
]

export const mainCarousel = [
  {
    image: 'https://images4.alphacoders.com/641/641485.jpg',
    captionTitle: 'Lanzamiento Corpse Party: Book of Shadows',
    captionSubtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_HackGuLastRecode.jpg',
    captionTitle: 'Se cancela el .hack G.U., chavales.',
    captionSubtitle: 'Siento decirlo por aquí.'
  },
  {
    image: 'images/CorpsePartyBookOfShadows.webp',
    captionTitle: 'Lanzamiento Corpse Party: Book of Shadows. Que nooooo',
    captionSubtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  }
]

export const statusColor = [
  {status: 'finished', color: 'success', icon: '✓'},
  {status: 'in-progress', color: 'primary', icon: '▶'},
  {status: 'canceled', color: 'danger', icon: '✗'},
  {status: 'paused', color: 'warning', icon: '⏸'}
]