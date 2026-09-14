<script lang="ts">
  export let variant: 'lime' | 'pink' | 'cyan' | 'yellow' | 'primary' | 'secondary' | 'outline' = 'lime';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled: boolean = false;
  export let label: string = '';
</script>

<div
  class="crml-filterdrawer variant-{variant} size-{size}"
  class:disabled
  on:click
>
  {#if label}
    <span class="crml-label">{label}</span>
  {/if}
  <slot />
</div>

<style>
  @import '../../tokens/index.css';
  div {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
  }
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
</style>
