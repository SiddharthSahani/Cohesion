<script>
    import { SignIn, SignOut } from '@auth/sveltekit/components';
    import { page } from '$app/stores';
</script>

<div class="text-foreground">
    <!-- <img src="/img/logo.svg" alt="Company Logo" /> -->
    {#if $page.data.session}
        <img src={$page.data.session.user.image ?? 'https://i.pravatar.cc/300'} alt="User Avatar" />
        <SignOut />
    {:else}
        <SignIn provider="google" signInPage="signin" />
    {/if}
</div>
