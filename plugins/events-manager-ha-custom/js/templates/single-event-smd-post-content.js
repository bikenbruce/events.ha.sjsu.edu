<script type="text/template" id="single-event-smd-post-content">

	<h1 id="entry-content-id">
      <%= eventName %>
   </h1>
   <p id="entry-content-date-time">
      <%= eventDates %>
      <br />
      <i>
        <%= eventTime %>
      </i>
   </p>
   <p id="entry-content-notes">
     <%= eventNote %>
   </p>
   <p id="entry-content-excerpt">
      <%= eventExcerpt %>
   </p>
   
   <div id="entry-content-categories">
      <div class="entry-content-heading"> 
           <strong>Categories</strong>
      </div>
      <%= eventCategories %>
   </div>
   <div id="entry-content-location">
     <div class="entry-content-heading">
          <strong >Location</strong>     
     </div>
      <%= eventLocationLink %> <br/>
      <%= eventLocationMap %>
   </div>
</script>