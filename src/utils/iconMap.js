import * as Icons from 'lucide-react'

/**
 * Resolves a lucide-react icon by string name (as stored in data files).
 * Falls back to a generic Sparkles icon if the name is not found.
 */
export function getIcon(name) {
  return Icons[name] || Icons.Sparkles
}
