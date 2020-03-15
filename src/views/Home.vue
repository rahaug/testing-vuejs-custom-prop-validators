<template>
  <div class="container mx-auto max-w-lg">
    <notification-message type="info" message="I like info turtles" />
    <notification-message type="error" message="I like error turtles" />
    <notification-message type="success" message="I like success turtles" />
  </div>
</template>

<script>
// @ is an alias to /src
import NotificationMessage from '../components/NotificationMessage'

export default {
  name: 'Home',
  components: {
    NotificationMessage,
  }
}
</script>
