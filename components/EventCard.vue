 <template>
  <nuxt-link :to="'/event/' + eventData.id">
    <div class="-shadow">
      <span class="eyebrow">
        @{{ eventData.time }} on {{ parsedDate }}
      </span>
      <h4 class="title">
        {{ eventData.title }}
      </h4>
      <span>ABOUT: {{ eventData.description }}</span>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'EventCard',
  props: {
    eventData: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    parsedDate() {
      const eventDate = new Date(this.eventData.date)
      return eventDate.toDateString()
    }
  }
}
</script>
<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
