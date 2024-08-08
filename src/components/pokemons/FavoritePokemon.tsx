import type { IFavoritePokemon } from '@interfaces/favorite-pokemon.interface'
import { createSignal, For, Show, type Component } from "solid-js"

interface IProps {
  pokemon: IFavoritePokemon
}

export const FavoritePokemon : Component<IProps> = ({ pokemon }) => {

  const [ isVisible, setIsVisible ] = createSignal( true )

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ pokemon.id }.png`

  const onClickDelete = () => {
    const favorites = JSON.parse(
      localStorage.getItem( 'favorites' ) ?? '[]'
    ) as IFavoritePokemon[]

    const newFavorites = favorites.filter(
      ( favorite ) => favorite.id !== pokemon.id
    )

    localStorage.setItem( 'favorites', JSON.stringify( newFavorites ) )

    setIsVisible( false )
  }

  return (
    <Show when={ isVisible() }>
      <article class="flex flex-col justify-center items-center bg-white shadow-md rounded-md p-4">
        <a href={ `/pokemons/${ pokemon.name }` }>

          <img
            src={ imageUrl }
            alt={ pokemon.name }
            class="w-32 h-32"
            style={
              `view-transition-name: ${ pokemon.name }-image`
            }
            />

          <p class="text-gray-800 font-bold text-lg">
            #{ pokemon.id } { pokemon.name }
          </p>
        </a>
        <button
          class="bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-2"
          onClick={ onClickDelete }
        >
          Delete
        </button>
      </article>
    </Show>
  )
}
