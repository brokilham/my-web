<template>
    <div>
        <section class="about section">
            <div class="section-inner">
                <h2 class="heading">About Me</h2>
                <div class="content">
                    <p>Write a brief intro about yourself. It's a good idea to include your personal interests and hobbies as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Commodo ligula eget dolor. Aenean massa.</p>
                    
                </div><!--//content-->
            </div><!--//section-inner-->                 
        </section>
    
        <section class="github section">
            <div class="section-inner">
                <h2 class="heading">My GitHub</h2>
                <p>You can embed your GitHub contribution graph calendar using IonicaBizau's <a href="https://github.com/IonicaBizau/github-calendar" target="_blank">GitHub Calendar</a> widget.          
                <div id="github-graph" class="github-graph">
                </div><!--//github-graph-->             
            </div><!--//secton-inner-->
        </section>
  </div>
</template>

<script>
export default {
  layout: 'layout',
  mounted: function () {
      //GitHubCalendar("#github-graph", "brokilham");
  }
}
</script>