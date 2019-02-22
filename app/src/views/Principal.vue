<template lang='pug'>
div.principal
  ul
    li: router-link(:to=`{ name: 'usuarios' }`) Usuários
    li: a Livros
    li: a Empréstimos
</template>
