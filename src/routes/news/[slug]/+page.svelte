<script>
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
    import BlogpostMetadata from '$lib/components/blogpostMetadata.svelte';
    import Utterances from '$lib/components/utterances.svelte';
    import {readTranslation} from "$lib/stores/stores";
    let t = readTranslation();
    export let data;
    let blogpost = data.blogpost;
</script>

<BlogpostMetadata {blogpost}></BlogpostMetadata>
<SvelteMarkdown {renderers} source={blogpost.markdown}></SvelteMarkdown>
<Utterances delay={100} name={blogpost.title + ''}></Utterances>
<p>
    <a rel="noopener" href="https://github.com/OWASP/www-project-cornucopia/cornucopia.owasp.org/tree/master/data/news/{blogpost.path}/index.md">{$t('news.slug.p1')}</a>
</p>

<style>
    p
    {
        text-align: center;
    }
</style>