<script lang="ts">
  const members = [
    ['Adam Hladík', 'https://avatars.githubusercontent.com/u/57076047?v=4'],
    ['UR', 'https://avatars.githubusercontent.com/u/71756887?v=4'],
    ['Dominik Mifkovič', 'https://avatars.githubusercontent.com/u/71759745?v=4'],
    ['Ján Sližik', 'https://avatars.githubusercontent.com/u/71568783?v=4'],
  ]
</script>

<svelte:head>
  <!--  Essential META Tags -->
  <title>Home</title>
  <!-- <meta content="TODO" name="description "> -->
  <meta content="Home" property="og:title ">
  <meta content="website" property="og:type ">
  <!-- <meta content="TODO" property="og:image "> -->
  <meta content="https://arct-signalis.github.io" property="og:url ">
  <!-- <meta content="TODO" property="og:description "> -->
  <meta content="arct" property="og:site_name ">

  <!-- Twitter meta tags -->
  <meta content="summary_large_image" name="twitter:card">
  <!-- <meta content="https://arct-signalis.github.io" name="twitter:site"> -->
  <meta content="arct" name="twitter:title">
  <meta content="Team project arct" name="twitter:description">
  <!-- <meta content="TODO" name="twitter:image">
  <meta content="TODO" name="twitter:image:alt"> -->
</svelte:head>

<section class="space-y-4">
  <div class="flex space-x-4 items-start">
    <div class="flex flex-col space-y-6">
      <h1 class="text-text text-3xl">Systémové myslenie v IT</h1>
      <h1 class="text-text text-5xl font-extrabold">Tímový Projekt Signalis</h1>
      <p class="text-text font-medium">Garant Predmetu <span class="text-accent">Ing. Roman Kazička, CSc., PhD.</span></p>
    </div>
  </div>

  <hr class="border-text/10">

  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 rounded-2xl overflow-hidden shadow-xl">
      {#each members as [name, picture]}
        <div class="relative aspect-square bg-text/5 overflow-hidden">
          <img 
            src={picture}
            class="w-full h-full object-cover"
            alt="member profile">

          <div class="absolute z-20 bottom-0 inset-x-0 p-2 md:p-4 pt-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <span class="text-text font-medium text-sm sm:text-xl">{name}</span>
          </div>
        </div>
      {/each}
  </div>
</section>