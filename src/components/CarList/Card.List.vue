<template>
<div className='card-list'>
    <Card/>
       </div>
</template>

<script>
export default {
  name: 'CardList',
  components: { CardList }
}
</script>

<styles>
.card-list {
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
}
</styles>
