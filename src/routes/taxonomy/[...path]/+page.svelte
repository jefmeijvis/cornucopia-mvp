<script>
    export let data;
    import { Text } from '$lib/utils/text';
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
    import ViewSourceOnGithub from "$lib/components/viewSourceOnGithub.svelte"
    import Utterances from "$lib/components/utterances.svelte"
</script>

<!--The location is a file -->
{#each data.files as file}
    <p>├──<a href="/taxonomy/{data.path}/{file}">{Text.Format(file)}</a></p>
{/each}

<!--The location is a folder -->
{#each data.folders as folder}
    <p>├──<a href="/taxonomy/{data.path}/{folder}">{Text.Format(folder)}</a></p>
{/each}

<!--The location is filecontent -->
{#if data.content && data.content != ''}
    <SvelteMarkdown {renderers} source={data.content}></SvelteMarkdown>
    <ViewSourceOnGithub path={'./data/taxonomy/' + data.path + '/index.md'} ></ViewSourceOnGithub>
    <Utterances name={data.path} ></Utterances>
{/if}

<style>
    p
    {
        font-size: 1.5rem;
        margin:0;
    }

    a
    {
        text-decoration: none;
        font-weight: bold;
        color:var(--background);
        transition: var(--transition);
    }

    a:hover
    {
        opacity:50%;
    }
</style>