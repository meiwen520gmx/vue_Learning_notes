<template>
	<div class="slide">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.slide{
	width: 100%;
	flex-shrink: 0;
}

.slide img{
  width: 100%;
  object-fit:cover
}
</style>