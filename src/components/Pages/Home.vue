<template>
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <Search handleSearch={handleSearch} />
      <CardList monsters={filteredMonsters} />
    </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<styles>
.App {
    text-align: center;
  }
  h1 {
    font-family: 'Bigelow Rules';
    font-size: 72px;
    color: #0ccac4;
  }
</styles>
