<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import { Card } from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import * as Select from '$lib/components/ui/select/index.js';
  import { Button } from '$lib/components/ui/button';

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
</script>

<header class="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold">SuiPlay Airdrop Tracker</h1>
    <p class="mt-4">From Legacy to the Sui Community</p>
    <div class="stats mt-8">
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="text-2xl font-bold">{airdrops.length}</p>
          <p class="text-sm">Total Airdrops</p>
        </div>
        <div>
          <p class="text-2xl font-bold">
            {airdrops.filter((a) => a.status === 'confirmed').length}
          </p>
          <p class="text-sm">Confirmed</p>
        </div>
        <div>
          <p class="text-2xl font-bold">
            {airdrops.filter((a) => a.communityVerified).length}
          </p>
          <p class="text-sm">Verified</p>
        </div>
      </div>
    </div>
  </div>
</header>

<main class="container mx-auto py-8">
  <!-- Filters -->
  <div class="mb-8 flex gap-4">
    <Select.Root type="single">
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

    <Input type="search" placeholder="Search projects..." class="w-[250px]" />
  </div>

  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each airdrops as airdrop}
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

<section class="bg-gray-50 py-12">
  <div class="container mx-auto px-4">
    <h2 class="mb-6 text-2xl font-bold">Help Grow The List</h2>

    <Card>
      <form class="space-y-4 p-6">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="space-y-2">
            <label for="projectName" class="text-sm font-medium">Project Name</label>
            <Input id="projectName" placeholder="Enter project name" />
          </div>

          <div class="space-y-2">
            <label for="tokenSymbol" class="text-sm font-medium">Token Symbol</label>
            <Input id="tokenSymbol" placeholder="Enter token symbol" />
          </div>

          <div class="space-y-2">
            <label for="status" class="text-sm font-medium">Status</label>
            <Select.Root type="single">
              <Select.Trigger>
                <!-- <Select.Value placeholder="Select status" /> -->
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="confirmed">Confirmed</Select.Item>
                <Select.Item value="rumored">Rumored</Select.Item>
                <Select.Item value="completed">Completed</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div class="space-y-2">
            <label for="sourceLink" class="text-sm font-medium">Source Link</label>
            <Input id="sourceLink" placeholder="Enter source URL" />
          </div>
        </div>

        <div class="pt-4">
          <Button type="submit" class="w-full">Submit New Airdrop</Button>
        </div>
      </form>
    </Card>
  </div>
</section>
