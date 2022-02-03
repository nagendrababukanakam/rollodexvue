<template>
<div className='card-container'>
    <img
    alt='monster'
    src='https://robohash.org/1?set=set2&size=180x180'
    />
    <h2>Nagendra</h2>
    <p>Nagendra@gmail.com</p>
   </div>
</template>

<script>
</script>

<styles>
.card-container{
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
}
</styles>
