<script lang="ts">
    import { base } from '$app/paths';
    import { run } from 'svelte/legacy';

    import { page } from "$app/stores";
    import { Text } from "$lib/utils/text";

    let parts : string[] = $state();

    run(() => {
        parts = $page.url.pathname.split('/');
    });

    function generateHref(index : number, input : string) : string
    {
        let result = '';
        for(let i = 0 ; i < index + 1 ; i++)
        {
            result += parts[i] + '/';
        }
        return result.replace('//', '/');
    }

    function generateName(index : number, input : string)
    {
        if(input == '')
            return 'Home'
        else
            return Text.FormatPlain(input);
    }

    function isBase(path : string)
    {
        if(path ==  base + '/' || base == '.' || base == path.replace('../', '') || path.includes('//'))
            return true;
        return false;
    }
</script>

{#if !isBase($page.url.pathname) }
    <p id="breadcrumbs">
        {#each parts as part,index}
            {#if index != 0 && !isBase(`/${part}`) }
                <span>{'>'} </span>
            {/if}

            {#if index == 0 }
                <a href="{base + generateHref(index,part)}">{generateName(index,part)}</a>
            {:else if parts[index-1] && parts[index-1] == 'cards'}
                <a class="card-code" href="{generateHref(index,part)}">{generateName(index,part)}</a>
            {:else if `/${part}`.replace(base+base, base) !== '' && !isBase(`/${part}`) }
                <a href="{generateHref(index,part)}">{generateName(index,part)}</a>
            {/if}
            <span> </span>
        {/each}
    </p>
{/if}

<style>
    p
    {
        padding-top: 5.5rem;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        margin:0;
    }

    a:hover
    {
        opacity: 50%;
    }

    a
    {
        text-decoration: none;
        color:var(--background);
        transition: var(--transition);
    }

    .card-code 
    {
        text-transform: uppercase;
    }
    @media (max-aspect-ratio: 1/1)
    {
        #breadcrumbs
        {
            margin: 0rem 1rem;
        }
    }
</style>