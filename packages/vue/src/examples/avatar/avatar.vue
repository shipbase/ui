<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/iamdin.png" alt="@shipbase" />
    <AvatarFallback>shipbase</AvatarFallback>
  </Avatar>
</template>