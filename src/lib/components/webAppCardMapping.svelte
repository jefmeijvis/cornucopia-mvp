<script lang="ts">
    export let mapping : any;

</script>
        <p class="mapping-title">OWASP SCP</p>
        <p class="mapping-value">{mapping.owasp_scp || '-'}</p>
        <p class="mapping-title">OWASP ASVS</p>
        <p class="mapping-value">{mapping.owasp_asvs || '-'}</p>
        <p class="mapping-title">OWASP AppSensor</p>
        <p class="mapping-value">{mapping.owasp_appsensor || '-'}</p>
        <p class="mapping-title">CAPEC</p>
        <p class="mapping-value">{mapping.owasp_capec || '-'}</p>        
        <p class="mapping-title">SAFECODE</p>
        <p class="mapping-value">{mapping.safecode || '-'}</p>
<style>
    .mapping-title, .mapping-value
    {
        font-size: max(.60vw,1vh);
        margin:0;
        margin-left: .25rem;
        margin-right: .25rem;
    }

    .mapping-title
    {
        font-weight: bold;
    }

    .mapping-value
    {
        border-bottom: 1px rgb(192, 192, 192) solid;
    }
</style>