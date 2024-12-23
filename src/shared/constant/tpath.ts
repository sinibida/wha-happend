// P
/**
 * Path constantd for translation jsons on `./messages/*.json`
 * 
 * +) DOES NOT ends with `.`. Join with a period when needed.
 * 
 * @example
 * t(`${tpath.viewPage}.BubbleSort`)
 */
const tpath = {
  index: '_index',
  navigation: '_navigation'
} as const

// TODO: use tpath on existing pages

export default tpath;
