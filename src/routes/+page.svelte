<script lang="ts">
  import Fuse from 'fuse.js';

  import { Badge } from '$lib/components/ui/badge';
  import { Card } from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import * as Select from '$lib/components/ui/select/index.js';

  import { SUIPLAY_IMAGE_HREF } from '$lib/shared/shared.constant';

  // Define the Airdrop type
  type Airdrop = {
    projectName: string;
    tokenSymbol: string;
    status: 'confirmed' | 'rumored' | 'completed';
    amount?: string;
    eligibility?: string;
    dateAnnounced?: Date;
    expectedDate?: Date;
    communityVerified: boolean;
    sourceLink?: string;
  };

  // Sample data - replace with your actual data
  let airdrops: Airdrop[] = [
    {
      projectName: 'Sample Project 1',
      tokenSymbol: 'SAMPLE1',
      status: 'confirmed',
      amount: '1000',
      communityVerified: true,
      sourceLink: 'https://example.com'
    },
    {
      projectName: 'Sample Project 2',
      tokenSymbol: 'SAMPLE2',
      status: 'rumored',
      communityVerified: false
    }
  ];

  // Helper function for badge variants
  function getStatusVariant(status: 'confirmed' | 'rumored' | 'completed') {
    switch (status) {
      case 'confirmed':
        return 'default';
      case 'rumored':
        return 'outline';
      case 'completed':
        return 'outline';
      default:
        return 'default';
    }
  }

  // Add reactive variables for search and filter
  let searchQuery = $state('');
  let statusFilter = $state('all');

  // Configure Fuse.js
  const fuseOptions = {
    keys: ['projectName', 'tokenSymbol'],
    threshold: 0.4,
    ignoreLocation: true
  };

  const fuse = new Fuse(airdrops, fuseOptions);

  // Use derived state for filtered airdrops
  let filteredAirdrops = $derived.by(() => {
    let results = [...airdrops];

    // Apply status filter
    if (statusFilter !== 'all') {
      results = results.filter((airdrop) => airdrop.status === statusFilter);
    }

    // Apply search if query exists
    if (searchQuery.trim()) {
      results = fuse.search(searchQuery).map((result) => result.item);
    }

    return results;
  });

  // Handle status filter change
  function handleStatusChange(value: string) {
    statusFilter = value;
  }
</script>

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
      <Input
        type="search"
        placeholder="Search projects..."
        class="w-[250px] border-white/10 bg-white/5 text-white placeholder:text-white/50"
        bind:value={searchQuery}
      />
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredAirdrops as airdrop}
        <Card
          class="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
        >
          <div class="p-6">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-white">{airdrop.projectName}</h3>
              <Badge variant={getStatusVariant(airdrop.status)}>
                {airdrop.status}
              </Badge>
            </div>

            <div class="mt-4 space-y-2">
              <p class="text-sm text-blue-300/80">
                Token: {airdrop.tokenSymbol}
              </p>
              {#if airdrop.amount}
                <p class="text-sm text-blue-300/80">Amount: {airdrop.amount}</p>
              {/if}

              <div class="flex items-center gap-2">
                {#if airdrop.communityVerified}
                  <Badge variant="outline" class="border-blue-400/30"
                    >Community Verified</Badge
                  >
                {/if}

                {#if airdrop.sourceLink}
                  <a
                    href={airdrop.sourceLink}
                    class="text-sm text-blue-400 transition-colors hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source →
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</main>

<footer class="fixed bottom-0 left-0 right-0 bg-[#020817] py-6">
  <div class="container mx-auto px-4 text-center">
    <p class="flex items-center justify-center gap-2 text-sm text-white/50">
      Made with
      <a href="https://x.com/LegacyDSL" target="_blank" rel="noopener noreferrer">
        <span
          class="inline-block h-3 w-3 rounded-sm bg-red-500 transition-transform hover:scale-110"
        ></span>
      </a>
      by
      <a href="https://x.com/LegacyDSL" target="_blank" rel="noopener noreferrer">
        <span
          class="inline-block h-3 w-3 rounded-sm bg-red-500 transition-transform hover:scale-110"
        ></span>
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
