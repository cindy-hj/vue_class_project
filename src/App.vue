<template>
    <div id="wrap">
        <nav-bar />

        <router-view/>
        <footer-page />
    </div>
    

    


</template>

<script>
import NavBar from '@/components/NavigationBar.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {

    components: {
     
      NavBar,
      FooterPage

    },

    setup () {

        return {}
    }
}

</script>




<style>
/* #wrap{
  height: auto;
  min-height: 100%;
  padding-bottom: 300px;
} */
</style>
