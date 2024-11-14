import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { onUpdated } from 'vue'

export const useProductStore = defineStore('counter', () => {
  const productList = ref([
    { name: '상품 1', 
      imagePath: 'src/assets/product1.png',
      price : 10000,
      isFavorite : false
    },
    { name: '상품 2', 
      imagePath: 'src/assets/product2.png',
      price : 20000,
      isFavorite : false
    },
    { name: '상품 3', 
      imagePath: 'src/assets/product3.png',
      price : 30000,
      isFavorite : false
    },
    { name: '상품 4', 
      imagePath: 'src/assets/product4.png',
      price : 40000,
      isFavorite : false
    },
  ])

  const favoriteUpdate = function(idx) {
    productList.value[idx].isFavorite = !productList.value[idx].isFavorite
  }
  const favoriteProducts = ref(null)
  watch(productList.value, (newproductlist, old) => {
    favoriteProducts.value = newproductlist.filter((product) => product.isFavorite)

  })
  
  return { productList, favoriteUpdate, favoriteProducts }
  }, {persist: true}
)
