<template>
  <div>
    <header1></header1>
    <product1></product1>
    <footer1></footer1>
  </div>
</template>

<script>
import {WOW} from 'wowjs'
export default {
  mounted(){
    var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    live: false
});
wow.init();
  }
}
</script>