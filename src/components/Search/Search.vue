<template>
<input
        name='search'
        className='search-box'
        type='password'
        placeholder='search monsters'
        onChange = {props.handleSearch}
    />
</template>

<script>
export default {
components: {
ComponentA
}
}
</script>

<styles>
.search-box {
    -webkit-appearance: none;
    border: none;
    outline: none;
    padding: 10px;
    width: 150px;
    line-height: 30px;
    margin-bottom: 30px;
  }
</styles>
