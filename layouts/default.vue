<script setup lang="ts">
import { ACCOUNT } from '@/libs/appwrite'
import { useAuthStore } from '@/stores/auth.store'
import { useLoadingStore } from '@/stores/loading.store'

const authStore = useAuthStore()
const loadingStore = useLoadingStore()

onMounted(() => {
	ACCOUNT.get()
		.then(response =>
			authStore.set({
				email: response.email,
				id: response.$id,
				name: response.name,
				status: response.status,
			})
		)
		.finally(() => loadingStore.set(false))
})
</script>

<template>
	<UiLoader v-if="loadingStore.isLoading" />
	<template v-else>
		<LayoutsMainNavbar />
		<section class="min-h-screen bg-white dark:bg-black">
			<slot />
		</section>
	</template>
</template>