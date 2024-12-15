<script lang="ts">
  import Fuse from 'fuse.js';
  import { Search, Globe2, ChartCandlestick, Coins } from 'lucide-svelte';
  import XIcon from '$lib/components/icons/x.svelte';

  import DslLogo from '$lib/assets/transparent_DSL_Legacy.png';
  import { Badge } from '$lib/components/ui/badge';
  import { Card } from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { AIRDROPS, SUIPLAY_URL } from '$lib/shared/shared.constant';
  import { SUIPLAY_IMAGE_HREF } from '$lib/shared/suiplay-image.constant';

  let searchQuery = $state('');

  const fuseOptions = {
    keys: ['name', 'ticker', 'contractAddress'],
    threshold: 0.4,
    ignoreLocation: true
  };
  const fuse = new Fuse(AIRDROPS, fuseOptions);

  let filteredAirdrops = $derived.by(() => {
    let results = [...AIRDROPS];

    if (searchQuery.trim()) {
      results = fuse.search(searchQuery).map((result) => result.item);
    }

    return results;
  });

  // Add this function to handle keyboard shortcuts
  function handleKeydown(event: KeyboardEvent) {
    // Only trigger if not already focusing an input
    if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') {
      event.preventDefault();
      const searchInput = document.querySelector('input[type="search"]');
      if (searchInput instanceof HTMLInputElement) {
        searchInput.focus();
      }
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
  <!-- Basic Meta Tags -->
  <title>SuiPlay0X1 Airdrop Tracker</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Track airdrops for the SuiPlay0X1" />

  <!-- Search Engine Meta Tags -->
  <meta name="robots" content="index,follow" />
  <meta
    name="keywords"
    content="SuiPlay, Sui, Sui airdrop, 0X1, web3, gaming, SuiPlay0X1"
  />

  <!-- Open Graph Meta Tags (for social sharing) -->
  <meta property="og:title" content="SuiPlay0X1 Airdrop Tracker" />
  <meta property="og:description" content="Track airdrops for the SuiPlay0X1" />
  <meta property="og:image" content={'https://x.com/SuiPlay/header_photo'} />
  <meta property="og:url" content="https://suiplayrewards.xyz" />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="SuiPlay0X1 Airdrop Tracker" />
  <meta name="twitter:description" content="Track airdrops for the SuiPlay0X1" />
  <meta name="twitter:image" content={'https://x.com/SuiPlay/header_photo'} />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.png" />
</svelte:head>

<header
  class="relative overflow-hidden bg-gradient-to-br from-[#0A0A1B] to-[#1A1A3A] pb-16 text-white"
>
  <!-- Background effect -->
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)]"
  ></div>

  <div class="container relative mx-auto px-4 py-20">
    <!-- Title section -->
    <div class="mb-12">
      <h1
        class="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent"
      >
        SuiPlay0X1 Airdrop Tracker*
      </h1>
      <p class="mt-2 text-sm text-blue-300/60">
        *List is not definitive and subject to changes
      </p>
    </div>

    <!-- Animated SuiPlay image -->
    <div
      class="absolute top-1/4 mx-auto mt-8 opacity-30 md:right-0 md:top-1/2 md:-translate-y-1/2 lg:opacity-80"
    >
      <a href={SUIPLAY_URL} target="_blank" rel="noopener noreferrer">
        <img src={SUIPLAY_IMAGE_HREF} alt="SuiPlay" class="w-[600px] animate-tilt" />
      </a>
    </div>
  </div>
</header>

<main class="relative bg-[#020817]">
  <!-- Update the background effect to be relative -->
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_50%)]"
  ></div>

  <div class="container relative mx-auto px-4 py-8">
    <!-- Filters -->
    <div class="mb-8 flex gap-4">
      <div class="relative w-[250px]">
        <Search
          class="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
        />
        <Input
          type="search"
          placeholder="Search projects..."
          class="w-full border-white/10 bg-white/5 pl-8 pr-16 text-white placeholder:text-white/50"
          bind:value={searchQuery}
        />
        <kbd
          class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 select-none rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/50"
        >
          /
        </kbd>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <!-- Airdrop -->
      {#each filteredAirdrops as airdrop}
        {@const isOfficial = airdrop.isOfficial}
        <!-- {@const isCommunity = airdrop.isCommunity} -->
        {@const badgeVariant = isOfficial ? 'default' : 'outline'}
        {@const badgeText = isOfficial ? 'Official' : 'Community'}

        <Card
          class="overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-lg shadow-blue-500/5 backdrop-blur-sm transition-all hover:border-blue-500/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15"
        >
          <div class="space-y-6 p-8">
            <div class="flex items-center gap-6">
              <!-- Project Icon -->
              <div
                class="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-white/15 to-white/5 p-2 ring-1 ring-white/20"
              >
                <img
                  src={airdrop.icon || '/default-icon.png'}
                  alt={`${airdrop.name} icon`}
                  class="h-full w-full rounded-full object-contain"
                />
              </div>

              <div class="flex-1">
                <!-- Project Info -->
                <div class="group">
                  <div class="flex items-center justify-between">
                    <h3
                      class="bg-gradient-to-r from-white to-white/80 bg-clip-text text-2xl font-bold text-transparent"
                    >
                      {airdrop.name}
                    </h3>
                    <a
                      href={airdrop.confirmationSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="group"
                    >
                      <Badge
                        variant={badgeVariant}
                        class="transition-colors hover:text-blue-400"
                      >
                        {badgeText}
                      </Badge>
                    </a>
                  </div>

                  <!-- Icons -->
                  <div class="mt-2 flex items-center gap-3 rounded-md p-1">
                    <a
                      href={airdrop.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-300/80 hover:text-blue-400"
                      title="Visit website"
                      aria-label={`Visit ${airdrop.name}'s website`}
                    >
                      <Globe2 class="h-5 w-5" />
                    </a>

                    {#if airdrop.x}
                      <a
                        href={airdrop.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-300/80 hover:text-blue-400"
                        title="Follow on X (Twitter)"
                        aria-label={`Follow ${airdrop.name} on X (Twitter)`}
                      >
                        <XIcon class="h-5 w-5" />
                      </a>
                    {/if}

                    {#if airdrop.birdeyeLink}
                      <a
                        href={airdrop.birdeyeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-300/80 hover:text-blue-400"
                        title="Read documentation"
                        aria-label={`Read ${airdrop.name}'s documentation`}
                      >
                        <ChartCandlestick class="h-5 w-5" />
                      </a>
                    {/if}

                    <!-- {#if airdrop.estimatedAmount}
                      <a
                        href="#"
                        class="text-blue-300/80 hover:text-blue-400"
                        title={`Estimated airdrop: ${airdrop.estimatedAmount || 'TBA'}`}
                        aria-label={`Estimated airdrop amount for ${airdrop.name}`}
                      >
                        <Coins class="h-5 w-5" />
                      </a>
                    {/if} -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</main>

<!-- Footer -->
<footer class="mt-24 bg-[#FF0000] py-1.5">
  <div class="container mx-auto px-4 text-center">
    <p class="flex items-center justify-center gap-1.5 text-sm font-medium text-white">
      Brought to you by
      <a
        href="https://x.com/LegacyDSL"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center font-bold transition-opacity hover:opacity-80"
        aria-label="Visit Legacy on X (Twitter)"
      >
        <img src={DslLogo} alt="DSL Logo" class="h-4 w-4" />
      </a>
    </p>
  </div>
</footer>

<style>
  @keyframes tilt {
    0%,
    100% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(5deg);
    }
  }
</style>
