<script>
    import CookieNotice from "$lib/components/cookieNotice.svelte";
    import Footer from "$lib/components/footer.svelte";
    import GoogleAnalytics from "$lib/components/googleAnalytics.svelte";
    import Metadata from "$lib/components/metadata.svelte";
    import Navbar from "$lib/components/navigation/navbar.svelte";
    export let data;
</script>

<Metadata></Metadata>
<GoogleAnalytics></GoogleAnalytics>
<CookieNotice></CookieNotice>

<div>
    <Navbar></Navbar>
    <div class="slot-container">
        <slot></slot>
    </div>
    <Footer timestamp={data.timestamp}></Footer>
</div>


<style>
    .slot-container
    {
        min-height: 100vh;
    }

    div
    {
        min-height: 100vh;
        background-color:var(--background-color);
    }
</style>