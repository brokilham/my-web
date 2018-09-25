<template>
  <div>
    <Header/>
    <div class="container sections-wrapper">
        <div class="row">
            <div class="primary col-lg-8 col-12">
                <nuxt/>
            </div>
            <div class="secondary col-lg-4 col-12">
                <SideBar/>
            </div>         
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import SideBar from '~/components/side_bar.vue'
export default {
  components: {
    Header,
    Footer,
    SideBar
  }
}
</script>