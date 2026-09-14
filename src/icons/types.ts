export type CrmlIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export type CrmlIconVariant =
  | 'current'
  | 'lime'
  | 'pink'
  | 'cyan'
  | 'yellow'
  | 'obsidian'
  | 'white'
  | 'ghost';

export type CrmlIconName =
  // 1. Actions & System Controls (20)
  | 'bolt'
  | 'terminal'
  | 'coffee'
  | 'search'
  | 'settings'
  | 'sliders'
  | 'filter'
  | 'cross'
  | 'check'
  | 'plus'
  | 'minus'
  | 'trash'
  | 'edit'
  | 'copy'
  | 'share'
  | 'download'
  | 'upload'
  | 'refresh'
  | 'power'
  | 'maximize'

  // 2. Navigation & Direction (14)
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-up-right'
  | 'chevron-right'
  | 'chevron-left'
  | 'chevron-up'
  | 'chevron-down'
  | 'menu'
  | 'grid'
  | 'compass'
  | 'anchor'
  | 'map-pin'

  // 3. Hardware, Mecha & Cyber Gadgets (16)
  | 'disk'
  | 'radar'
  | 'cpu'
  | 'chip'
  | 'database'
  | 'server'
  | 'cloud'
  | 'monitor'
  | 'smartphone'
  | 'gamepad'
  | 'cassette'
  | 'battery-charging'
  | 'battery-full'
  | 'wifi'
  | 'bluetooth'
  | 'speaker'

  // 4. Security, Privacy & Status (12)
  | 'lock'
  | 'unlock'
  | 'key'
  | 'shield'
  | 'shield-alert'
  | 'eye'
  | 'eye-closed'
  | 'face-id'
  | 'fingerprint'
  | 'alert-circle'
  | 'alert-triangle'
  | 'info'

  // 5. Y2K Streetwear & Expressive Badges (14)
  | 'star'
  | 'sparkle'
  | 'sparkles'
  | 'heart'
  | 'flame'
  | 'skull'
  | 'target'
  | 'zap'
  | 'crown'
  | 'gem'
  | 'badge-check'
  | 'tag'
  | 'sticker'
  | 'flag'

  // 6. Time, Weather & Space (10)
  | 'sun'
  | 'moon'
  | 'cloud-rain'
  | 'calendar'
  | 'clock'
  | 'timer'
  | 'hourglass'
  | 'rocket'
  | 'planet'
  | 'comet'

  // 7. Communication, Media & Community (14)
  | 'chat'
  | 'message-square'
  | 'mail'
  | 'bell'
  | 'user'
  | 'users'
  | 'user-plus'
  | 'camera'
  | 'video'
  | 'music'
  | 'mic'
  | 'thumbs-up'
  | 'thumbs-down'
  | 'bookmark'

  // 8. Dev, Code & Data Analytics (12)
  | 'code'
  | 'git-branch'
  | 'git-commit'
  | 'git-pull-request'
  | 'terminal-box'
  | 'chart-bar'
  | 'chart-line'
  | 'pie-chart'
  | 'layers'
  | 'box'
  | 'folder'
  | 'file';

export interface CrmlIconElement {
  tag?: 'path' | 'circle' | 'ellipse' | 'rect' | 'line' | 'polyline' | 'polygon';
  d?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
  strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
  cx?: number;
  cy?: number;
  r?: number;
  rx?: number;
  ry?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  points?: string;
}

export interface CrmlIconDef {
  name: CrmlIconName;
  category: string;
  viewBox?: string;
  elements: CrmlIconElement[];
}
