<script lang="ts">
  import Fuse from 'fuse.js';
  import { Search, Globe2, Twitter, MessageCircle, BookOpen } from 'lucide-svelte';

  import DslLogo from '$lib/assets/transparent_DSL_Legacy.png';
  import { Badge } from '$lib/components/ui/badge';
  import { Card } from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { AIRDROPS } from '$lib/shared/shared.constant';
  import { SUIPLAY_IMAGE_HREF } from '$lib/shared/suiplay-image.constant';
  import { caToBirdeyeUrl } from '$lib/shared/shared.tools';

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
      class="absolute top-1/4 mx-auto mt-8 opacity-30 md:right-0 md:top-1/2 md:-translate-y-1/2"
    >
      <img src={SUIPLAY_IMAGE_HREF} alt="SuiPlay" class="w-[600px] animate-tilt" />
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

    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {#each filteredAirdrops as airdrop}
        <Card
          class="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
        >
          <div class="p-6">
            <div class="flex items-center gap-4">
              <!-- Project Icon -->
              <div class="h-12 w-12 flex-shrink-0 rounded-full bg-white/10 p-2">
                <a
                  href={caToBirdeyeUrl(airdrop.contractAddress)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={airdrop.icon || '/default-icon.png'}
                    alt={`${airdrop.name} icon`}
                    class="h-full w-full rounded-full object-contain"
                  />
                </a>
              </div>

              <div class="flex-1">
                <!-- Project Info -->
                <div class="group">
                  <div class="flex items-center justify-between">
                    <h3
                      class="text-xl font-bold text-white transition-colors hover:text-blue-400"
                    >
                      <a
                        href={airdrop.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:text-blue-400"
                      >
                        {airdrop.name}
                      </a>
                    </h3>
                    <a href={airdrop.source} target="_blank" rel="noopener noreferrer">
                      <Badge variant={airdrop.isConfirmed ? 'default' : 'outline'}>
                        {airdrop.isConfirmed ? 'Confirmed' : 'Rumoured'}
                      </Badge>
                    </a>
                  </div>

                  <div class="mt-2 flex gap-2">
                    <a
                      href={airdrop.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-300/80 hover:text-blue-400"
                      title="Visit website"
                      aria-label={`Visit ${airdrop.name}'s website`}
                    >
                      <Globe2 class="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-300/80 hover:text-blue-400"
                      title="Follow on X (Twitter)"
                      aria-label={`Follow ${airdrop.name} on X (Twitter)`}
                    >
                      <Twitter class="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-300/80 hover:text-blue-400"
                      title="Join community"
                      aria-label={`Join ${airdrop.name}'s community chat`}
                    >
                      <MessageCircle class="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-300/80 hover:text-blue-400"
                      title="Read documentation"
                      aria-label={`Read ${airdrop.name}'s documentation`}
                    >
                      <BookOpen class="h-4 w-4" />
                    </a>
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

<footer class="mt-auto bg-[#FF0000] py-6">
  <div class="container mx-auto px-4 text-center">
    <p class="flex items-center justify-center gap-2 font-medium text-white">
      Brought to you by
      <a
        href="https://x.com/LegacyDSL"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center font-bold transition-opacity hover:opacity-80"
        aria-label="Visit Legacy on X (Twitter)"
      >
        <img src={DslLogo} alt="DSL Logo" class="h-6 w-6" />
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
