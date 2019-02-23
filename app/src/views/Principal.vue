<template lang='pug'>
div.principal
  ul
    li: router-link(:to=`{ name: 'leitores' }`) Leitores
    li: router-link(:to=`{ name: 'livros' }`) Livros
    li: router-link(:to=`{ name: 'emprestimos' }`) Empréstimos
</template>
