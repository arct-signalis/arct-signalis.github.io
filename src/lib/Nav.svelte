<script lang="ts">
  import { page } from '$app/stores'
  import { resolve } from '$app/paths'
</script>

<nav
  class="px-3 border-b border-b-primary/10 bg-background sticky top-0 z-50 flex justify-between"
>
  <div class="flex space-x-6">
    <a
      href={resolve('/')}
      class="flex items-center py-4 font-medium text-accent hover:underline underline-offset-4"
      class:underline={$page.url.pathname === '/'}>Domov</a
    >

    <a
      href={resolve('/posts')}
      class="flex items-center py-4 font-medium text-accent hover:underline underline-offset-4"
      class:underline={$page.url.pathname.includes('/posts')}>Zápisnice</a
    >

    <a
      href="https://prolaborate.systemthinking.sk/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3DProlaborate-spa%26redirect_uri%3Dhttps%253A%252F%252Fprolaborate.systemthinking.sk%252Fsignin-callback%26response_type%3Dcode%26scope%3Dprofile%2520openid%2520offline_access%26state%3D506b636809b048929d6e8576f2dad470%26code_challenge%3D1EP9fUpfRDH9QJPjmbE-jqFDrxEZZXErjnui_kll7jY%26code_challenge_method%3DS256%26response_mode%3Dquery%26redirecturl%3D%252F"
      class="flex items-center py-4 font-medium text-accent hover:underline underline-offset-4"
    >
      Prolaborate</a
    >

    <a
      href="https://www.youtube.com/channel/UCkk9TIfPDi27vWxdbKLPEPg"
      class="flex items-center py-4 font-medium text-accent hover:underline underline-offset-4"
    >
      Youtube</a
    >

    <a
      href="https://github.com/arct-signalis"
      class="flex items-center py-4 font-medium text-accent hover:underline underline-offset-4"
    >
      Github</a
    >

    <a
      href="https://www.linkedin.com/company/system-thinking-in-it-and-digital-fabrication/"
      class="flex items-center py-4 font-medium text-accent hover:underline underline-offset-4"
    >
      Linkedin</a
    >
  </div>
</nav>
