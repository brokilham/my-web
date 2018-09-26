<template>
    <div>
        <section class="about section">
            <div class="section-inner">
                <h2 class="heading">About Me</h2>
                <div class="content">
                    <p>Hi, I'm Ilham and I specialize in Mobile and Web Programming. I am excited about what I do, and I like helping people. Nothing is more satisfying than being part of a team with similar interests, and organizations that value employees.</p>
                    <p> I'm passionate about Web Development. I like to make creative applications. I am always ready to learn new things </p>
                </div><!--//content-->
            </div><!--//section-inner-->                 
        </section>

        <section class="experience section">
            <div class="section-inner">
                <h2 class="heading">Work Experience</h2>
                <div class="content">                 
                    <div class="item">
                        <h3 class="title">PHP Web Programmer - <span class="place"><a href="#">PT. Padma Tirta Wisesa</a></span> <span class="year">(2017 - Until Now)</span></h3>
                        <p>Developing and maintaining internal dashboard system.</p>
                    </div><!--//item-->
                    
                    <div class="item">
                        <h3 class="title">.Net Programer - <span class="place"><a href="#">PT. Duta Media Cipta</a></span> <span class="year">(2016 - 2017)</span></h3>
                        <p>Developing and maintaining internal dashboard system.</p>
                    </div><!--//item-->         
                </div><!--//content-->  
            </div><!--//section-inner-->                 
        </section><!--//section-->
    
        <section class="github section">
            <div class="section-inner">
                <h2 class="heading">My GitHub</h2>
                <div id="github-graph" class="github-graph">
                </div><!--//github-graph-->             
            </div><!--//secton-inner-->
        </section>
  </div>
</template>

<script>
import GitHubCalendar from 'github-calendar'
export default {
  layout: 'layout',
   methods:{
    init(){
        GitHubCalendar("#github-graph", "brokilham");
    }
  },
  mounted: function () {
       this.init()
  }
  
}
</script>