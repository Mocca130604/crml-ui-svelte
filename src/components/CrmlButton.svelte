<script lang="ts">
  export let variant: 'lime' | 'pink' | 'cyan' | 'yellow' | 'outline' = 'lime';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled: boolean = false;
</script>

<button
  class="crml-btn variant-{variant} size-{size}"
  {disabled}
  on:click
>
  <slot />
</button>

<style>
  @import '../tokens/index.css';

  .crml-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: var(--crml-font-heading, 'Space Grotesk', sans-serif);
    font-weight: 800;
    cursor: pointer;
    border: 3px solid var(--crt-obsidian, #0D0D0D);
    border-radius: var(--crml-radius-md, 8px);
    box-shadow: 4px 4px 0px var(--crt-obsidian, #0D0D0D);
    transition: all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
    text-transform: uppercase;
  }
  .crml-btn:hover:not(:disabled) {
    transform: translate(-1px, -1px);
    box-shadow: 5px 5px 0px var(--crt-obsidian, #0D0D0D);
  }
  .crml-btn:active:not(:disabled) {
    transform: translate(3px, 3px);
    box-shadow: 1px 1px 0px var(--crt-obsidian, #0D0D0D);
  }
  .variant-lime { background-color: var(--crt-electric-lime, #CCFF00); color: #0D0D0D; }
  .variant-pink { background-color: var(--crt-hot-pink, #FF007F); color: #FFFFFF; }
  .variant-cyan { background-color: var(--crt-cyber-cyan, #00F0FF); color: #0D0D0D; }
  .variant-yellow { background-color: var(--crt-sunburst-yellow, #FFD600); color: #0D0D0D; }
  .size-sm { padding: 0.35rem 0.75rem; font-size: 0.75rem; }
  .size-md { padding: 0.6rem 1.25rem; font-size: 0.875rem; }
  .size-lg { padding: 0.85rem 1.75rem; font-size: 1rem; }
</style>
