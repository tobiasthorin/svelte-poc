<script lang="ts">
  import { user } from "../store/user";
</script>

<header class="flex items-center p-4 bg-gray-700 text-gray-100">
  <h1 class="text-xl">Page title</h1>
  <span class="ml-auto mr-4">{$user.name}</span>
  <img
    class="h-10 rounded-full"
    src={$user.profilePictureURL}
    alt="The current user"
  />
</header>
