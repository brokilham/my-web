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

        <section class="latest section">
            <div class="section-inner">
                <h2 class="heading">Latest Projects</h2>
                <div class="content">    
                                        
                    <div class="item featured text-center">
                        <h3 class="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/velocity-bootstrap-theme-for-startup-products/" target="_blank">Internal Dashboard Padma Tirta Wisesa</a></h3>
                        <p class="summary">A popular Bootstrap 4 theme for promoting startup products</p>
                        <div class="featured-image has-ribbon">
                            <a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/velocity-bootstrap-theme-for-startup-products/" target="_blank">
                            <img class="img-fluid project-image" src="~/assets/images/projects/project-featured.png" alt="project name" />
                            </a>
                            <div class="ribbon">
                                <div class="text">New</div>
                            </div>
                        </div>
                            
                        <div class="desc text-left">                                    
                            <p>You can promote your main project here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div><!--//desc-->         
                    </div><!--//item-->
                    <hr class="divider" />

                    <div class="item row">
                        <a class="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">
                        <img class="img-fluid project-image" src="~/assets/images/projects/project-1.png" alt="project name" />
                        </a>
                        <div class="desc col-md-8 col-12">
                            <h3 class="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">Simabk</a></h3>
                            <p class="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                            <p><a class="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank"><i class="fas fa-external-link-alt"></i>Find out more</a></p>
                        </div><!--//desc-->                          
                    </div><!--//item-->
                    
                    <div class="item row">
                        <a class="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank">
                        <img class="img-fluid project-image" src="~/assets/images/projects/project-2.png" alt="project name" />
                        </a>
                        <div class="desc col-md-8 col-12">
                            <h3 class="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank">Pelindo 3 Multigate System</a></h3>
                            <p class="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                            <p><a class="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank"><i class="fas fa-external-link-alt"></i>Find out more</a></p>
                        </div><!--//desc-->                          
                    </div><!--//item-->
                       
                </div><!--//content-->  
            </div>               
        </section>

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
import JQuery from 'jquery'
let $ = JQuery
export default {
  layout: 'layout',
   methods:{
    init(){
        GitHubCalendar("#github-graph", "brokilham");

    },
    mymethod(){
        $('.level-bar-inner').css('width', '0');
          $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });
    }
  },
  mounted: function () {
       this.init()
       this.mymethod()
  }
  
}
</script>