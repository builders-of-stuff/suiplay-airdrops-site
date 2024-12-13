<script lang="ts">
  import Fuse from 'fuse.js';

  import { Badge } from '$lib/components/ui/badge';
  import { Card } from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import * as Select from '$lib/components/ui/select/index.js';

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

<!-- header -->
<header class="text-white">
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold">SuiPlay0X1 Airdrop Tracker</h1>
    <p class="mt-4">From Legacy to the Sui Community</p>
    <div class="stats mt-8">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <div class="p-4 text-center">
            <p class="text-sm font-medium text-muted-foreground">Total Airdrops</p>
            <p class="mt-2 text-3xl font-bold">{filteredAirdrops.length}</p>
          </div>
        </Card>

        <Card>
          <div class="p-4 text-center">
            <p class="text-sm font-medium text-muted-foreground">Confirmed</p>
            <p class="mt-2 text-3xl font-bold">
              {filteredAirdrops.filter((a) => a.status === 'confirmed').length}
            </p>
          </div>
        </Card>

        <Card>
          <div class="p-4 text-center">
            <p class="text-sm font-medium text-muted-foreground">Verified</p>
            <p class="mt-2 text-3xl font-bold">
              {filteredAirdrops.filter((a) => a.communityVerified).length}
            </p>
          </div>
        </Card>
      </div>
    </div>
  </div>
</header>

<main class="container mx-auto py-8">
  <!-- Filters -->
  <div class="mb-8 flex gap-4">
    <Select.Root type="single" value={statusFilter} onValueChange={handleStatusChange}>
      <Select.Trigger class="w-[180px]">
        <!-- <Select.Value placeholder="Filter by status" /> -->
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="all">All Status</Select.Item>
        <Select.Item value="confirmed">Confirmed</Select.Item>
        <Select.Item value="rumored">Rumored</Select.Item>
        <Select.Item value="completed">Completed</Select.Item>
      </Select.Content>
    </Select.Root>

    <Input
      type="search"
      placeholder="Search projects..."
      class="w-[250px]"
      bind:value={searchQuery}
    />
  </div>

  <!-- airdrops -->
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each filteredAirdrops as airdrop}
      <Card>
        <div class="p-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold">{airdrop.projectName}</h3>
            <Badge variant={getStatusVariant(airdrop.status)}>
              {airdrop.status}
            </Badge>
          </div>

          <div class="mt-4 space-y-2">
            <p class="text-sm text-gray-600">
              Token: {airdrop.tokenSymbol}
            </p>
            {#if airdrop.amount}
              <p class="text-sm">Amount: {airdrop.amount}</p>
            {/if}

            <div class="flex items-center gap-2">
              {#if airdrop.communityVerified}
                <Badge variant="outline">Community Verified</Badge>
              {/if}

              {#if airdrop.sourceLink}
                <a
                  href={airdrop.sourceLink}
                  class="text-sm text-blue-500 hover:underline"
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
</main>
