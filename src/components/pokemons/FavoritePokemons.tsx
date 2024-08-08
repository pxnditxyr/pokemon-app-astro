import type { IFavoritePokemon } from '@interfaces/favorite-pokemon.interface'
import { createSignal, For } from "solid-js"
import { FavoritePokemon } from './FavoritePokemon'

const getLocalStoragePokemons = () : IFavoritePokemon[] => {
  const pokemons = JSON.parse(
    localStorage.getItem( 'favorites' ) ?? '[]'
  )

  return pokemons
}


export const FavoritePokemons = () => {

  const [ pokemons, setPokemons ] = createSignal( getLocalStoragePokemons() )

  return (
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <For each={ pokemons() }>
        {
          ( pokemon ) => (
            <FavoritePokemon pokemon={ pokemon } />
          )
        }
      </For>
    </div>
  )
}
