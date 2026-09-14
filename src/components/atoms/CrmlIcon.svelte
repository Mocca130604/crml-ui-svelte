<script lang="ts">
  import type { CrmlIconName, CrmlIconSize, CrmlIconVariant } from '../../icons/types'
  import { CRML_ICONS } from '../../icons/defs'

  export let name: CrmlIconName = 'bolt'
  export let size: CrmlIconSize = 'md'
  export let variant: CrmlIconVariant = 'current'
  export let strokeWidth: number | string = 2.5
  export let spin: boolean = false
  export let title: string = ''

  $: iconDef = CRML_ICONS[name] || CRML_ICONS['bolt']

  $: sizePixels = (() => {
    if (typeof size === 'number') return `${size}px`
    switch (size) {
      case 'xs': return '16px'
      case 'sm': return '20px'
      case 'md': return '24px'
      case 'lg': return '32px'
      case 'xl': return '40px'
      default: return '24px'
    }
  })()

  $: iconColor = (() => {
    switch (variant) {
      case 'lime': return 'var(--crt-electric-lime, #CCFF00)'
      case 'pink': return 'var(--crt-hot-pink, #FF007F)'
      case 'cyan': return 'var(--crt-cyber-cyan, #00F0FF)'
      case 'yellow': return 'var(--crt-sunburst-yellow, #FFD600)'
      case 'obsidian': return 'var(--crt-obsidian, #0D0D0D)'
      case 'white': return 'var(--crt-pure-white, #FFFFFF)'
      case 'ghost': return 'rgba(13, 13, 13, 0.4)'
      default: return 'currentColor'
    }
  })()
</script>

<svg
  class="crml-icon crml-icon--{variant} {spin ? 'crml-icon--spin' : ''} {$$props.class || ''}"
  style="width: {sizePixels}; height: {sizePixels}; color: {iconColor}; {$$props.style || ''}"
  viewBox={iconDef.viewBox || '0 0 24 24'}
  fill="none"
  stroke="currentColor"
  stroke-width={strokeWidth}
  stroke-linecap="square"
  stroke-linejoin="miter"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label={title || name}
  on:click
>
  {#if title}
    <title>{title}</title>
  {/if}
  {#each iconDef.elements as el}
    {#if !el.tag || el.tag === 'path'}
      <path
        d={el.d}
        fill={el.fill || 'none'}
        stroke={el.stroke || 'currentColor'}
        stroke-width={el.strokeWidth || strokeWidth}
        stroke-linecap={el.strokeLinecap || 'square'}
        stroke-linejoin={el.strokeLinejoin || 'miter'}
      />
    {:else if el.tag === 'circle'}
      <circle
        cx={el.cx}
        cy={el.cy}
        r={el.r}
        fill={el.fill || 'none'}
        stroke={el.stroke || 'currentColor'}
        stroke-width={el.strokeWidth || strokeWidth}
      />
    {:else if el.tag === 'ellipse'}
      <ellipse
        cx={el.cx}
        cy={el.cy}
        rx={el.rx}
        ry={el.ry}
        fill={el.fill || 'none'}
        stroke={el.stroke || 'currentColor'}
        stroke-width={el.strokeWidth || strokeWidth}
      />
    {:else if el.tag === 'rect'}
      <rect
        x={el.x}
        y={el.y}
        width={el.width}
        height={el.height}
        rx={el.rx}
        ry={el.ry}
        fill={el.fill || 'none'}
        stroke={el.stroke || 'currentColor'}
        stroke-width={el.strokeWidth || strokeWidth}
      />
    {:else if el.tag === 'line'}
      <line
        x1={el.x1}
        y1={el.y1}
        x2={el.x2}
        y2={el.y2}
        stroke={el.stroke || 'currentColor'}
        stroke-width={el.strokeWidth || strokeWidth}
        stroke-linecap={el.strokeLinecap || 'square'}
      />
    {:else if el.tag === 'polyline'}
      <polyline
        points={el.points}
        fill={el.fill || 'none'}
        stroke={el.stroke || 'currentColor'}
        stroke-width={el.strokeWidth || strokeWidth}
        stroke-linecap={el.strokeLinecap || 'square'}
        stroke-linejoin={el.strokeLinejoin || 'miter'}
      />
    {:else if el.tag === 'polygon'}
      <polygon
        points={el.points}
        fill={el.fill || 'none'}
        stroke={el.stroke || 'currentColor'}
        stroke-width={el.strokeWidth || strokeWidth}
        stroke-linecap={el.strokeLinecap || 'square'}
        stroke-linejoin={el.strokeLinejoin || 'miter'}
      />
    {/if}
  {/each}
</svg>

<style>
  .crml-icon {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
    user-select: none;
    transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.15s ease;
  }

  :global(.crml-icon--spin) {
    animation: crml-spin 1s linear infinite;
  }

  @keyframes crml-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
