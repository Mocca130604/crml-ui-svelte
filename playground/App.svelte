<script lang="ts">
  import CrmlButton from '../src/components/CrmlButton.svelte';
  import CrmlBadge from '../src/components/CrmlBadge.svelte';
  let energy = 0;
</script>

<main style="max-width: 1000px; margin: 0 auto; padding: 2rem 1.5rem; font-family: 'Space Grotesk', sans-serif;">
  <header style="border-bottom: 3.5px solid #0D0D0D; padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center;">
    <div>
      <CrmlBadge variant="pink">SVELTE 5 COMPATIBLE</CrmlBadge>
      <h1 style="font-size: 2.5rem; font-weight: 900; margin: 0.5rem 0 0 0;">
        CRML - UI <span style="background: #CCFF00; padding: 0 0.5rem; border: 3px solid #0D0D0D; box-shadow: 4px 4px 0px #0D0D0D;">SVELTE</span>
      </h1>
    </div>
    <CrmlButton variant="lime" on:click={() => energy++}>ENERGY: {energy} ⚡</CrmlButton>
  </header>

  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <CrmlButton variant="lime">LIME ACTION</CrmlButton>
    <CrmlButton variant="pink">HOT PINK</CrmlButton>
    <CrmlButton variant="cyan">CYBER CYAN</CrmlButton>
    <CrmlButton variant="yellow">SUNBURST</CrmlButton>
  </div>
</main>
