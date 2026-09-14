<script lang="ts">
  export let variant: 'lime' | 'pink' | 'cyan' | 'yellow' = 'lime';
</script>

<span class="crml-badge variant-{variant}">
  <slot />
</span>

<style>
  @import '../tokens/index.css';
  .crml-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.2rem 0.5rem;
    font-family: var(--crml-font-mono, monospace);
    font-size: 0.75rem;
    font-weight: 800;
    border: 2px solid var(--crt-obsidian, #0D0D0D);
    border-radius: var(--crml-radius-sm, 4px);
    box-shadow: 2px 2px 0px var(--crt-obsidian, #0D0D0D);
  }
  .variant-lime { background-color: var(--crt-electric-lime, #CCFF00); color: #0D0D0D; }
  .variant-pink { background-color: var(--crt-hot-pink, #FF007F); color: #FFFFFF; }
  .variant-cyan { background-color: var(--crt-cyber-cyan, #00F0FF); color: #0D0D0D; }
  .variant-yellow { background-color: var(--crt-sunburst-yellow, #FFD600); color: #0D0D0D; }
</style>
